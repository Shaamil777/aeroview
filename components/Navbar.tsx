import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-navy text-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-aviation">
              AeroView
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-aviation transition-colors">Home</Link>
            <Link href="/about" className="hover:text-aviation transition-colors">About</Link>
            <Link href="/services" className="hover:text-aviation transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-aviation transition-colors">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button */}
            <span className="text-sm font-medium">Menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
