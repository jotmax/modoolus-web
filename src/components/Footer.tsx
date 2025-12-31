import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 border-4 border-white bg-[#1E4ED8]" />
              <span className="text-2xl font-extrabold">Modoolus</span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Modoolus is an education-driven tech platform designed to help
              people learn, upskill, and accelerate their careers through
              accessible learning experiences.
            </p>
          </div>

          <div>
            <p className="text-base font-bold">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base font-bold">Courses</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link
                  href="#courses"
                  className="hover:text-white transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="hover:text-white transition-colors"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="hover:text-white transition-colors"
                >
                  Large Language Model (LLM)
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="hover:text-white transition-colors"
                >
                  Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base font-bold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Agidingbi, Ikeja, Lagos.</li>
              <li>
                <a
                  href="mailto:info@modoolus.com"
                  className="hover:text-white transition-colors"
                >
                  info@modoolus.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348084985719"
                  className="hover:text-white transition-colors"
                >
                  +234 808 498 5719
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
