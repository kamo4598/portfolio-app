import React, { useState } from 'react';
import styles from '../styles/SideBar.module.css';
import SideBarLogo from './sidebar/SideBarLogo';
import Nav from './sidebar/Nav';
import Arrow from './sidebar/Arrow';

const Sidebar: React.FC = () => {
    const [expand, setExpand] = useState<boolean>(false);

    return (
        <div className={styles.sidebar} aria-expanded={expand}>
            <SideBarLogo expand={expand} />
            <Arrow expand={expand} setExpand={setExpand} />
            <Nav expand={expand} />
        </div>
    );
}

export default Sidebar;
