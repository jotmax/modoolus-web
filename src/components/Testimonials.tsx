export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The hands-on approach is unmatched—no boring theory, just pure practical work. The energy was something else. Best decision I made this year!",
      name: "Tunde A.",
      location: "Ibadan | Instagram",
      bgColor: "bg-[#10B981]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      quote:
        "Started with ZERO design experience. Now 2 months in, I've designed 3 full mobile apps! The mentorship is top-tier and the curriculum prepares you for real jobs.",
      name: "Blessing N.",
      location: "Port Harcourt | Instagram",
      bgColor: "bg-[#F59E0B]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      quote:
        "Started with ZERO design experience. Now 2 months in, I've designed 3 full mobile apps! The mentorship is top-tier and the curriculum prepares you for real jobs.",
      name: "Aisha M.",
      location: "Lagos | Instagram",
      bgColor: "bg-[#7C3AED]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    },
  ];

  return (
    <section className="relative bg-white border-b-4 border-black overflow-hidden">
      {/* Chevron background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="chevron-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 L20 0 L20 10 L10 20 L20 30 L20 40 L0 20 M20 20 L40 0 L40 10 L30 20 L40 30 L40 40 L20 20"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chevron-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#1E4ED8] md:text-5xl">
            You&apos;re Not Alone On This Journey
          </h2>
          <p className="mt-4 text-base text-black md:text-lg">
            See what people say about us and join our community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col border-4 border-black ${item.bgColor} ${item.shadowColor} p-8`}
            >
              <div className="mb-6 text-6xl font-bold text-white/30">"</div>

              <p className="flex-1 text-base leading-relaxed text-white md:text-lg">
                {item.quote}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-16 w-16 flex-none border-4 border-black bg-white" />
                <div>
                  <p className="text-lg font-bold text-white">{item.name}</p>
                  <p className="text-sm text-white/80">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
