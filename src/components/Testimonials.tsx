export default function Testimonials() {
  const testimonials = [
    {
      quote: "The speakers broke down LLMs in a way that finally made sense to me. I've been watching YouTube tutorials for months, but nothing compared to this.",
      name: "Tunde A.",
      location: "Ibadan",
      platform: "Instagram",
      rating: 5,
    },
    {
      quote: "The hands-on approach is unmatched. No boring theory, just pure practical work. The energy was something else. Best decision I made this year!",
      name: "Blessing N.",
      location: "Port Harcourt",
      platform: "Instagram",
      rating: 5,
    },
    {
      quote: "Started with ZERO design experience. Now two months in, I've designed three full mobile apps. The mentorship is top-tier and prepares you for real jobs.",
      name: "Aisha M.",
      location: "Lagos",
      platform: "Instagram",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center">
          <h6 className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
            Student Success Stories
          </h6>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            You're Not Alone on This Journey
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            See what people say about us and join our growing community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-700 mb-6">
                "{item.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.location} • {item.platform}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Join <span className="font-semibold text-primary-600">200+ students</span> transforming their careers
          </p>
        </div>
      </div>
    </section>
  );
}
