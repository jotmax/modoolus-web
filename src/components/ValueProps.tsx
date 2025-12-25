export default function ValueProps() {
  const items = [
    {
      title: "Practical Courses",
      desc: "Industry-relevant curriculum designed by experts.",
    },
    {
      title: "Expert Mentorship",
      desc: "One-on-One guidance from seasoned professionals",
    },
    {
      title: "Real Internships",
      desc: "Guaranteed placements with partner companies",
    },
    {
      title: "Vibrant Community",
      desc: "Network with colleagues and enthusiasts",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-black/70">
            Learn·Build·Belong
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-black md:text-3xl">
            Modoolus is where ambitious African youth transform into world-class
            tech professionals through practical learning and real-world
            experience.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-none rounded-lg bg-black/10" />
                <div>
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-black/70">
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
