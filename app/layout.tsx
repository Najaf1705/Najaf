import "./globals.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Header from "./components/header";
import Intro from "./components/intro";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import Darktheme from "./components/darktheme";
import zen from "../public/zen.jpg";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Najaf | Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="!scroll-smooth">
        <body
          className={`${poppins.className} bg-gray-50 relative dark:bg-[#02021c]`}
        >
          <div
            className="bg-[#d9c5ff] dark:bg-[#C8ACD6] dark:bg-opacity-45 bg-opacity-60 absolute top-[-8rem] right-[1rem] h-[51.25rem] w-[11.25rem]
        rounded-full blur-[10rem] sm:w-[52.75rem] sm:right-[1rem] "
          ></div>
          <div
            className="bg-[#d9c5ff] dark:bg-[#9290C3] dark:bg-opacity-45 absolute top-[-6rem] right-[1rem] h-[41.25rem] w-[10.25rem] 
        rounded-full blur-[4rem] sm:w-[65.75rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-opacity-50"
          >
          </div>

          <Header />

          {children}
          <Darktheme />
          <Footer />
          <Toaster position="bottom-right" />
        </body>
      </html>
    </>
  );
}
