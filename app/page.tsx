"use client"
import Card from "../components/ui/Card";
import SideBar from "../components/SideBar/Sidebar";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
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
