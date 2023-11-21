import styles from "../styles/Arrow.module.css";

// Define TypeScript interface for props
interface HamburgerProps {
  expand: boolean;
  setExpand: (expand: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ expand, setExpand }) => {
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
        viewBox="0 0 100 100"
        width="35"
      >
        <path
          className={styles.line}
          d="m 50 0 a 0 0 0 0 0 40 40 a 0 0 0 0 0 -40 40 v -80 a 0 0 0 0 0 -40 40 a 0 0 1 0 0 41 41"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default Hamburger;
