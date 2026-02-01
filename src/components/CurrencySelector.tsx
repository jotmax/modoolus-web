"use client";

import { useState, useEffect } from 'react';
import { PRICING_BY_COUNTRY, setUserCurrency, getUserCurrency } from '@/lib/pricing';

interface CurrencySelectorProps {
  onCurrencyChange?: (countryCode: string) => void;
}

export default function CurrencySelector({ onCurrencyChange }: CurrencySelectorProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('auto');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = getUserCurrency();
    setSelectedCurrency(saved);
  }, []);

  const handleCurrencyChange = (countryCode: string) => {
    setSelectedCurrency(countryCode);
    setUserCurrency(countryCode);
    setIsOpen(false);
    
    if (onCurrencyChange) {
      onCurrencyChange(countryCode);
    }
    
    // Reload page to apply new currency
    window.location.reload();
  };

  const currencies = [
    { code: 'auto', label: 'Auto-Detect', flag: '🌍' },
    { code: 'NG', label: 'Nigeria (₦)', flag: '🇳🇬' },
    { code: 'GB', label: 'United Kingdom (£)', flag: '🇬🇧' },
    { code: 'US', label: 'United States ($)', flag: '🇺🇸' },
    { code: 'GH', label: 'Ghana (GH₵)', flag: '🇬🇭' },
    { code: 'KE', label: 'Kenya (KSh)', flag: '🇰🇪' },
  ];

  const currentCurrency = currencies.find(c => c.code === selectedCurrency) || currencies[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-primary-500 bg-white transition-colors"
      >
        <span className="text-lg">{currentCurrency.flag}</span>
        <span className="text-sm font-medium text-gray-700">{currentCurrency.label}</span>
        <svg 
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencyChange(currency.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                  selectedCurrency === currency.code ? 'bg-primary-50' : ''
                }`}
              >
                <span className="text-lg">{currency.flag}</span>
                <span className={`text-sm font-medium ${
                  selectedCurrency === currency.code ? 'text-primary-600' : 'text-gray-700'
                }`}>
                  {currency.label}
                </span>
                {selectedCurrency === currency.code && (
                  <svg className="w-4 h-4 text-primary-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}