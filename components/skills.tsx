"use client";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiExpo,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiAmazon,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const iconMap = {
  SiCplusplus,
  FaJava,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiExpo,
  SiRedux,
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

const motionVariantsScatter = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.1 * index, duration: 0.5 },
  }),
};

const motionVariantsList = {
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
      className="flex flex-col justify-center items-center min-h-[100vh] md:pt-28 min-w-full mx-4 sm:mx-10 relative overflow-hidden"
    >
      <h1 className="font-bold text-3xl mb-8 text-black dark:text-white">Skills</h1>

      {/* Large screen floating icons */}
      <div className="hidden md:block relative w-full h-[80vh] max-w-[1200px]">
        {skillsData.map((skill, index) => {
          const IconComponent = iconMap[skill.icon];
          const { x, y } = skill.position;

          return (
            <motion.div
              key={index}
              className="absolute bg-gradient-to-b from-indigo-50 to-pink-100 border border-black/5 py-1.5 px-4 rounded-xl flex items-center gap-2"
              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
              variants={motionVariantsScatter}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  y: {
                    repeat: Infinity,
                    duration: 2 + Math.random() * 2,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              {IconComponent && (
                <IconComponent className="text-xl text-black" />
              )}
              <span className="text-black">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Small screen stacked list */}
      <ul className="md:hidden flex flex-wrap justify-center gap-2 py-2 px-3 text-gray-700 text-lg">
        {skillsData.map((skill, index) => {
          const IconComponent = iconMap[skill.icon];

          return (
            <motion.li
              key={index}
              className="bg-gradient-to-b from-indigo-50 to-pink-100 border border-black/5 py-1.5 px-4 rounded-xl flex items-center gap-2"
              variants={motionVariantsList}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true }}
            >
              {IconComponent && (
                <IconComponent className="text-xl text-black" />
              )}
              <span>{skill.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}