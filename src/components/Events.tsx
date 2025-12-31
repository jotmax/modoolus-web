import Link from "next/link";

export default function Events() {
  const events = [
    {
      title: "Register For The Next AMA Session",
      desc: "Join us for an intimate conversation about breaking into big tech.",
      bgColor: "bg-[#1E4ED8]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(20,40,100,1)]",
    },
    {
      title: "Register For The Next Workshop Session",
      desc: "Join us for a FREE AI Prompt Engineering Class",
      bgColor: "bg-[#F59E0B]",
      shadowColor: "shadow-[8px_8px_0px_0px_rgba(180,100,10,1)]",
    },
  ];

  return (
    <section id="events" className="bg-[#F6F2E8] border-b-4 border-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#1E4ED8] md:text-5xl">
            What&apos;s Happening Next?
          </h2>
          <p className="mt-4 text-base text-black md:text-lg">
            Join our AMA sessions, workshops, and networking events
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className={`flex flex-col justify-between border-4 border-black ${event.bgColor} ${event.shadowColor} p-8 md:p-10`}
            >
              <div>
                <h3 className="text-3xl font-extrabold text-white md:text-4xl">
                  {event.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                  {event.desc}
                </p>
              </div>

              <Link
                href="#"
                className="mt-8 inline-block border-4 border-black bg-white px-8 py-4 text-center text-base font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                Register Here
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
