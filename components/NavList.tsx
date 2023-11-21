import React from "react";
import styles from "../styles/Nav.module.css";
import NavItems from "./NavItems";

interface NavItem {
  className: string;
  text: string;
}

interface NavParam {
  title: string;
  items: NavItem[];
}

interface NavListProps {
  navParam: NavParam;
}

const NavList: React.FC<NavListProps> = ({ navParam }) => {
  const navItems = navParam.items;

  return (
    <>
      <div className={styles.nav_title}>{navParam.title}</div>
      <ul>
        {navItems.map((item, idx) => {
          const active = idx === 0 ? `${styles.active}` : "";
          return <NavItems key={idx} item={item} active={active} />;
        })}
      </ul>
    </>
  );
};

export default NavList;
