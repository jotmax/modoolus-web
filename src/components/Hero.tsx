import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F6F2E8] border-b-4 border-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold leading-tight text-black md:text-6xl lg:text-7xl">
            Where Africa's <br />
            <span className="bg-[#1E4ED8] px-3 py-1 text-white inline-block">
              Next Tech Talent
            </span>{" "}
            <br />
            Begins
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-black md:text-lg">
            Level up with hands-on training, mentorship, and real opportunities.
            Join Africa&apos;s fastest-growing tech community and transform your
            future.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#get-started"
              className="rounded-md bg-[#1E4ED8] px-6 py-3.5 text-base font-bold text-white hover:opacity-90 transition-opacity"
            >
              Get Started Now
            </Link>
            <Link
              href="#cohort"
              className="rounded-md border-2 border-[#1E4ED8] bg-white px-6 py-3.5 text-base font-bold text-[#1E4ED8] hover:bg-[#1E4ED8] hover:text-white transition-colors"
            >
              Enroll For The Next Cohort
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Main large image */}
            <div className="relative z-10 border-4 border-[#1E4ED8] shadow-[8px_8px_0px_0px_rgba(30,78,216,1)]">
              <Image
                src="/images/hero.png"
                alt="Modoolus community"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Top left overlay image */}
            <div className="absolute -top-4 -left-4 z-20 w-32 h-32 md:w-36 md:h-36 border-4 border-[#1E4ED8] bg-white shadow-[6px_6px_0px_0px_rgba(30,78,216,1)]">
              <Image
                src="/images/hero2.png"
                alt="Student learning"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right overlay image */}
            <div className="absolute -bottom-4 -right-4 z-20 w-32 h-32 md:w-36 md:h-36 border-4 border-red-500 bg-white shadow-[6px_6px_0px_0px_rgba(239,68,68,1)]">
              <Image
                src="/images/hero3.png"
                alt="Student success"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
