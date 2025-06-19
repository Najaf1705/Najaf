import { hash } from "crypto";
import musyncImg from "@/public/musyncImg.png";
import parkitImg from "@/public/parkitImg.png";
import introImg from "@/public/introImg.png";

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
      "Originally a monolithic college project, now refactored with modular architecture, Redux state management, and secure authentication to enhance performance, scalability, code readability, and align with industry best practices.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "Redux"],
    imageUrl: musyncImg,
    href: "https://musync-enzoe.vercel.app",
    sectionTitle: "Click to view live website"
  },
  {
    title: "Parkit",
    description:
      "Developed a mobile app for parking reservations, incorporating features like user authentication, booking management, and real-time data handling with Firebase.",
    tags: ["React Native", "Machine Learning", "NodeJS", "IOT", "Firebase"],
    imageUrl: parkitImg,
    href: "https://github.com/Najaf1705/parkit",
    sectionTitle: "Click to view Github repo"
  },
  {
    title: "Intro",
    description: "Built an AI mock interview platform with Next.js, Clerk auth, webcam and voice input, real-time feedback, and Gemini API integration for generating role-specific questions, answers, and evaluations.",
    tags: ["NextJS", "Gemini API", "TailwindCSS"],
    imageUrl: introImg,
    href: "https://intro-enzoe.vercel.app/",
    sectionTitle: "Click to view live website"
  },
] as const;

export const skillsData = [
  { name: "C++", icon: "SiCplusplus", position: { x: "5%", y: "30%" } },
  { name: "Java", icon: "FaJava", position: { x: "2%", y: "5%" } },
  { name: "Python", icon: "SiPython", position: { x: "25%", y: "10%" } },
  { name: "JavaScript", icon: "SiJavascript", position: { x: "55%", y: "30%" } },
  { name: "TypeScript", icon: "SiTypescript", position: { x: "30%", y: "25%" } },
  { name: "Node.js", icon: "SiNodedotjs", position: { x: "60%", y: "10%" } },
  { name: "React", icon: "SiReact", position: { x: "10%", y: "55%" } },
  { name: "Next.js", icon: "SiNextdotjs", position: { x: "80%", y: "25%" } },
  { name: "Redux", icon: "SiRedux", position: { x: "90%", y: "35%" } },
  { name: "Express", icon: "SiExpress", position: { x: "85%", y: "50%" } },
  { name: "MongoDB", icon: "SiMongodb", position: { x: "35%", y: "55%" } },
  { name: "Tailwind", icon: "SiTailwindcss", position: { x: "60%", y: "55%" } },
  { name: "SQL", icon: "SiPostgresql", position: { x: "90%", y: "5%" } },
  { name: "Firebase", icon: "SiFirebase", position: { x: "20%", y: "75%" } },
  { name: "Git", icon: "SiGit", position: { x: "50%", y: "70%" } },
  { name: "Docker", icon: "SiDocker", position: { x: "90%", y: "80%" } },
  { name: "AWS", icon: "FaAws", position: { x: "2%", y: "75%" } },
  { name: "Linux", icon: "SiLinux", position: { x: "80%", y: "70%" } },
  { name: "Expo", icon: "SiExpo", position: { x: "45%", y: "40%" } },
] as const;