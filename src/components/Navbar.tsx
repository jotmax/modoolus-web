import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F2E8]/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-black" aria-hidden />
          <span className="text-lg font-semibold">Modoolus</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-black md:flex">
          <Link href="#courses" className="hover:opacity-80">
            Courses
          </Link>
          <Link href="#services" className="hover:opacity-80">
            Services
          </Link>
          <Link href="#events" className="hover:opacity-80">
            Events
          </Link>
        </nav>

        <Link
          href="#get-started"
          className="rounded-md bg-[#1E4ED8] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
