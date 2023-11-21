import React from "react";
import styles from "../styles/SideBarLogo.module.css";
import Image from "next/image";

interface LogoProps {
  expand: boolean;
}

const Logo: React.FC<LogoProps> = ({ expand }) => {
  return (
    <div className={styles.logo} aria-expanded={expand}>
      <Image src="/H-icon.svg" width={40} height={40} alt="Logo" className={styles.logo} />
      <h3>Hassan Kamran</h3>
    </div>
  );
};

export default Logo;
