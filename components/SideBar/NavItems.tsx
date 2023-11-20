import React from "react";
import styles from "../../styles/Nav.module.css";
import { icons } from "lucide-react";

interface NavItem {
  className: string;
  text: string;
}

interface NavItemsProps {
  item: NavItem;
  active: string;
}

const NavItems: React.FC<NavItemsProps> = ({ item, active }) => {
  const LucideIcon = icons[item.className as keyof typeof icons];

  return (
    <li className={`${styles.nav_items} ${active}`}>
      {LucideIcon ? <LucideIcon name={item.className} /> : null}
      <span>{item.text}</span>
    </li>
  );
};

export default NavItems;
