"use client";
import React from "react";

import { motion } from "framer-motion";

export default function Sectiondivider() {
  return (
    <motion.div
      className="relative bg-gray-200 my-24 h-14 w-1 rounded-full hidden sm:block"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.55 }}
    ></motion.div>
  );
}
