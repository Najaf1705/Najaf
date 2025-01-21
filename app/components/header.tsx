"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");

  // Function to track the current section in the viewport
  const handleScroll = () => {
    links.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(link.name);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none 
          border border-white border-opacity-20 dark:bg-white/30 bg-black/30 shadow-lg shadow-black/10 
          backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[45rem] sm:rounded-full"
        initial={{ y: -100, x: -"50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2  h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 
         font-medium text-[0.9rem] text-white dark:text-black sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="h-[65%] flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950",
                  {
                    "text-gray-950": activeSection === link.name,
                  }
                )}
                href={link.hash}
                // onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#ede9fe]  
                  rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 40,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
