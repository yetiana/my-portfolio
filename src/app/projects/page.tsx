import { getAllProjects } from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../../components/Contact';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-[#f5ecd7] text-gray-800 px-6 py-16">
      <h1 className="text-4xl font-bold text-[#443850] mb-8">Projects</h1>

      <p className="text-[#555] mb-12 max-w-2xl">
        These are projects I&apos;ve created and collaborated on — many of which were built with creativity, coffee, and lots of debugging.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-[#443850] hover:shadow-lg transition"
          >
            <Image
              src={`/${project.slug}.png`}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#443850] mb-1">{project.title}</h2>
              <p className="text-sm text-[#555] mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#549BF2] text-white px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="inline-block mt-3 text-sm text-[#549BF2] font-semibold hover:underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Contact />
    </main>
  );
}
