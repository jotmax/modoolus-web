import Link from "next/link";

export default function WhyModoolus() {
  const items = [
    {
      title: "Hands-on Training",
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
    <section className="bg-[#1E4ED8] border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Why Modoolus
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-4 border-black bg-white p-8 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-extrabold text-[#1E4ED8] md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black md:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#get-started"
            className="border-4 border-black bg-white px-8 py-4 text-base font-bold text-[#1E4ED8] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
}
