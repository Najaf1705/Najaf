"use client";
import { SiCplusplus, SiPython, SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiNextdotjs, SiExpress, SiTailwindcss, SiPostgresql, SiMongodb, SiFirebase, SiGit, SiDocker, SiAmazon, SiLinux } from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import React from "react";
import { skillsData } from "../lib/data";
import { animate, delay, motion } from "framer-motion";
import { once } from "events";

const iconMap = {
  SiCplusplus,
  FaJava,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  FaAws,
  SiLinux,
};

const motionVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center min-h-[100vh] text-center mx-10  sm:mx-36  mb-24"
    >
      <h1 className=" font-bold text-3xl text-gray-600 dark:text-gray-50">
        Skills
      </h1>
      <ul className="mt-10 flex flex-wrap justify-center gap-2 py-2 px-3 text-gray-700 text-lg ">
      {skillsData.map((skill, index) => {
        // Dynamically get the icon component
        const IconComponent = iconMap[skill.icon];

        return (
          <motion.li
            className="bg-gradient-to-b from-indigo-50 to-pink-100 border border-black/5 py-1.5 px-4 rounded-xl flex items-center gap-2"
            key={index}
            variants={motionVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            {/* Render the icon and name */}
            {IconComponent && <IconComponent className="text-xl text-black" />}
            <span>{skill.name}</span>
          </motion.li>
        );
      })}

      </ul>
    </section>
  );
}
