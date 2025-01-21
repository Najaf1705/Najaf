"use client";
import React from "react";
import { skillsData } from "../lib/data";
import { animate, delay, motion } from "framer-motion";
import { once } from "events";

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
      className="flex flex-col justify-center items-center min-h-[70vh] text-center mx-10  sm:mx-36 mt-40 scroll-m-32 mb-24"
    >
      <h1 className=" font-bold text-3xl text-gray-600 dark:text-gray-50">
        My skills
      </h1>
      <ul className="mt-10 flex flex-wrap justify-center gap-2 py-2 px-3 text-gray-700 text-lg ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gradient-to-b from-indigo-50 to-pink-100 border border-black/5 py-1.5 px-4 rounded-xl "
            key={index}
            variants={motionVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
