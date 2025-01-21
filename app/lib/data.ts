import { hash } from "crypto";
import musyncImg from "../../public/musyncImg.png";
import parkitImg from "../../public/parkitImg.png";
import introImg from "../../public/introImg.png";
import introImg2 from "../../public/introImg2.png";
import introImg3 from "../../public/introImg3.png";
import introImg4 from "../../public/introImg4.png";
import introImg5 from "../../public/introImg5.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Musync",
    description:
    "Created a music app using the MERN stack, integrating machine learning for personalized song recommendations and efficient playlist management.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "Machine Learning"],
    imageUrl: musyncImg,
    href: "https://github.com/Najaf1705/musync"
  },
  {
    title: "Parkit",
    description:
    "Developed a mobile app for parking reservations, incorporating features like user authentication, booking management, and real-time data handling with Firebase.",
    tags: ["React Native", "Machine Learning", "NodeJS", "IOT", "Firebase"],
    imageUrl: parkitImg,
    href: "https://github.com/Najaf1705/parkit"
  },
  {
    title: "Intro",
    description:"Under Construction",
    tags: ["NextJS", "Machine Learning"],
    imageUrl: introImg5,
    href: "https://github.com/Najaf1705/intro"
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Express",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Firebase",
  "Git",
  "Docker",
  "AWS",
  "Linux"
] as const;
