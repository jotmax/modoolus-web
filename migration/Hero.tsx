import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-beige">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-gray-900 tracking-tight">
            Where Africa's <br />
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Next Tech Talent
            </span> <br />
            Begins
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-gray-700">
            Level up with hands-on training, mentorship, and real opportunities.
            Join Africa&apos;s fastest-growing tech community and transform your
            future.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#get-started"
              className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-700 hover:shadow-primary transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Started Now
            </Link>
            <Link
              href="#cohort"
              className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:border-primary-300 transition-all duration-200"
            >
              Enroll For The Next Cohort
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">200+ Active Learners</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Expert Mentorship</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <Image
                src="/images/hero.png"
                alt="Modoolus learning platform"
                width={520}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-primary-600">🎓 4 Courses</p>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                <p className="text-xs font-semibold text-secondary-600">🚀 Real Projects</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
