'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const jobs = [
  {
    title: 'Data Analyst/Visualizer — Shared Services Canada',
    desc: 'Created dashboards and automated data visualizations.',
  },
  {
    title: 'UI/UX Developer — Transport Canada (ASD)',
    desc: 'Redesigned internal tools using React and Figma.',
  },
  {
    title: 'Project Intern — Algonquin College',
    desc: 'Helped develop educational tools with Flask and MongoDB.',
  },
];

export default function WorkPreview() {
  return (
    <section id="work" className="py-16 bg-[#bfdbf7] px-6 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-[#443850] mb-6"
      >
        Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white border-2 border-[#443850] p-4 rounded-xl hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-[#443850]">{job.title}</h3>
            <p className="text-sm text-[#555] mt-2">{job.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/work"
          className="inline-block bg-[#DC493A] text-white px-4 py-2 rounded-md hover:bg-[#b93b2f] transition"
        >
          View Full Experience
        </Link>
      </div>
    </section>
  );
}
