"use client";
import React from "react";
import { animate, easeInOut, motion } from "framer-motion";

export default function Education() {
  const motionVariants = {
    hidden: { opacity: 0, scale: 0 }, // Initially hidden and slightly off-screen
    visible: { opacity: 1, scale: 1 }, // Visible with a transition
  };
  return (
    <section id="education" className="scroll-mt-24 dark:text-white min-h-[87vh]">
      <h1 className="text-center text-black font-bold text-2xl dark:text-white">
        My Education
      </h1>
      <ul className="mt-10 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-black dark:text-gray-200">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <motion.div
            className="timeline-start mb-10 md:text-end"
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            <time className="font-mono italic">2018</time>
            <div className="text-lg font-black">10th Grade</div>
            St Marys High School
            <br />
            <span className="text-sm">Mumbai</span>
            <br />
            Percentage: 83.60%
          </motion.div>

          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <motion.div
            className="timeline-end mb-10"
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.35,
            }}
            viewport={{
              once: true,
            }}
          >
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">12th Grade</div>
            St Marys Junior College
            <br />
            <span className="text-sm">Mumbai</span>
            <br />
            Percentage: 83.23%
          </motion.div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-violet-400 dark:border-violet-100 border border-dashed rounded-full border-black"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <motion.div
            className="timeline-start mb-10 md:text-end"
            variants={motionVariants}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.45,
              type: easeInOut,
            }}
            viewport={{
              once: true,
            }}
          >
            <time className="font-mono italic">2025</time>
            <div className="text-lg font-black">
              B.Tech in Computer Engineering
            </div>
            Rizvi College of Engineering
            <br />
            <span className="text-sm">Mumbai</span>
            <br /> CGPA: 8.00
          </motion.div>
          <hr />
        </li>
      </ul>
    </section>
  );
}
