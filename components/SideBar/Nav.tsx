import React, { Fragment, useEffect } from "react";
import styles from "../../styles/Nav.module.css";
import NavList from "./NavList";

// Define TypeScript interface for props
interface NavProps {
  expand: boolean;
}

// Define TypeScript type for nav items
interface NavItem {
  title: string;
  items: Array<{
    text: string;
    className: string;
  }>;
}

const Nav: React.FC<NavProps> = ({ expand }) => {
  const navParams: NavItem[] = [
    {
      title: "Highlights",
      items: [
        {
          text: "Home",
          className: "Home",
        },
        {
          text: "Projects",
          className: "GanttChartSquare",
        },
        {
          text: "Tech Stack",
          className: "Layers",
        },
        {
          text: "Experience",
          className: "SearchCode",
        },
        {
          text: "Contact Me",
          className: "UserSquare2",
        },
      ],
    },
    {
      title: "Socials",
      items: [
        {
          text: "GitHub",
          className: "Github",
        },
        {
          text: "LinkedIn",
          className: "Linkedin",
        },
        {
          text: "Email",
          className: "MailPlus",
        },
      ],
    },
  ];

  const addEventListener = () => {
    const navItems = document.querySelectorAll(`.${styles.nav_items}`);

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        navItems.forEach((navItem) => {
          navItem.classList.remove(`${styles.active}`);
        });
        navItem.classList.add(`${styles.active}`);
      });
    });
  };

  useEffect(() => {
    addEventListener();
  }, []);

  return (
    <div className={styles.nav} aria-expanded={expand}>
      {navParams.map((item, idx) => (
        <Fragment key={idx}>
          <NavList navParam={item} />
          {idx + 1 !== navParams.length ? <hr /> : null}
        </Fragment>
      ))}
    </div>
  );
};

export default Nav;
