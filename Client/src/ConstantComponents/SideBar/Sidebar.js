import React, { useState, useRef } from 'react';
import classes from '../CSS/Sidebar.module.css';
import UpperContainer from './1-UpperSection/UpperContainer'
import LowerContainer from './2-LowerSection/LowerContainer'

const Sidebar = () => {
    const [sidebarExpanded,setSidebarExpanded] = useState(false)
    let expandTimer = useRef();
    
    const toggleHover = () => {
        const sidebarBody = document.getElementsByClassName(classes.sidebarBody)[0]
        sidebarBody.classList.toggle(classes.sidebarBody_active)
        expandTimer = setTimeout(()=>{
            setSidebarExpanded(true) 
        },250)
    }
    const toggleHoverOff = () => {
        clearTimeout(expandTimer)
        const sidebarBody = document.getElementsByClassName(classes.sidebarBody)[0]
        sidebarBody.classList.toggle(classes.sidebarBody_active)
        if (sidebarExpanded) {
            setSidebarExpanded(false)
        }
    }
    const toggleHoverDynamic = () => {
        if(sidebarExpanded){

        } else {
            toggleHoverOff()
        }
    }
    return (
        <div className={classes.sidebarBody}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHoverOff}

        >
            <UpperContainer />

            <div className={classes.sideBarDivider} />

            <LowerContainer toggleHoverDynamic={toggleHoverDynamic} />

        </div>
    )
}
export default Sidebar;
