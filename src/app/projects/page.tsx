import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6">
        {projects.map((proj) => (
          <div key={proj.slug} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-gray-600">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Project
            </a>
            <div className="text-sm text-gray-400 mt-1">
              {(proj.tags ?? []).join(', ')}. //fallback if missing or invalid tags
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
