import styles from "../../styles/Hamburger.module.css";
import React, { useState } from "react";

const Hamburger: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <button
      className={styles.nav__button}
      aria-controls="primary-navigation"
      aria-expanded={expand}
      onClick={handleClick}
    >
      <svg
        stroke="var(--button-color)"
        fill="none"
        className={styles.hamburger}
        viewBox="-10 -10 120 120"
        width="35"
      >
        <path
          className={styles.line}
          d="m 0 28 h 100 a 1 1 0 0 1 0 25 h -100 a 1 1 0 0 1 0 -50 h 50 v 100"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default Hamburger;
