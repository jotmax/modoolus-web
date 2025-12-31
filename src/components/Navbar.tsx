import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#F6F2E8] border-b-4 border-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 border-4 border-black bg-[#1E4ED8]" />
          <span className="text-2xl font-extrabold text-black">Modoolus</span>
        </Link>

        <nav className="hidden items-center gap-10 text-base font-bold text-black md:flex">
          <Link href="#courses" className="hover:text-[#1E4ED8] transition-colors">
            Courses
          </Link>
          <Link href="#services" className="hover:text-[#1E4ED8] transition-colors">
            Services
          </Link>
          <Link href="#events" className="hover:text-[#1E4ED8] transition-colors">
            Events
          </Link>
        </nav>

        <Link
          href="#get-started"
          className="border-4 border-black bg-[#1E4ED8] px-6 py-3 text-base font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
