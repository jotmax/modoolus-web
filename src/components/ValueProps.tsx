// ValueProps.tsx
export default function ValueProps() {
  const items = [
    {
      title: "Practical Courses",
      desc: "Industry-relevant curriculum designed by experts.",
      icon: "🎯",
      color: "from-primary-400 to-primary-600",
    },
    {
      title: "Expert Mentorship",
      desc: "One-on-One guidance from seasoned professionals",
      icon: "👨‍🏫",
      color: "from-secondary-400 to-secondary-600",
    },
    {
      title: "Real Internships",
      desc: "Guaranteed placements with partner companies",
      icon: "💼",
      color: "from-success-400 to-success-600",
    },
    {
      title: "Vibrant Community",
      desc: "Network with colleagues and enthusiasts",
      icon: "🤝",
      color: "from-info-400 to-info-600",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary-600 uppercase mb-3">
            Learn · Build · Belong
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 max-w-4xl mx-auto">
            At Modoolus, we transform ambitious African youths into world-class
            tech professionals through practical learning and real-world
            experience.
          </h2>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
