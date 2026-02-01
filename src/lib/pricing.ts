// lib/pricing.ts
import Cookies from 'js-cookie';

export interface PricingConfig {
  country: string;
  currency: string;
  symbol: string;
  regularPrice: number;
  promoPrice: number;
  hasPromo: boolean;
}

export const PRICING_BY_COUNTRY: Record<string, PricingConfig> = {
  NG: {
    country: 'Nigeria',
    currency: 'NGN',
    symbol: '₦',
    regularPrice: 44590.49,
    promoPrice: 44590.49,
    hasPromo: false
  },
  GB: {
    country: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    regularPrice: 29.49,
    promoPrice: 29.49,
    hasPromo: false
  },
  US: {
    country: 'United States',
    currency: 'USD',
    symbol: '$',
    regularPrice: 34.49,
    promoPrice: 34.49,
    hasPromo: false
  },
  GH: {
    country: 'Ghana',
    currency: 'GHS',
    symbol: 'GH₵',
    regularPrice: 426.96,
    promoPrice: 426.96,
    hasPromo: false
  },
  KE: {
    country: 'Kenya',
    currency: 'KES',
    symbol: 'KSh',
    regularPrice: 4941.95,
    promoPrice: 4941.95,
    hasPromo: false
  },
  // Default fallback
  DEFAULT: {
    country: 'International',
    currency: 'USD',
    symbol: '$',
    regularPrice: 34.49,
    promoPrice: 34.49,
    hasPromo: false
  }
};

/**
 * Detect user's country from IP address
 * Uses multiple free services as fallback
 */
export async function detectUserCountry(): Promise<string> {
  try {
    // Try ipapi.co first (100 requests/day free)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code || 'DEFAULT';
  } catch (error) {
    try {
      // Fallback to ip-api.com (45 requests/minute free)
      const response = await fetch('http://ip-api.com/json/');
      const data = await response.json();
      return data.countryCode || 'DEFAULT';
    } catch (fallbackError) {
      console.error('Geo-detection failed:', fallbackError);
      return 'DEFAULT';
    }
  }
}

/**
 * Get pricing configuration based on country code
 */
export function getPricingConfig(countryCode: string): PricingConfig {
  return PRICING_BY_COUNTRY[countryCode] || PRICING_BY_COUNTRY.DEFAULT;
}

/**
 * Format price with currency symbol
 */
export function formatPrice(amount: number, config: PricingConfig): string {
  if (config.currency === 'NGN' || config.currency === 'GHS') {
    // Format with comma separators for large numbers
    return `${config.symbol}${amount.toLocaleString()}`;
  }
  return `${config.symbol}${amount}`;
}

/**
 * Get or create countdown timer
 * Timer runs for 4 days
 */
export interface CountdownData {
  startTime: number;
  endTime: number;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
  isExpired: boolean;
}

const PROMO_DURATION_DAYS = 4; // 4 days countdown
const COOKIE_NAME = 'modoolus_promo_timer';
const COOKIE_EXPIRY = 365; // 1 year

export function getCountdownTimer(): CountdownData {
  const now = Date.now();
  
  // Check if timer exists in cookie
  const existingTimer = Cookies.get(COOKIE_NAME);
  
  let startTime: number;
  let endTime: number;
  
  if (existingTimer) {
    // Use existing timer
    const timerData = JSON.parse(existingTimer);
    startTime = timerData.startTime;
    endTime = timerData.endTime;
  } else {
    // Create new timer
    startTime = now;
    endTime = now + (PROMO_DURATION_DAYS * 24 * 60 * 60 * 1000);
    
    // Store in cookie
    Cookies.set(COOKIE_NAME, JSON.stringify({ startTime, endTime }), { 
      expires: COOKIE_EXPIRY 
    });
  }
  
  // Calculate remaining time
  const timeLeft = endTime - now;
  const isExpired = timeLeft <= 0;
  
  if (isExpired) {
    return {
      startTime,
      endTime,
      daysRemaining: 0,
      hoursRemaining: 0,
      minutesRemaining: 0,
      secondsRemaining: 0,
      isExpired: true
    };
  }
  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  return {
    startTime,
    endTime,
    daysRemaining: days,
    hoursRemaining: hours,
    minutesRemaining: minutes,
    secondsRemaining: seconds,
    isExpired: false
  };
}

/**
 * Reset countdown timer (for testing or after course completion)
 */
export function resetCountdownTimer(): void {
  Cookies.remove(COOKIE_NAME);
}

/**
 * Check if user has completed a course (stored in localStorage)
 */
export function hasCompletedCourse(courseId: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const completedCourses = localStorage.getItem('completed_courses');
  if (!completedCourses) return false;
  
  const courses = JSON.parse(completedCourses);
  return courses.includes(courseId);
}

/**
 * Mark course as completed
 */
export function markCourseCompleted(courseId: string): void {
  if (typeof window === 'undefined') return;
  
  const completedCourses = localStorage.getItem('completed_courses');
  const courses = completedCourses ? JSON.parse(completedCourses) : [];
  
  if (!courses.includes(courseId)) {
    courses.push(courseId);
    localStorage.setItem('completed_courses', JSON.stringify(courses));
  }
}

/**
 * Get user's preferred currency (from cookie or detect)
 */
export function getUserCurrency(): string {
  return Cookies.get('user_currency') || 'auto';
}

/**
 * Set user's preferred currency
 */
export function setUserCurrency(countryCode: string): void {
  Cookies.set('user_currency', countryCode, { expires: COOKIE_EXPIRY });
}