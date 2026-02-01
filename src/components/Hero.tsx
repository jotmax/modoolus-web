"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const roles = [
    "Tech Talents",
    "Product Designers",
    "AI Engineers",
    "Software Engineers",
    "Security Analysts",
    "Data Analysts"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="bg-[#0B2447] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#0B2447] opacity-90" />
      
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:py-20 lg:gap-16">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight tracking-tight">
            <span className="text-white">Where Africa&apos;s Next</span>
            <br />
            {/* Fixed height container to prevent shifting */}
            <span className="block h-[1.2em] md:h-[1.3em] lg:h-[1.4em] relative">
              <span 
                className={`absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent transition-all duration-300 ${
                  isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {roles[currentRole]}
              </span>
            </span>
            <span className="text-white">Begin</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white">
            Level up with hands-on training, mentorship, and real opportunities.
            Join Africa&apos;s fastest-growing tech community and transform your
            future.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.6), 0 0 20px rgba(251, 146, 60, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 50px -10px rgba(249, 115, 22, 0.8), 0 0 30px rgba(251, 146, 60, 0.6)';
                e.currentTarget.style.backgroundColor = '#ea580c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(249, 115, 22, 0.6), 0 0 20px rgba(251, 146, 60, 0.4)';
                e.currentTarget.style.backgroundColor = '#ea580c';
              }}
            >
              Get Started Now
            </Link>
            <Link
              href="#cohort"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#0B2447] transition-all duration-200"
            >
              Enroll For The Next Cohort
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">200+ Active Learners</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Expert Mentorship</span>
            </div>
          </div>
        </div>

        {/* Hero Image - 2x Bigger, Fixed Position */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Fixed container prevents image from shifting */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl aspect-[4/3]">
              <Image
                src="/images/hero.png"
                alt="Modoolus learning platform"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
              
              {/* Floating badges - Updated text and larger */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-primary-200">
                <p className="text-sm font-semibold text-primary-700">🎓 Practical Courses</p>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-yellow-200">
                <p className="text-sm font-semibold text-yellow-700">🚀 Real Projects</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 -right-8 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}