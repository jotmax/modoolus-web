// WhyModoolus.tsx
import Link from "next/link";

export default function WhyModoolus() {
  const items = [
    {
      title: "Hands on Training",
      desc: "Build real projects from day one.",
      icon: "💻",
    },
    {
      title: "Expert Mentorship",
      desc: "Learn from Industry leaders",
      icon: "🎓",
    },
    {
      title: "Job Opportunities",
      desc: "Direct pathway to employment",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Why Modoolus
          </h2>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="#get-started"
            className="rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white hover:bg-primary-700 hover:shadow-primary hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
