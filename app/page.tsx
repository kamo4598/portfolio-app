"use client";

import SideBar from "../components/sidebar/Sidebar";
import styles from "../styles/Home.module.css";
import Cover from "../components/cover/Cover";
import TimeLine from "../components/timeline/Timeline";
import TechStack from "@/components/techStack/TechStack";

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.main}>
        <Cover />
        <TechStack />
        <TimeLine />
      </div>
    </div>
  );
}
