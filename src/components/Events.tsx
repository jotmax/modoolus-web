import Link from "next/link";

export default function Events() {
  const events = [
    {
      title: "Ask Me Anything: Tax Laws for Freelancers & SMEs",
      desc: "Join a live session with a professional tax accountant as we break down Nigeria's new tax laws, compliance requirements, and practical steps freelancers and small businesses must take to stay compliant and protect their income.",
      date: "Jan 15, 2026",
      time: "6:00 PM WAT",
      type: "Live Session",
    },
  ];

  return (
    <section id="events" className="bg-beige">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Section Header */}
        <div className="text-center">
          <h6 className="text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
            Upcoming Events
          </h6>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            What's Happening Next?
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Join our live sessions, workshops, and expert-led conversations
          </p>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Event Badges */}
              <div className="flex gap-2 mb-4">
                <span className="badge badge-primary">{event.type}</span>
                <span className="badge badge-info">{event.date}</span>
              </div>

              {/* Event Content */}
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-4">
                  {event.desc}
                </p>

                {/* Time */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{event.time}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group-hover:gap-3 transition-all"
              >
                Register Here
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
