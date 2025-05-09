"use client";
import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import { LuDownload } from "react-icons/lu";
import { FaCode, FaEnvelope, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { firestore } from "../lib/firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

// Firestore instance
export default function Intro() {
  const documentId = process.env.NEXT_PUBLIC_FIREBASE_DOCUMENT_ID;

  const incrementCount = async (link: string) => {
    try {
      const docRef = doc(firestore, "portfolio", "RsVo69EKQqJmRUdeIckC"); // Replace with your document ID
      await updateDoc(docRef, {
        [link]: increment(1), // Increment the count by 1
      });
      console.log(`${link} count incremented successfully`);
    } catch (error) {
      console.error("Error incrementing count: ", error);
    }
  };

  const TextAnimatedGradient = () => {
    return (
      <span className="font-extrabold text-5xl py-2 inline-flex animate-text-gradient bg-gradient-to-r from-[#00FF88] via-[#00B5E2] to-[#00FF88]
 bg-[200%_auto] bg-clip-text  text-transparent">
        Najaf Shaikh
      </span>
    );
  };
  return (
    <section id="home" className="h-screen flex items-center">
      <div className="flex items-center justify-center mt-32 sm:mt-40">
        <div className="relative">
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
        </motion.p>

        <div className="flex flex-col  mt-5 sm:flex-row items-center justify-center gap-3">
          <motion.a
            href="/najafCV.pdf"
            download
            className="hover:bg-gray-600 dark:hover:bg-gray-300 shadow-sm shadow-black/10 cursor-pointer font-medium text-white bg-black dark:text-black dark:bg-white flex items-center py-3 px-7 gap-2 justify-center relative rounded-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            onClick={() => incrementCount("cv")} // Increment LinkedIn count
          >
            Download Resume
            <LuDownload />
          </motion.a>

          <motion.div className="flex gap-2">
            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/najaf17/"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white p-3 gap-2 rounded-full flex items-center shadow-sm shadow-black/10 justify-center relative group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
              }}
              onClick={() => incrementCount("linkedin")} // Increment LinkedIn count
            >
              <FaLinkedin className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                LinkedIn
              </div>
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/najaf1705"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white shadow-sm shadow-black/10 p-3 gap-2 flex items-center justify-center relative rounded-full group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
              onClick={() => incrementCount("github")} // Increment GitHub count
            >
              <FaGithubSquare className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                GitHub
              </div>
            </motion.a>

            {/* Leetcode Icon */}
            <motion.a
              href="https://leetcode.com/enzoe/"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white shadow-sm shadow-black/10 p-3 gap-2 flex items-center justify-center relative rounded-full group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
              onClick={() => incrementCount("cp")} // Increment Leetcode count
            >
              <FaCode className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Leetcode
              </div>
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=najafshaikh1705@gmail.com"
              className="text-3xl text-white bg-black dark:text-black dark:bg-white shadow-sm shadow-black/10 p-3 gap-2 flex items-center justify-center relative rounded-full group"
              target="_blank"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
              }}
              onClick={() => incrementCount("email")} // Increment email click count
            >
              <FaEnvelope className="hover:scale-105" />
              <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-sm bg-gray-700 text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Email
              </div>
            </motion.a>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
