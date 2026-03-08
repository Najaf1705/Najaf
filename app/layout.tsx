import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Darktheme from "@/components/darktheme";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://najaf.in"),
  title: "Najaf | Portfolio",
  description:
    "Explore Najaf Shaikh's portfolio showcasing software development, AI/ML projects, and full-stack engineering skills.",
  keywords: [
    "Najaf Shaikh",
    "Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "MERN Stack",
    "Machine Learning",
    "Linux",
    "Docker",
    "Next.js"
  ],
  authors: [{ name: "Najaf Shaikh" }],

  openGraph: {
    title: "Najaf Shaikh | Software Engineer Portfolio",
    description:
      "Discover full-stack development skills, AI/ML projects, and engineering work by Najaf Shaikh.",
    url: "https://najaf.in/",
    siteName: "Najaf Portfolio",
    images: [
      {
        url: "https://najaf.in/zen.jpg",
        width: 1200,
        height: 630,
        alt: "Najaf Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Najaf Shaikh | Software Engineer Portfolio",
    description:
      "Explore full-stack development, AI/ML projects and engineering work by Najaf Shaikh.",
    images: ["https://najaf.in/zen.jpg"]
  },

  alternates: {
    canonical: "https://najaf.in/"
  }
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Najaf Shaikh",
              url: "https://najaf.in",
              image: "https://najaf.in/profile.jpg",
              jobTitle: "Software Engineer",
              description:
                "Software engineer specializing in Linux systems, full-stack development, and AI.",
              email: "mailto:najafshaikh1705@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "India"
              },
              sameAs: [
                "https://github.com/najaf1705",
                "https://linkedin.com/in/najaf17",
                "https://www.instagram.com/_.najaf17._/"
              ],
              knowsAbout: [
                "Software Development",
                "Java Spring Boot",
                "MERN Stack",
                "Linux Systems",
                "Windows Systems",
                "Nginx",
                "Docker",
                "Machine Learning"
              ]
            })
          }}
        />
      </head>

      <body className="bg-gray-50 relative dark:bg-[#02021c]">
        {/* Background blobs */}
        <div
          className="bg-[#d9c5ff] dark:bg-[#C8ACD6] dark:bg-opacity-45 bg-opacity-60 absolute top-[-8rem] right-[1rem] h-[51.25rem] w-[11.25rem]
          rounded-full blur-[10rem] sm:w-[52.75rem] sm:right-[1rem]"
        />

        <div
          className="bg-[#d9c5ff] dark:bg-[#9290C3] dark:bg-opacity-45 absolute top-[-6rem] right-[1rem] h-[41.25rem] w-[10.25rem]
          rounded-full blur-[4rem] sm:w-[65.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-opacity-50"
        />

        <Header />
        {children}
        <Darktheme />
        <Footer />

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}