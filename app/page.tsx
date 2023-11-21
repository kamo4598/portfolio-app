"use client";

import SideBar from "../components/sidebar/Sidebar";
import Cover from "../components/cover/Cover";
import TimeLine from "../components/timeline/Timeline";
import TechStack from "@/components/techStack/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex h-auto max-w-[100vw]">
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Cover />
        <Projects />
        <TechStack />
        <TimeLine />
        <Contact />
      </div>
    </div>
  );
}
