import React, { Fragment, useEffect } from 'react';
import styles from '../../styles/Nav.module.css';
import NavList from './NavList';

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
      title: 'Management',
      items: [
        {
          text: 'Dashboard',
          className: 'bxs-dashboard',
        },
        {
          text: 'Analytics',
          className: 'bxs-bar-chart-alt-2',
        },
        {
          text: 'Wallet',
          className: 'bxs-wallet',
        },
        {
          text: 'Notifications',
          className: 'bxs-bell',
        },
        {
          text: 'Setting',
          className: 'bxs-dashboard',
        },
      ],
    },
    // Add more navParams as needed
  ];

  const addEventListener = () => {
    const navItems = document.querySelectorAll(`.${styles.nav_items}`);

    navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        navItems.forEach(navItem => {
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
    <nav className={styles.nav} aria-expanded={expand}>
      {navParams.map((item, idx) => (
        <Fragment key={idx}>
          <NavList navParam={item} />
          {idx + 1 !== navParams.length ? <hr /> : null}
        </Fragment>
      ))}
    </nav>
  );
};

export default Nav;
