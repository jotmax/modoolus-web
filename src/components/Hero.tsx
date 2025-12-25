import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F6F2E8]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:py-14">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-tight text-black md:text-5xl">
            Where Africa’s <br />
            Next Tech Talent <br />
            Begins
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-black/80 md:text-base">
            Level up with hands-on training, mentorship, and real opportunities.
            Join Africa&apos;s fastest-growing tech community and transform your
            future.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#get-started"
              className="rounded-md bg-[#1E4ED8] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Get Started Now
            </Link>
            <Link
              href="#cohort"
              className="rounded-md border border-black/20 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              Enroll For The Next Cohort
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-[260px] w-full max-w-md overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm md:h-[320px]">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/0" />
            <div className="absolute left-4 top-4 h-14 w-14 rounded-md bg-black/10" />
            <div className="absolute left-10 top-20 h-12 w-12 rounded-md bg-black/10" />
            <div className="absolute left-6 bottom-6 h-12 w-12 rounded-md bg-black/10" />
            <div className="absolute right-4 bottom-4 h-16 w-16 rounded-md bg-black/10" />
            <div className="absolute right-8 top-10 h-12 w-12 rounded-md bg-black/10" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-black/60">
                <div className="flex items-center justify-center">
  <Image
    src="/images/hero.png"
    alt="Modoolus hero"
    width={520}
    height={420}
    className="rounded-lg object-cover"
    priority
  />
</div>

              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
