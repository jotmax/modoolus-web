export default function StatsBar() {
  return (
    <section className="bg-[#1E4ED8]">
      <div className="mx-auto flex max-w-7xl flex-col divide-y divide-white/30 px-6 py-8 text-white md:flex-row md:divide-x md:divide-y-0">
        <div className="flex flex-1 flex-col items-center justify-center py-4 md:py-6">
          <div className="text-5xl font-extrabold md:text-6xl">4</div>
          <div className="mt-2 text-sm font-medium tracking-wide md:text-base">
            Tech Courses
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-4 md:py-6">
          <div className="text-5xl font-extrabold md:text-6xl">200+</div>
          <div className="mt-2 text-sm font-medium tracking-wide md:text-base">
            Active Learners
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-4 md:py-6">
          <div className="text-5xl font-extrabold md:text-6xl">3</div>
          <div className="mt-2 text-sm font-medium tracking-wide md:text-base">
            Mentorship Sessions
          </div>
        </div>
      </div>
    </section>
  );
}
