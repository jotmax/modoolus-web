"use client";

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import { 
  detectUserCountry, 
  getPricingConfig, 
  formatPrice, 
  getUserCurrency,
  PricingConfig 
} from '@/lib/pricing';

interface PriceDisplayProps {
  showCountdown?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function PriceDisplay({ showCountdown = true, size = 'medium' }: PriceDisplayProps) {
  const [pricing, setPricing] = useState<PricingConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [promoActive, setPromoActive] = useState(true);

  useEffect(() => {
    async function loadPricing() {
      try {
        // Check if user has manually selected currency
        const userCurrency = getUserCurrency();
        
        let countryCode: string;
        if (userCurrency && userCurrency !== 'auto') {
          countryCode = userCurrency;
        } else {
          // Auto-detect from IP
          countryCode = await detectUserCountry();
        }
        
        const config = getPricingConfig(countryCode);
        setPricing(config);
        setPromoActive(config.hasPromo);
      } catch (error) {
        console.error('Failed to load pricing:', error);
        // Fallback to default
        const config = getPricingConfig('DEFAULT');
        setPricing(config);
      } finally {
        setLoading(false);
      }
    }

    loadPricing();
  }, []);

  if (loading || !pricing) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-24"></div>
      </div>
    );
  }

  const currentPrice = promoActive ? pricing.promoPrice : pricing.regularPrice;
  const hasDiscount = pricing.hasPromo && promoActive;

  const sizeClasses = {
    small: {
      regular: 'text-lg',
      strikethrough: 'text-sm',
      current: 'text-2xl'
    },
    medium: {
      regular: 'text-xl',
      strikethrough: 'text-base',
      current: 'text-3xl'
    },
    large: {
      regular: 'text-2xl',
      strikethrough: 'text-lg',
      current: 'text-4xl md:text-5xl'
    }
  };

  return (
    <div className="flex flex-col items-start gap-3">
      {/* Price */}
      <div className="flex items-baseline gap-3">
        {hasDiscount && (
          <span className={`${sizeClasses[size].strikethrough} font-medium text-gray-400 line-through`}>
            {formatPrice(pricing.regularPrice, pricing)}
          </span>
        )}
        <span className={`${sizeClasses[size].current} font-bold text-gray-900`}>
          {formatPrice(currentPrice, pricing)}
        </span>
        {hasDiscount && (
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-bold">
            50% OFF
          </span>
        )}
      </div>

      {/* Countdown Timer */}
      {hasDiscount && showCountdown && promoActive && (
        <div className="mt-2">
          <CountdownTimer onExpire={() => setPromoActive(false)} />
        </div>
      )}

      {/* Country Info */}
      <p className="text-xs text-gray-500">
        💳 Pricing for {pricing.country}
      </p>
    </div>
  );
}