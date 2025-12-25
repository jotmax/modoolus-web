import Link from "next/link";

export default function Events() {
  const events = [
    {
      title: "Ask Me Anything: Tax Laws for Freelancers & SMEs",
      desc:
        "Join a live session with a professional tax accountant as we break down Nigeria’s new tax laws, compliance requirements, and practical steps freelancers and small businesses must take to stay compliant and protect their income.",
    },
  ];

  return (
    <section id="events" className="bg-[#F6F2E8]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-black md:text-3xl">
            What’s Happening Next?
          </h2>
          <p className="mt-2 text-sm text-black/70">
            Join our live sessions, workshops, and expert-led conversations
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col justify-between rounded-xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold text-black">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/70">
                  {event.desc}
                </p>
              </div>

              <Link
                href="#"
                className="mt-4 inline-flex text-sm font-semibold text-[#1E4ED8]"
              >
                Register Here →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
