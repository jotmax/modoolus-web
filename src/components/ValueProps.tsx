export default function ValueProps() {
  const items = [
    {
      title: "Practical Courses",
      desc: "Industry-relevant curriculum designed by experts.",
      color: "bg-[#1E4ED8]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(30,78,216,1)]",
    },
    {
      title: "Expert Mentorship",
      desc: "One-on-One guidance from seasoned professionals",
      color: "bg-[#F59E0B]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]",
    },
    {
      title: "Real Internships",
      desc: "Guaranteed placements with partner companies",
      color: "bg-[#7C3AED]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(124,58,237,1)]",
    },
    {
      title: "Vibrant Community",
      desc: "Network with colleagues and enthusiasts",
      color: "bg-[#10B981]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]",
    },
  ];

  return (
    <section className="bg-white border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#1E4ED8] md:text-5xl">
            Learn·Build·Belong
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-black md:text-lg">
            Modoolus is where ambitious African youth transform into world-class
            tech professionals through practical learning and real-world
            experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {items.map((item) => (
            <div
              key={item.title}
              className={`${item.color} ${item.shadowColor} border-4 border-black p-8 md:p-10`}
            >
              <div className="mb-6 h-16 w-16 md:h-20 md:w-20">
                <svg
                  className="h-full w-full text-white/30"
                  viewBox="0 0 80 80"
                  fill="currentColor"
                >
                  <rect x="0" y="0" width="32" height="32" opacity="0.7" />
                  <rect x="40" y="0" width="32" height="32" opacity="0.5" />
                  <rect x="0" y="40" width="32" height="32" opacity="0.5" />
                  <rect x="40" y="40" width="32" height="32" opacity="0.7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
