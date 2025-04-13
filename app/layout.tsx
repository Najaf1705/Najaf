"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Darktheme from "@/components/darktheme";
import { Toaster } from "react-hot-toast";

// const poppins = Poppins({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading for demonstration
    }, 1000); // Adjust the duration as needed
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      <html lang="en" className="!scroll-smooth">
        <head>
          {/* General Meta Tags */}
          <title>Najaf | Portfolio</title>
          <meta
            name="description"
            content="Explore Najaf Shaikh's portfolio, showcasing software development skills and AI/ML projects."
          />
          <meta name="author" content="Najaf Shaikh" />
          <meta
            name="keywords"
            content="Software Engineer, Portfolio, Full-Stack Developer, AI, Machine Learning, React.js, Node.js, Najaf Shaikh"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Najaf Shaikh | Software Engineer Portfolio" />
          <meta
            property="og:description"
            content="Discover full-stack development skills, AI/ML projects, and creative solutions by Najaf Shaikh."
          />
          <meta property="og:url" content="https://najaf.vercel.app/" />
          <meta property="og:image" content="/zen.jpg" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Najaf Shaikh | Software Engineer Portfolio" />
          <meta
            name="twitter:description"
            content="Explore full-stack development, AI/ML skills, and projects in Najaf's portfolio."
          />
          <meta name="twitter:image" content="/zen.jpg" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* preconnects */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
          <link rel="preconnect" href="https://firestore.googleapis.com"/>
        </head>
        <body
          className={` bg-gray-50 relative dark:bg-[#02021c]`}
        >
          <div
            className="bg-[#d9c5ff] dark:bg-[#C8ACD6] dark:bg-opacity-45 bg-opacity-60 absolute top-[-8rem] right-[1rem] h-[51.25rem] w-[11.25rem]
              rounded-full blur-[10rem] sm:w-[52.75rem] sm:right-[1rem]"
          ></div>
          <div
            className="bg-[#d9c5ff] dark:bg-[#9290C3] dark:bg-opacity-45 absolute top-[-6rem] right-[1rem] h-[41.25rem] w-[10.25rem] 
              rounded-full blur-[4rem] sm:w-[65.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-opacity-50"
          ></div>
          {isLoading ? (
            // Loading Animation
            <div className="flex flex-col items-center justify-center h-screen text-black">
              <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
              <p>Loading</p>
            </div>
          ) : (
            // Main Content
            <>

              <Header />
              {children}
              <Darktheme />
              <Footer />
              <Toaster position="bottom-right" />
            </>
          )}
        </body>
      </html>
    </>
  );
}
