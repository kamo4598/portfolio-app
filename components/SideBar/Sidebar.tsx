import React, { useState } from 'react';
import styles from '../../styles/SideBar.module.css';
import SideBarLogo from './SideBarLogo';
import Nav from './Nav';
import Arrow from './Arrow';

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
