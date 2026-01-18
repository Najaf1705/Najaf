import About from "@/components/about";
import Admin from "@/components/Admin";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";

import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Timeline from "@/components/timeline";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Certificates />
      <Contact />
      <Admin/>
    </main>
  );
}
