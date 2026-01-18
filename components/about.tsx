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
    I’m a <span className="text-[#a5b4fc] font-semibold">System Administrator at Kyndryl Solutions</span>,
    working in enterprise production environments supporting{" "}
    <span className="text-[#a5b4fc] font-semibold">Windows and Linux servers</span>,{" "}
    <span className="text-[#a5b4fc] font-semibold">Nginx middleware</span>, and{" "}
    <span className="text-[#a5b4fc] font-semibold">Java-based application deployments</span>.
  </p>

  <p>
    My day-to-day work includes executing{" "}
    <span className="text-[#a5b4fc] font-semibold">application deployments</span>, participating in{" "}
    <span className="text-[#a5b4fc] font-semibold">Disaster Recovery drills</span> by updating{" "}
    <span className="text-[#a5b4fc] font-semibold">DNS A records</span>, managing{" "}
    <span className="text-[#a5b4fc] font-semibold">Nginx configuration changes</span>, reloading services,
    and validating <span className="text-[#a5b4fc] font-semibold">SSL/TLS certificates</span>.
  </p>

  <p>
    I focus heavily on <span className="text-[#a5b4fc] font-semibold">automation and reliability</span>,
    developing <span className="text-[#a5b4fc] font-semibold">Bash scripts</span> and{" "}
    <span className="text-[#a5b4fc] font-semibold">cron jobs</span> for log rotation, retention, and system
    housekeeping to reduce operational risk.
  </p>

  <p>
    Previously, I worked as a{" "}
    <span className="text-[#a5b4fc] font-semibold">Mobile App Developer Intern</span> at{" "}
    <span className="text-[#a5b4fc] font-semibold">Wizard Support Services</span>, building a{" "}
    <span className="text-[#a5b4fc] font-semibold">React Native stock advisory application</span> with real-time
    data and secure payment integrations.
  </p>

  <p>
    I hold a <span className="text-[#a5b4fc] font-semibold">B.E. in Computer Science</span> from{" "}
    <span className="text-[#a5b4fc] font-semibold">Rizvi College of Engineering, Mumbai</span> (2025, CGPA 8.0),
    and have hands-on experience with{" "}
    <span className="text-[#a5b4fc] font-semibold">
      React, Node.js, Spring Boot, AWS, Docker, SQL, and MongoDB
    </span>.
  </p>

  <p className="mt-4 sm:mx-8 text-lg md:text-xl">
  Actively seeking <span className="text-[#a5b4fc] font-semibold">Software Engineering roles</span> that value a
  strong foundation in <span className="text-[#a5b4fc] font-semibold">full-stack development</span>,{" "}
  <span className="text-[#a5b4fc] font-semibold">automation</span>, and{" "}
  <span className="text-[#a5b4fc] font-semibold">production infrastructure</span>.
</p>


</div>

    </motion.section>
  );
}