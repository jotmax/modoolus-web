export default function StatsBar() {
  return (
    <section className="bg-[#1B3FA6]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-6 text-white md:grid-cols-3 md:gap-2">
        <div className="text-center">
          <div className="text-3xl font-extrabold">4</div>
          <div className="mt-1 text-xs tracking-wide">Tech Courses</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold">200+</div>
          <div className="mt-1 text-xs tracking-wide">Active Learners</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-extrabold">3</div>
          <div className="mt-1 text-xs tracking-wide">Mentorship Sessions</div>
        </div>
      </div>
    </section>
  );
}
