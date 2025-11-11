// src/lib/data.ts
export type WorkExperience = {
  title: string;
  company: string;
  period: string;
  category?: string;
  tags: string[];
  image?: string;
  description?: string;
};

export const workExperiences: WorkExperience[] = [
    {
    title: 'Business Portfolio Analyst Co-op Student',
    company: 'Canada Border Services Agency',
    period: 'Sep 2025 – Current',
    tags: ['Power BI', 'Data Visualization', 'Excel'],
    category: 'software',
    image: '/ssc.jpeg',
    description:
      'Built automated scripts and visualizations using Power BI, transforming legacy Excel workflows.',
  },
  {
    title: 'Data Analyst/Visualizer Co-op Student',
    company: 'Shared Services Canada',
    period: 'May 2024 – Aug 2024',
    category: 'software',
    tags: ['SharePoint', 'Power BI', 'Public Sector', 'CRM', 'Power Automate'],
    image: '/ssc.jpeg',
    description:
      'Built automated scripts and visualizations using Power BI, transforming legacy Excel workflows.',
  },
  {
    title: 'UI/UX Developer Co-op Student',
    company: 'Transport Canada',
    period: 'Jan 2023 – Apr 2023',
    category: 'software',
    tags: ['UX Research', 'SharePoint', 'Microsoft'],
    image: '/tc.png',
    description:
      'Revamped outdated UI with modern components and improved accessibility for internal tools.',
  },
  {
    title: 'Project Intern',
    company: 'Algonquin College',
    period: 'May 2021 – Aug 2021',
    category: 'software',
    tags: ['QUICC', 'HTTPS', 'Student Projects', 'Networking'],
    image: '/ac.jpg',
    description:
      'Collaborated with Telus engineer to come up with networking solutions',
  },
];
