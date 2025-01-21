"use client";
import React, { useRef } from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-2 mt-28">
        <h1 className="font-bold text-2xl text-black dark:text-gray-50 text-center">
          My Projects
        </h1>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl, href }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.44 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <motion.div
      className="group"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section
        className=" hover:shadow-xl mt-10   bg-gradient-to-r from-[#f5f3ff] via-[#fce7f3] to-[#ede9fe]
        max-w-[24rem] sm:max-w-[40rem] pb-2 pt-4 
        bg-opacity-25 mb-3 sm:mb-8 relative overflow-hidden 
        last:mb-0 sm:h-[20.5rem] sm:pr-8 border border-black/5 rounded-lg"
      >
        <div
          className=" sm:group-odd:ml-[20rem]  px-1 sm:pl-10 sm:pr-0 sm:pt-0 
          sm:max-w-[50%] flex flex-col h-full"
        >
          <Link href={href} target="_blank">
            <h2 className="font-black text-2xl text-gray-800 inline-flex items-center gap-2">
              {title}
              <FaLink />
            </h2>
          </Link>
          <p className="text-md text-gray-600 mt-2 group-odd:ml-[0rem]  sm:max-w-72  p-1 ">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-1  ">
            {tags.map((tag, index) => (
              <li
                className="bg-[#dbd7fe]  px-2 py-1 rounded-full tracking-wide uppercase text-xs text-black "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt="project"
          src={imageUrl}
          quality={95}
          className="  absolute hidden  sm:block

          
          transition
        group-hover:scale-[1.09]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-odd:group-hover:scale-[1.08]
        group-odd:group-hover:translate-x-3
        group-odd:group-hover:translate-y-3
        group-odd:group-hover:rotate-2
         group-odd:right-[initial] group-odd:-left-40 top-14 -right-40 rounded-t-lg w-[30.25rem] shadow-xl"
        />
      </section>
    </motion.div>
  );
}
