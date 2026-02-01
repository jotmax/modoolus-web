"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Import pricing utilities
import { detectUserCountry, getPricingConfig, formatPrice } from '@/lib/pricing';
import CountdownTimer from '@/components/CountdownTimer';
import CurrencySelector from '@/components/CurrencySelector';

export default function CoursesPage() {
  const [pricingConfig, setPricingConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPricing() {
      try {
        const countryCode = await detectUserCountry();
        const config = getPricingConfig(countryCode);
        setPricingConfig(config);
      } catch (error) {
        const config = getPricingConfig('DEFAULT');
        setPricingConfig(config);
      } finally {
        setLoading(false);
      }
    }
    loadPricing();
  }, []);

  const courses = [
    {
      id: "intro-ai-tools",
      title: "Introduction to AI Tools",
      subtitle: "Master AI Tools - No Coding Required",
      description: "This program equips you to leverage AI for productivity and creativity. You'll master ChatGPT, Claude, Midjourney, and 10+ cutting-edge AI tools. Learn prompt engineering, content creation, visual design, and automation. No coding experience required - perfect for content creators, marketers, and professionals looking to 10x their productivity with AI.",
      duration: "8 weeks",
      students: "New!",
      badge: "NEW",
      icon: "🤖",
      color: "from-purple-400 to-pink-400",
      highlights: [
        "Master 10+ professional AI tools",
        "Advanced prompt engineering techniques",
        "AI-powered content creation",
        "Visual design with Midjourney & DALL-E",
        "Workflow automation with AI"
      ]
    },
    {
      id: "frontend-engineering",
      title: "Frontend Software Engineering",
      subtitle: "Build Beautiful Web Applications",
      description: "This program takes you from beginner to job-ready frontend developer with AI skills. You'll master React, Next.js, and modern web technologies while leveraging GitHub Copilot and AI tools. Build 10+ production-ready projects, learn responsive design, and deploy real applications. Gain hands-on experience with our AI-assisted development approach and job readiness support.",
      duration: "16 weeks",
      students: "180+",
      icon: "💻",
      color: "from-blue-400 to-cyan-400",
      highlights: [
        "React & Next.js mastery",
        "Build 10+ real-world projects",
        "AI-assisted coding with GitHub Copilot",
        "Deploy production applications",
        "Job placement support included"
      ]
    },
    {
      id: "backend-engineering",
      title: "Backend Software Engineering",
      subtitle: "Build Scalable Server Applications",
      description: "This program transforms you into a backend engineer capable of building robust, scalable APIs and server systems. Master Node.js, Express, databases (SQL & NoSQL), and cloud deployment with AI assistance. Learn authentication, security best practices, and microservices architecture. Build real backend systems, gain hands-on experience, and prepare for backend developer roles.",
      duration: "16 weeks",
      students: "150+",
      icon: "⚙️",
      color: "from-green-400 to-emerald-400",
      highlights: [
        "Node.js & Express expertise",
        "Master SQL and NoSQL databases",
        "RESTful & GraphQL API development",
        "Cloud deployment & DevOps basics",
        "Security & authentication mastery"
      ]
    },
    {
      id: "product-design-ai",
      title: "Product Design with AI",
      subtitle: "Design Stunning User Experiences",
      description: "This program equips you to become a skilled UI/UX designer who can analyze product needs, craft innovative concepts, and deliver engaging web and mobile experiences. You will explore AI-powered design tools, master Figma, conduct user research, and collaborate with software teams. Gain career-ready skills through our job readiness support, technical workshops, and hands-on design internships.",
      duration: "12 weeks",
      students: "200+",
      icon: "🎨",
      color: "from-pink-400 to-rose-400",
      highlights: [
        "Master Figma & AI design tools",
        "User research & testing",
        "Interactive prototyping",
        "Design systems creation",
        "Build professional portfolio"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing with AI",
      subtitle: "Master Modern Marketing",
      description: "This program takes you from beginner to digital marketing specialist with AI superpowers. Master SEO, social media marketing, paid advertising, and analytics while using AI to create content 10x faster. Learn campaign optimization, conversion rate improvement, and data-driven decision making. Build real marketing campaigns, gain hands-on experience with industry tools, and prepare for marketing specialist roles.",
      duration: "10 weeks",
      students: "New!",
      badge: "NEW",
      icon: "📱",
      color: "from-orange-400 to-amber-400",
      highlights: [
        "SEO & content marketing mastery",
        "AI-powered campaign creation",
        "Social media marketing",
        "Google & Facebook Ads expertise",
        "Analytics & optimization"
      ]
    },
    {
      id: "cybersecurity-appsec",
      title: "Cyber Security - Application Security",
      subtitle: "Become a Red Team Professional",
      description: "This program takes you from beginner to application security professional ready for red team roles. Master penetration testing, vulnerability assessment, and ethical hacking. Learn to identify security gaps, test comprehensive defense systems, and secure applications. Gain expertise in OWASP Top 10, security code review, and professional penetration testing. Qualify for penetration testing, application security engineering, and red team specialist positions.",
      duration: "20 weeks",
      students: "120+",
      icon: "🛡️",
      color: "from-red-400 to-orange-400",
      highlights: [
        "Penetration testing mastery",
        "Application security engineering",
        "Red team methodologies",
        "OWASP Top 10 vulnerabilities",
        "Industry certification preparation"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#0B2447] relative overflow-hidden py-20">
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Currency Selector */}
          <div className="flex justify-end mb-8">
            <CurrencySelector />
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6">
              <span className="text-white">Explore Our </span>
              <span className="text-yellow-400">AI-Integrated Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Transform your career with industry-relevant tech skills. All courses include AI tools training for accelerated learning.
            </p>

            {/* Countdown Timer */}
            {pricingConfig && (
              <div className="flex flex-col items-center gap-4 mb-8">
                <CountdownTimer showLabel={true} />
                <p className="text-white/80 text-sm">
                  💳 Pricing for {pricingConfig.country}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-[#40C7DD] py-20">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative Top Border */}
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                
                <div className="p-8 md:p-10 relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                      <span className="text-4xl">{course.icon}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-8 right-8">
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                        {course.badge}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B2447] mb-2">
                    {course.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg font-semibold text-gray-600 mb-4">
                    {course.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="font-semibold">{course.students} students</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {loading ? (
                      <div className="h-10 w-32 bg-gray-200 animate-pulse rounded"></div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#0B2447]">
                          {formatPrice(pricingConfig?.regularPrice || 0, pricingConfig || {})}
                        </span>
                        <span className="text-sm text-gray-500">per course</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/sign-up"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#FDB813] hover:bg-[#e5a711] text-[#0B2447] font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      ENROLL NOW
                    </Link>
                    <Link
                      href={`/courses/${course.id}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#0B2447] hover:bg-[#19376D] text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      COURSE DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Red Team Callout */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-500">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-red-100 rounded-xl flex items-center justify-center text-5xl">
                🛡️
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#0B2447] mb-4">
                  Ready for Red Team Roles?
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Our <strong>Cybersecurity (Application Security Track)</strong> prepares complete beginners for professional red team positions:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Penetration Testing Roles - Simulate attacks and find vulnerabilities",
                    "Application Security Engineering - Secure software development lifecycle",
                    "Test Comprehensive Defense - Evaluate security systems and controls",
                    "Identify Security Gaps - Find and report security weaknesses"
                  ].map((role, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{role}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/courses/cybersecurity-appsec"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-lg"
                >
                  EXPLORE CYBERSECURITY TRACK
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0B2447] to-[#19376D] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            All courses include AI tools training, hands-on projects, and job placement support. Launch your career with us today.
          </p>
          
          {pricingConfig && !loading && (
            <div className="mb-8">
              <p className="text-white/70 text-sm mb-2">Starting at</p>
              <p className="text-5xl font-bold text-yellow-400 mb-2">
                {formatPrice(pricingConfig.regularPrice, pricingConfig)}
              </p>
              <p className="text-white/70 text-sm">
                💳 Pricing for {pricingConfig.country}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#FDB813] hover:bg-[#e5a711] text-[#0B2447] font-bold rounded-lg transition-colors text-lg shadow-lg"
            >
              GET STARTED NOW
            </Link>
            <Link
              href="/why-modoolus"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0B2447] font-bold rounded-lg transition-colors text-lg"
            >
              WHY MODOOLUS?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}