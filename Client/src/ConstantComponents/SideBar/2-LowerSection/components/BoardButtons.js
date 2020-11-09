import React, {useState} from 'react';
import classes from '../../../CSS/Sidebar.module.css';


const SidebarBtn = (props) => {
    let name = 'Okkio'
    const [boardName,setBoardName] = useState();
    
    return (
        <div className={classes.buttonContainer}>
            <div className={classes.boardButton} onMouseEnter={props.toggleHover} onMouseLeave={props.toggleHover}>
                {name.slice(0,2).toUpperCase()}
            </div>
            <div className={classes.buttonBanner}>
                {name}
            </div>
        </div>
        
    )
}
export default SidebarBtn;
