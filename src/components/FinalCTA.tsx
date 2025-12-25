import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="cohort" className="bg-[#1B3FA6]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold tracking-wide text-white/80">
              REGISTER FOR THE NEXT
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
              COHORT
            </h2>
          </div>

          <Link
            href="#"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1B3FA6] hover:opacity-90"
          >
            Enroll For The Next Cohort
          </Link>
        </div>
      </div>
    </section>
  );
}
