"use client";
import React from "react";
import Image from "next/image";
import memoji from "../../public/memoji.png";
import { motion } from "framer-motion";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import { FaCode, FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const TextAnimatedGradient = () => {
    return (
      <span className="font-extrabold text-3xl inline-flex animate-text-gradient bg-gradient-to-r from-[#00FF88] via-[#00B5E2] to-[#00FF88]
 bg-[200%_auto] bg-clip-text  text-transparent">
        Najaf Shaikh
      </span>
    );
  };
  return (
    <section id="home" className="h-screen flex items-center">
      <div className="flex items-center justify-center mt-32 sm:mt-40">
        <div className="relative">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              alt="memoji"
              src={memoji}
              width={192}
              height={192}
              priority={true}
            />
          </motion.div> */}
        </div>
      </div>
      <div className=" text-center gap-2">
        <motion.p
          className="text-center relative text-gray-600 dark:text-gray-50 text-xl mx-10 sm:mx-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <TextAnimatedGradient />
          {/* <br />I am a{" "}
          <span className="font-semibold">
            full-stack developer & AI/ML enthusiast{" "}
          </span>{" "}
          proficient in{" "}
          <span className="font-semibold">
            ReactJS, Node.js, MongoDB, and Firebase
          </span>
          . I am passionate about building{" "}
          <span className="font-semibold">innovative apps</span> that combine{" "}
          <span className="font-semibold">creativity</span> with{" "}
          <span className="font-semibold">cutting-edge technologies</span>. I enjoy
          exploring solutions that integrate{" "}
          <span className="font-semibold">machine learning</span> with user-friendly
          designs. */}
        </motion.p>

        <div className="flex flex-col  mt-5 sm:flex-row items-center justify-center gap-3">
          {/* <motion.a
            href="/#contact"
            className=" animate-background-shine dark:bg-[#818cf8] dark:hover:bg-[#5964cf] hover:bg-slate-500 shadow-sm shadow-black/10 cursor-pointer font-medium bg-gray-700 text-white  flex items-center py-3 px-7 gap-2 justify-center relative rounded-full "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            {" "}
            Contact me here
            <GoArrowRight />{" "}
          </motion.a> */}
          <motion.a
            href="/najafCV.pdf"
            download
            className="hover:bg-gray-600 dark:hover:bg-gray-300  shadow-sm shadow-black/10 cursor-pointer font-medium text-white bg-black dark:text-black dark:bg-white flex items-center py-3 px-7 
          gap-2 justify-center relative rounded-full "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
          >
            {" "}
            Download Resume
            <LuDownload />
          </motion.a>


          <motion.div className="flex gap-2">
            <motion.a
              href="https://www.linkedin.com/in/najaf17/"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white p-3 gap-2 rounded-full flex items-center shadow-sm shadow-black/10 justify-center relative group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
              }}
            >
              <FaLinkedin className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                LinkedIn
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/najaf1705"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white shadow-sm shadow-black/10 p-3 gap-2 flex items-center justify-center relative rounded-full group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
            >
              <FaGithubSquare className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                GitHub
              </div>
            </motion.a>

            <motion.a
              href="https://leetcode.com/enzoe/"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white shadow-sm shadow-black/10 p-3 gap-2 flex items-center justify-center relative rounded-full group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
            >
              <FaCode className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Leetcode
              </div>
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
