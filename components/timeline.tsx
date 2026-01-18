"use client";
import React from "react";
import { motion, easeInOut } from "framer-motion";

export default function Timeline() {
  const motionVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="timeline"
      className="flex flex-col justify-center items-center min-h-[100vh] dark:text-white"
    >
      <h1 className="text-center font-bold text-2xl">
        Career Timeline
      </h1>

      <ul className="mt-10 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-black dark:text-gray-200">

        {/* Full-Time Job */}
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-violet-500">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          <motion.div
            className="timeline-start mb-10 md:text-end"
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <time className="font-mono italic">July 2025 – Present</time>
            <div className="text-lg font-black">System Administrator</div>
            Kyndryl Solutions  
            <br />
            <span className="text-sm">Mumbai</span>
            <br />
            <span className="text-sm">
              Linux & Windows · Nginx · JAR Deployments · DR Drills · Automation
            </span>
          </motion.div>
          <hr />
        </li>

        {/* Internship */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-violet-400">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          <motion.div
            className="timeline-end mb-10"
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            <time className="font-mono italic">Mar 2025 – May 2025</time>
            <div className="text-lg font-black">Mobile App Developer Intern</div>
            Wizard Support Services  
            <br />
            <span className="text-sm">Mumbai</span>
            <br />
            <span className="text-sm">
              React Native · APIs · Payments · Real-time Data
            </span>
          </motion.div>
          <hr />
        </li>

        {/* Timeline */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-violet-300">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          <motion.div
            className="timeline-start mb-10 md:text-end"
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.45, ease: easeInOut }}
            viewport={{ once: true }}
          >
            <time className="font-mono italic">2021 – 2025</time>
            <div className="text-lg font-black">
              B.Tech in Computer Engineering
            </div>
            Rizvi College of Engineering  
            <br />
            <span className="text-sm">Mumbai</span>
            <br />
            CGPA: 8.00
          </motion.div>
          <hr />
        </li>
      </ul>
    </section>
  );
}
