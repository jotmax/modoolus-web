import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#1a4d6d] to-[#2a5f7f] md:min-h-[700px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:py-32">
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Learn. Lead.
            <br />
            Transform.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            Build in-demand skills to unlock your potential and drive outcomes
            for your career and business.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#get-started"
              className="flex items-center gap-2 rounded-md bg-[#0066FF] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#0052CC]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              For Individuals
            </Link>
            <Link
              href="#cohort"
              className="flex items-center gap-2 rounded-md border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              For Businesses
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 flex items-center justify-end">
          <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px]">
            <Image
              src="/images/hero.png"
              alt="Modoolus student learning"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a2540]/80 to-transparent md:from-[#0a2540]/60"></div>
    </section>
  );
}
