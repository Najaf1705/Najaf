"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center min-h-[100vh] m-8 sm:mx-28 text-gray-700 dark:text-gray-100"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.155 }}
      id="about"
    >
      <h1 className="text-center font-bold text-2xl mt-8 text-black dark:text-gray-50">
        About Me
      </h1>
      <ul className="mt-5 sm:mx-8 text-lg md:text-xl list-disc pl-6">
        <li>
          <span className="text-[#a5b4fc] font-semibold">Mobile App Developer</span> at <span className="text-[#a5b4fc] font-semibold">Wizard Support Services</span>, building a <span className="text-[#a5b4fc] font-semibold">stock advisory  app</span> with real-time data integration and payment gateways.
        </li>
        <li>
          Final-year <span className="text-[#a5b4fc] font-semibold">B.E. Computer Science</span> student at <span className="text-[#a5b4fc] font-semibold">Rizvi College of Engineering, Mumbai</span>, graduating in <span className="text-[#a5b4fc] font-semibold">2025</span> with a <span className="text-[#a5b4fc] font-semibold">CGPA of 8.0</span>.
        </li>
        <li>
          Skilled in programming languages: <span className="text-[#a5b4fc] font-semibold">Java, JavaScript, TypeScript, Python, C++</span>.
        </li>
        <li>
          Proficient in development technologies: <span className="text-[#a5b4fc] font-semibold">React.js, Next.js, Node.js, React Native, REST APIs</span>, with experience in <span className="text-[#a5b4fc] font-semibold">MongoDB, SQL, Firebase, AWS, Docker</span>.
        </li>
        <li>
          Developed projects like <span className="text-[#a5b4fc] font-semibold">Parkit</span> (<span className="text-[#a5b4fc] font-semibold">ML, IoT, React Native, Firebase</span>) for parking reservations and <span className="text-[#a5b4fc] font-semibold">Musync</span> (<span className="text-[#a5b4fc] font-semibold">MERN, ML</span>) for song recommendations and playlist creation.
        </li>
        <li>
          Won <span className="text-[#a5b4fc] font-semibold">1st place</span> in college coding competitions and ranked <span className="text-[#a5b4fc] font-semibold">top 300</span> in the national <span className="text-[#a5b4fc] font-semibold">"Code-Uncode"</span> contest, with active participation in <span className="text-[#a5b4fc] font-semibold">hackathons</span>.
        </li>
      </ul>
    </motion.section>
  );
}