import React from "react";
import styles from "../../styles/SideBarLogo.module.css";

interface LogoProps {
  expand: boolean;
}

const Logo: React.FC<LogoProps> = ({ expand }) => {
  return (
    <div className={styles.logo} aria-expanded={expand}>
      <img src="/H-icon.svg" alt="Logo" className={styles.logo} />
      <h3>Hassan Kamran</h3>
    </div>
  );
};

export default Logo;
