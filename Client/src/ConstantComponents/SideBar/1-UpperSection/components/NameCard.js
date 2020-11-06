import React, {useState, useEffect} from 'react';
import classes from '../../../CSS/Sidebar.module.css';


const NameCard = (props) => {
    let name = 'Okkio'
    return (
        <div className={classes.nameCardContainer}>
            <div className={classes.profileIcon}>
                {name.slice(0,2).toUpperCase()}
            </div>
            <div className={classes.profileIconExtend}>
            </div>
            
             <div className={classes.Name} >
                {name}
            </div>

        </div>
    )
}
export default NameCard;
