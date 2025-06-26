import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 sm:py-20 flex flex-col justify-center items-center text-center bg-white text-gray-800">
      <Image
        src="/profile.png" // Replace with your image or remove this
        alt="Tiana Ye"
        width={120}
        height={120}
        className="rounded-full mb-6 border"
      />
      
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Tiana Ye 👋</h1>
      <p className="text-lg max-w-xl text-gray-600 mb-8">
        I'm a software engineering student passionate about full-stack development, clean UI/UX, and solving real-world problems with code.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="bg-[#35524a] text-white px-6 py-3 rounded-lg shadow hover:bg-[#2e473f] transition"
        >
          View My Projects
        </Link>
        <a
          href="mailto:tianaye@email.com"
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Contact Me
        </a>
      </div>

      <footer className="mt-16 text-sm text-gray-400">
        Built with Next.js & Tailwind CSS — © {new Date().getFullYear()} Tiana Ye
      </footer>
    </div>
  );
}
