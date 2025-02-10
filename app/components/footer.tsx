import React, { useState, useEffect } from "react";
import { firestore } from "../lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import toast from "react-hot-toast";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const documentId = process.env.NEXT_PUBLIC_FIREBASE_DOCUMENT_ID;

  return (
    <div>
      <footer className="px-4 text-center text-white dark:text-black bg-black dark:bg-gray-400">
        <small className="block text-xs">
          &copy; {currentYear} Najaf Shaikh. All rights reserved.
        </small>
      </footer>
    </div>
  );
}
