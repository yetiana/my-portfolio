// src/lib/projects.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Project = {
  slug: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

const projectsDir = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects(): Project[] {
  const filenames = fs.readdirSync(projectsDir);
  return filenames.map((filename) => {
    const filePath = path.join(projectsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      description: data.description,
      link: data.link,
      tags: data.tags,
    };
  });
}
