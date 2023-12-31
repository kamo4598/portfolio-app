"use client";

import Cover from "@/components/cover/Cover";
import TimeLine from "@/components/timeline/Timeline";
import TechStack from "@/components/techStack/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/particles/ParticlesBackground";
import AboutMe from "@/components/AboutMe";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-auto max-w-[100vw] font-sans">
      <ParticlesBackground />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex-1 min-h-[100vh] w-[100vw] md:w-full flex flex-col items-center justify-center">
          <Cover />
          <AboutMe />
        </div>
        <Projects />
        <TechStack />
        <TimeLine />
        <Contact />
      </div>
    </div>
  );
}
