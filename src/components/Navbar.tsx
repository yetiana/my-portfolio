import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-[#f8ad9d] text-white">
      <Link href="/" className="font-bold text-xl">Tiana Ye</Link>
      <div className="flex gap-4">
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
