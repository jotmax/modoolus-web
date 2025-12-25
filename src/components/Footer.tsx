import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-white/10" aria-hidden />
              <span className="text-lg font-semibold">Modoolus</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Modoolus is an education-driven tech platform designed to help
              people learn, upskill, and accelerate their careers through
              accessible learning experiences.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-white">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Courses</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link href="#courses" className="hover:text-white">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white">
                  Large Language Model (LLM)
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white">
                  Software Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Agidingbi, Ikeja, Lagos.</li>
              <li>
                <a href="mailto:info@modoolus.com" className="hover:text-white">
                  info@modoolus.com
                </a>
              </li>
              <li>
                <a href="tel:+2348084985719" className="hover:text-white">
                  +234 808 498 5719
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Modoolus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
