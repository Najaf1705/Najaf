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
      <div className="mt-6 sm:mx-8 space-y-6 text-lg md:text-xl">
        <p>
          I’m a <span className="text-[#a5b4fc] font-semibold">Software Engineer</span> with experience in
          <span className="text-[#a5b4fc] font-semibold"> full-stack development</span>,
          <span className="text-[#a5b4fc] font-semibold"> backend systems</span>, and
          <span className="text-[#a5b4fc] font-semibold"> cloud technologies</span>. Currently working at
          <span className="text-[#a5b4fc] font-semibold"> Kyndryl Solutions</span>, I support enterprise
          production environments while building automation and improving operational reliability.
        </p>

        <p>
          My technical expertise includes
          <span className="text-[#a5b4fc] font-semibold"> Node.js</span>,
          <span className="text-[#a5b4fc] font-semibold"> React</span>,
          <span className="text-[#a5b4fc] font-semibold"> AWS</span>,
          <span className="text-[#a5b4fc] font-semibold"> Java</span>,
          <span className="text-[#a5b4fc] font-semibold"> Spring Boot</span>,
          <span className="text-[#a5b4fc] font-semibold"> Docker</span>,
          <span className="text-[#a5b4fc] font-semibold"> SQL</span>, and
          <span className="text-[#a5b4fc] font-semibold"> MongoDB</span>. I enjoy designing scalable APIs,
          building cloud-native applications, and solving real-world engineering problems.
        </p>

        <p>
          In my current role, I work with
          <span className="text-[#a5b4fc] font-semibold"> Linux and Windows servers</span>,
          <span className="text-[#a5b4fc] font-semibold"> Nginx middleware</span>,
          <span className="text-[#a5b4fc] font-semibold"> application deployments</span>,
          <span className="text-[#a5b4fc] font-semibold"> disaster recovery activities</span>, and
          <span className="text-[#a5b4fc] font-semibold"> Bash automation</span>, giving me strong exposure
          to production systems and software delivery practices.
        </p>

        <p>
          Previously, I worked as a
          <span className="text-[#a5b4fc] font-semibold"> Mobile App Developer Intern</span>, where I built a
          <span className="text-[#a5b4fc] font-semibold"> React Native</span> application with real-time data
          integration and secure payment functionality.
        </p>

        <p>
          I hold a <span className="text-[#a5b4fc] font-semibold">B.E. in Computer Science</span> from
          <span className="text-[#a5b4fc] font-semibold"> Rizvi College of Engineering</span> (2025) and am
          currently seeking opportunities in
          <span className="text-[#a5b4fc] font-semibold"> Software Engineering</span>,
          <span className="text-[#a5b4fc] font-semibold"> Backend Development</span>, and
          <span className="text-[#a5b4fc] font-semibold"> Full Stack Development</span>.
        </p>
      </div>
    </motion.section>
  );
}