"use client";

import { useState, useEffect } from 'react';
import { getCountdownTimer, CountdownData } from '@/lib/pricing';

interface CountdownTimerProps {
  onExpire?: () => void;
  showLabel?: boolean;
}

export default function CountdownTimer({ onExpire, showLabel = true }: CountdownTimerProps) {
  const [countdown, setCountdown] = useState<CountdownData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initial load
    const initialCountdown = getCountdownTimer();
    setCountdown(initialCountdown);
    
    if (initialCountdown.isExpired && onExpire) {
      onExpire();
    }

    // Update every second
    const interval = setInterval(() => {
      const newCountdown = getCountdownTimer();
      setCountdown(newCountdown);
      
      if (newCountdown.isExpired && onExpire) {
        onExpire();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onExpire]);

  if (!mounted || !countdown) {
    return null; // Prevent hydration mismatch
  }

  if (countdown.isExpired) {
    return null;
  }

  return (
    <div className="inline-flex flex-col items-center">
      {showLabel && (
        <p className="text-sm font-medium text-gray-600 mb-2">
          🔥 Limited Time Offer Ends In:
        </p>
      )}
      <div className="flex gap-2">
        <TimeUnit value={countdown.daysRemaining} label="Days" />
        <span className="text-2xl font-bold text-gray-400">:</span>
        <TimeUnit value={countdown.hoursRemaining} label="Hours" />
        <span className="text-2xl font-bold text-gray-400">:</span>
        <TimeUnit value={countdown.minutesRemaining} label="Mins" />
        <span className="text-2xl font-bold text-gray-400">:</span>
        <TimeUnit value={countdown.secondsRemaining} label="Secs" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px]">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-lg px-3 py-2 min-w-[50px] text-center">
        <span className="text-2xl font-bold tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-gray-500 mt-1 font-medium">{label}</span>
    </div>
  );
}