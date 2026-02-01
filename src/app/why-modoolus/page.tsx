import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WhyModoolusPage() {
  const reasons = [
    {
      icon: "💻",
      title: "Hands-On Training",
      desc: "Build real projects from day one. No boring theory—just practical, applicable skills that employers value."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentorship",
      desc: "Learn from industry professionals with years of experience. Get personalized guidance and career advice."
    },
    {
      icon: "🚀",
      title: "Job Opportunities",
      desc: "Direct pathway to employment with our partner companies. We help you land your dream tech job."
    },
    {
      icon: "🤝",
      title: "Vibrant Community",
      desc: "Network with ambitious peers, collaborate on projects, and build lifelong connections in tech."
    },
    {
      icon: "🎯",
      title: "Industry-Relevant Curriculum",
      desc: "Learn the exact skills companies are hiring for. Our curriculum is updated quarterly with industry feedback."
    },
    {
      icon: "💼",
      title: "Portfolio Building",
      desc: "Graduate with a professional portfolio of real projects that showcase your skills to potential employers."
    },
  ];

  const stats = [
    { number: "200+", label: "Active Learners" },
    { number: "4", label: "Tech Courses" },
    { number: "85%", label: "Job Placement Rate" },
    { number: "3", label: "Mentorship Sessions/Week" },
  ];

  const testimonials = [
    {
      quote: "Best decision I made this year. The hands-on approach is unmatched!",
      name: "Blessing N.",
      role: "UI/UX Designer",
      location: "Port Harcourt"
    },
    {
      quote: "Started with ZERO experience. Now I've designed three full mobile apps.",
      name: "Aisha M.",
      role: "Product Designer",
      location: "Lagos"
    },
    {
      quote: "The mentorship prepared me for real jobs. I got hired 2 weeks after graduating!",
      name: "Tunde A.",
      role: "Software Engineer",
      location: "Ibadan"
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0B2447] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#0B2447] opacity-90" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6">
            <span className="text-white">Why Choose </span>
            <span 
              className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Modoolus
            </span>
            <span className="text-white">?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We're not just another online course platform. We're a community-driven tech school that transforms ambitious Africans into world-class tech professionals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-extrabold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine practical training, expert mentorship, and real job opportunities to create a unique learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our graduates who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0B2447] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join Africa's fastest-growing tech community and start building your future today.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#0B2447] hover:bg-gray-100 transition-all duration-200"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}