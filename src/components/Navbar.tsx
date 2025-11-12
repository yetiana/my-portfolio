import Link from 'next/link';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav className="fixed top-20 left-1/2 transform -translate-x-1/2 flex gap-8 bg-transparent z-50">
      <Link href="/" className="text-[#549BF2] text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Home
      </Link>
      <Link href="work" className="text-[#549BF2] text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Work Experience
      </Link>
      <Link href="/projects" className="text-[#549BF2] text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Projects
      </Link>
      <Link href="#contact" className="text-[#549BF2] text-lg font-semibold hover:scale-110 hover:text-[#994D00] transition-transform duration-300">
        Contact
      </Link>
    </nav>
  );
}
