'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { workExperiences } from '../../lib/data';

export default function WorkPage() {
  const [filter, setFilter] = useState<'software' | 'other' | 'all'>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const softwareJobs = workExperiences.filter((job) => job.category === 'software');
  const otherJobs = workExperiences.filter((job) => job.category !== 'software');
  const activeJobs =
    filter === 'software' ? softwareJobs : filter === 'other' ? otherJobs : workExperiences;

  const calculateDurationMonths = (period: string) => {
    const [start, end] = period.split(' – ');
    const parseDate = (dateStr: string) => new Date(dateStr + ' 01');
    const startDate = parseDate(start);
    const endDate = end.toLowerCase() === 'present' ? new Date() : parseDate(end);
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    return Math.max(months, 1);
  };

  const getUniqueYears = (jobs: typeof workExperiences) => {
    const years = new Set<number>();
    jobs.forEach((job) => {
      const [start, end] = job.period.split(' – ');
      const parseDate = (dateStr: string) => new Date(dateStr + ' 01');
      years.add(parseDate(start).getFullYear());
      const endDate = end.toLowerCase() === 'present' ? new Date() : parseDate(end);
      years.add(endDate.getFullYear());
    });
    return [...years].sort((a, b) => b - a);
  };

  const tagColors: Record<string, string> = {
    Python: 'bg-yellow-400',
    'Power BI': 'bg-blue-600',
    Pandas: 'bg-green-500',
    React: 'bg-purple-500',
    Flask: 'bg-pink-400',
    MongoDB: 'bg-green-600',
    Figma: 'bg-orange-400',
    Accessibility: 'bg-indigo-500',
    UX: 'bg-teal-500',
    APIs: 'bg-cyan-500',
    'Student Projects': 'bg-amber-500',
    'Public Sector': 'bg-gray-500'
  };

  return (
    <main className="min-h-screen bg-[#bfdbf7] text-gray-800 px-6 py-16 scroll-smooth">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#443850] mb-12 text-center"
      >
        My Work Experience
      </motion.h1>

      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center gap-4 mb-12 flex-wrap"
      >
        {['all', 'software', 'other'].map((type) => (
          <motion.button
            key={type}
            whileTap={{ scale: 1.1 }}
            onClick={() => setFilter(type as 'software' | 'other' | 'all')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              filter === type
                ? type === 'software'
                  ? 'bg-[#549BF2] text-white'
                  : type === 'other'
                  ? 'bg-[#DC493A] text-white'
                  : 'bg-[#E3F988] text-[#443850]'
                : `bg-white border ${
                    type === 'software'
                      ? 'border-[#549BF2] text-[#549BF2]'
                      : type === 'other'
                      ? 'border-[#DC493A] text-[#DC493A]'
                      : 'border-[#E3F988] text-[#443850]'
                  }`
            }`}
          >
            {type === 'all'
              ? 'All'
              : type === 'software'
              ? 'Software Experience'
              : 'Other Experience'}
          </motion.button>
        ))}
      </motion.div>

      {/* Timeline and cards */}
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute h-full w-1 bg-[#443850] left-1/2 transform -translate-x-1/2"></div>
{activeJobs.map((job, i) => {
  const isLeft = i % 2 === 0;
  const months = calculateDurationMonths(job.period);
  const spacing = `${months * 12}px`;
  const isSelected = selectedIndex === i;
  const year = job.period.split('–')[0].trim().split(' ')[1]; // Extract year from start

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`relative w-full mb-[${spacing}] flex justify-center px-4 scroll-mt-16`}
    >
      {/* YEAR LABEL */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 text-lg font-bold text-[#443850] ${
          isLeft ? 'left-[calc(50%+260px)]' : 'right-[calc(50%+260px)]'
        }`}
      >
        {year}
      </div>

      {/* EXPERIENCE CARD */}
      <div
        onClick={() => setSelectedIndex(i === selectedIndex ? null : i)}
        className={`relative w-full md:w-[45%] bg-white border-2 p-6 rounded-lg shadow-md hover:shadow-xl cursor-pointer z-10 ${
          job.category === 'software' ? 'border-[#549BF2]' : 'border-[#DC493A]'
        } ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        {/* Top-right image */}
        {job.image && (
          <div className="absolute top-4 right-4 w-24 h-24 rounded-md overflow-hidden shadow-md">
            <Image
              src={job.image}
              alt={job.title}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Text content */}
        <div className="pr-28">
          <h2
            className={`text-2xl font-semibold mb-2 ${
              job.category === 'software' ? 'text-[#549BF2]' : 'text-[#DC493A]'
            }`}
          >
            {job.title}
          </h2>
          <h3>{job.company}</h3>
          <p className="text-md text-[#888] mb-2">{job.period}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {job.tags.map((tag, t) => {
              const tagColor =
                tagColors[tag] || 'bg-gray-300 text-gray-800'; // tagColors object defined globally
              return (
                <span key={t} className={`${tagColor} text-xs px-2 py-1 rounded-md`}>
                  {tag}
                </span>
              );
            })}
          </div>
          {isSelected && (
            <div className="mt-4">
              <p className="text-md text-[#555]">{job.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Animated dot */}
      <motion.span
        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#DC493A] rounded-full z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
})}

      </div>
    </main>
  );
}
