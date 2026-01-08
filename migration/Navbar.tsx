import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-beige sticky top-0 z-50 border-b border-gray-200/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-primary-600 to-secondary-600 transition-transform group-hover:scale-110" aria-hidden />
          <span className="text-lg font-display font-extrabold text-gray-900">Modoolus</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link 
            href="#courses" 
            className="hover:text-primary-600 transition-colors duration-200"
          >
            Courses
          </Link>
          <Link 
            href="#services" 
            className="hover:text-primary-600 transition-colors duration-200"
          >
            Services
          </Link>
          <Link 
            href="#events" 
            className="hover:text-primary-600 transition-colors duration-200"
          >
            Events
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#get-started"
          className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 hover:shadow-primary transition-all duration-200 hover:-translate-y-0.5"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
