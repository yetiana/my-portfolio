import Link from 'next/link';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="fixed top-4 md:top-20 left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-8 bg-transparent z-50 flex-wrap justify-center px-4">
      <Link href="/" className="text-[#549BF2] text-sm md:text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Home
      </Link>
      <Link href="work" className="text-[#549BF2] text-sm md:text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Work
      </Link>
      <Link href="/projects" className="text-[#549BF2] text-sm md:text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Projects
      </Link>
      <Link href="#contact" className="text-[#549BF2] text-sm md:text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Contact
      </Link>
    </nav>
  );
}
