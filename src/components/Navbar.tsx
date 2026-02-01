"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0B2447] sticky top-0 z-50 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo - Much Bigger, extends beyond navbar */}
        <Link href="/" className="group relative z-10 -my-2">
          <div className="relative h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 transition-transform group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Modoolus"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200"
          >
            Home
          </Link>
          
          <Link 
            href="/courses" 
            className="text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200"
          >
            Courses
          </Link>

          <Link 
            href="/why-modoolus" 
            className="text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200"
          >
            Why Modoolus
          </Link>

          <Link 
            href="/resources" 
            className="text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200"
          >
            Resources
          </Link>

          <Link 
            href="/policies" 
            className="text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200"
          >
            Policies
          </Link>

          {/* Auth Buttons */}
          <Link
            href="/sign-in"
            className="text-sm font-semibold text-white hover:text-primary-400 transition-colors"
          >
            Login
          </Link>
          
          <Link
            href="/sign-up"
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#0B2447] hover:bg-gray-100 transition-all duration-200"
          >
            Signup Now
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 relative z-10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2447] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-white hover:text-primary-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="text-sm font-medium text-white hover:text-primary-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="/why-modoolus" 
              className="text-sm font-medium text-white hover:text-primary-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Modoolus
            </Link>
            <Link 
              href="/resources" 
              className="text-sm font-medium text-white hover:text-primary-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/policies" 
              className="text-sm font-medium text-white hover:text-primary-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Policies
            </Link>
            
            <div className="pt-4 space-y-3 border-t border-white/10">
              <Link
                href="/sign-in"
                className="block text-center text-sm font-semibold text-white hover:text-primary-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="block text-center rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-[#0B2447] hover:bg-gray-100 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Signup Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}