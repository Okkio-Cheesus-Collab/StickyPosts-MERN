import React, {useState} from 'react';
import classes from '../../../CSS/Sidebar.module.css';


const SidebarBtn = (props) => {
    let name = props.boardName
    
    
    return (
        <div className={classes.buttonContainer}>
            <div className={classes.boardButton} onMouseEnter={props.toggleHoverDynamic} onMouseLeave={props.toggleHoverDynamic}>
                {name.slice(0,2).toUpperCase()}
            </div>
            <div className={classes.buttonBanner}>
                {name}
            </div>
        </div>
        
    )
}
export default SidebarBtn;
