import React, { useState } from 'react';
import classes from '../CSS/Sidebar.module.css';
import UpperContainer from './1-UpperSection/UpperContainer'
import LowerContainer from './2-LowerSection/LowerContainer'

const Sidebar = () => {
    const toggleHover = () => {
        const sidebarBody = document.getElementsByClassName(classes.sidebarBody)[0]
        sidebarBody.classList.toggle(classes.sidebarBody_active)
    }
    return (
        <div className={classes.sidebarBody}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}

        >
            <UpperContainer />

            <div className={classes.sideBarDivider} />

            <LowerContainer toggleHover={toggleHover} />

        </div>
    )
}
export default Sidebar;
