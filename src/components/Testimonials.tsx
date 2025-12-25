export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The speakers broke down LLMs in a way that finally made sense to me. I’ve been watching YouTube tutorials for months, but nothing compared to this.",
      name: "Tunde A.",
      location: "Ibadan | Instagram",
    },
    {
      quote:
        "The hands-on approach is unmatched. No boring theory, just pure practical work. The energy was something else. Best decision I made this year!",
      name: "Blessing N.",
      location: "Port Harcourt | Instagram",
    },
    {
      quote:
        "Started with ZERO design experience. Now two months in, I’ve designed three full mobile apps. The mentorship is top-tier and prepares you for real jobs.",
      name: "Aisha M.",
      location: "Lagos | Instagram",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-black md:text-3xl">
            You’re Not Alone on This Journey
          </h2>
          <p className="mt-2 text-sm text-black/70">
            See what people say about us and join our growing community.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-6 text-black/80">
                “{item.quote}”
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-black">
                  {item.name}
                </p>
                <p className="text-xs text-black/60">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
