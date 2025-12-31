import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-8">
          <Link
            href="#"
            className="border-4 border-black bg-[#1E4ED8] px-8 py-4 text-base font-bold text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
          >
            Join Our Community
          </Link>
          <Link
            href="#cohort"
            className="border-4 border-[#1E4ED8] bg-white px-8 py-4 text-base font-bold text-[#1E4ED8] shadow-[6px_6px_0px_0px_rgba(30,78,216,1)] hover:shadow-[4px_4px_0px_0px_rgba(30,78,216,1)] transition-shadow"
          >
            Enroll For The Next Cohort
          </Link>
        </div>
      </div>

      <section id="cohort" className="bg-[#1E4ED8] border-y-4 border-black">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            REGISTER FOR THE NEXT
            <br />
            COHORT
          </h2>

          <Link
            href="#"
            className="mt-10 inline-block border-4 border-black bg-white px-10 py-5 text-lg font-bold text-[#1E4ED8] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
          >
            Enroll For The Next Cohort
          </Link>
        </div>
      </section>
    </section>
  );
}
