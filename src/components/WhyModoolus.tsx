import Link from "next/link";

export default function WhyModoolus() {
  const items = [
    {
      title: "Hands on Training",
      desc: "Build real projects from day one.",
    },
    {
      title: "Expert Mentorship",
      desc: "Learn from Industry leaders",
    },
    {
      title: "Job Opportunities",
      desc: "Direct pathway to employment",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-black md:text-3xl">
            Why Modoolus
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/10 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto h-12 w-12 rounded-lg bg-black/10" />
              <h3 className="mt-4 text-lg font-bold text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-black/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#get-started"
            className="rounded-md bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
