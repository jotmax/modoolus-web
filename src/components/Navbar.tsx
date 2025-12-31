import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-[#0066FF]" />
          <span className="text-2xl font-bold text-gray-900">Modoolus</span>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-medium text-gray-700 md:flex">
          <Link
            href="#courses"
            className="transition-colors hover:text-[#0066FF]"
          >
            Courses
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-[#0066FF]"
          >
            Services
          </Link>
          <Link
            href="#events"
            className="transition-colors hover:text-[#0066FF]"
          >
            Events
          </Link>
        </nav>

        <Link
          href="#get-started"
          className="rounded-md bg-[#0066FF] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052CC]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
