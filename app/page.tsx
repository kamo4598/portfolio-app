"use client";
import Card from "../components/ui/cards/Card";
import SideBar from "../components/sidebar/Sidebar";
import styles from "../styles/Home.module.css";
import Cover from "../components/cover/Cover";

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <Cover />
        <div className="flex">
          <Card color="orange" title="Title 1">
            Hi
          </Card>
          <Card color="purple" title="Title 1">
            Hi
          </Card>
          <Card color="green" title="Title 1">
            Hi
          </Card>
        </div>
      </main>
    </div>
  );
}
