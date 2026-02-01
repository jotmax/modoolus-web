// StatsBar.tsx
export default function StatsBar() {
  const stats = [
    { number: "", label: "Tech Courses", icon: "" },
    { number: "", label: "Active Learners", icon: "" },
    { number: "", label: "Mentorship Sessions", icon: "" },
  ];

  return (
    <section className="bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">
                {stat.number}
              </div>
              <div className="text-sm tracking-wide opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
