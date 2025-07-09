'use client';
import '../styles/globals.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-start bg-[#bfdbf7] text-left px-8 lg:px-32 text-white"
    >
      <motion.h2
        initial={{ rotate: -5 }}
        whileInView={{ rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-4xl font-bold mb-4"
      >
        Contact
      </motion.h2>
      <p className="max-w-2xl mb-4">
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <Link
        href="https://www.linkedin.com/in/tiana-ye-3193201ba/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-[#443850] px-4 py-2 rounded-md font-semibold shadow-md hover:scale-105 transition-transform"
      >
        Connect on LinkedIn
      </Link>
    </section>
  );
}
