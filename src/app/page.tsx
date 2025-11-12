'use client';
import { motion } from 'framer-motion';
import Spiral from '../components/Spiral';
import Contact from '../components/Contact';
import WorkPreview from '../components/WorkPreview';

export default function HomePage() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-[#f5ecd7] text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-[#524134] mb-4"
        >
          Tiana Ye
        </motion.h1>
        <p className="text-lg text-[#524134]">Scroll down to explore!</p>


        {/*horse animation */}
        <style jsx>{`
          .horse {
            width: 82px;
            height: 66px;
            background: url('/horse-idle.png') no-repeat;
            animation: horseIdle 1s steps(7) infinite;
            image-rendering: pixelated;
          }

          @keyframes horseIdle {
            0% {
              background-position: 0px 0px;
            }
            100% {
              background-position: -574px 0px;
            }
          }
        `}</style>

      <div className="horse" />
      </section>




      {/* About Section */}
      <section id="about" className="min-h-screen relative flex flex-col justify-center items-start bg-[#f5ecd7] text-left px-8 lg:px-32 text-[#524134] overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          About Me
        </motion.h2>
        <p className="max-w-2xl">
          I&apos;m Tiana Ye, a passionate software engineering student who loves building creative, impactful projects.
        </p>
        <Spiral className="absolute top-10 left-20 animate-spin-slow w-12 h-12 opacity-50" />
        <Spiral className="absolute bottom-10 right-20 animate-spin-slow w-8 h-8 opacity-50" />
      </section>      

      {/* Work Section */}
      <WorkPreview/>
      <Contact/>
    </>
  );
}
