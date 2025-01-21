"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="h-[100vh] m-8 mt-10 sm:mx-28 lg:scroll-mt-40 md:scroll-mt-16 text-gray-700 dark:text-gray-100"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.155 }}
      id="about"
    >
      <h1 className="text-center font-bold text-2xl mt-8 text-black dark:text-gray-50">
        About Me
      </h1>
      <ul className="mt-5 sm:mx-8 text-xl list-disc pl-6">
        <li>
          Final-year Computer Science student, graduating in 2025 with a CGPA of 8.0.
        </li>
        <li>
          Proficient in web development technologies:{" "}
          <span className="text-[#a5b4fc] font-semibold"> React.js, Node.js, </span>{" "}
          <span className="text-[#a5b4fc] font-semibold"> MongoDB, SQL, </span>{" "}
          and{" "}
          <span className="text-[#a5b4fc] font-semibold"> AWS </span>.
        </li>
        <li>
          Experience in core programming languages:{" "}
          <span className="text-[#a5b4fc] font-semibold"> C++, Java, Python, JavaScript. </span>
        </li>
        <li>
          Developed projects like <span className="text-[#a5b4fc] font-semibold"> Musync, Parkit, Intro </span>{" "} utilizing the MERN stack for web development and integrating machine learning techniques for enhanced functionality.
        </li>
        <li>
          Participated and ranked highly in coding competitions and hackathons.
        </li>
        <li>
          Strong collaboration, problem-solving, and communication skills.
        </li>
      </ul>
    </motion.section>

  );
}
