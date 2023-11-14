import React from 'react';
import styles from '../../styles/Nav.module.css';

interface NavItem {
  className: string;
  text: string;
}

interface NavItemsProps {
  item: NavItem;
  active: string;
}

const NavItems: React.FC<NavItemsProps> = ({ item, active }) => {
  return (
    <li className={`${styles.nav_items} ${active}`}>
      <i className={`bx ${item.className}`}></i>
      <span>{item.text}</span>
    </li>
  );
};

export default NavItems;
