import React, {useState} from 'react';
import classes from '../../../CSS/Sidebar.module.css';
import addsvg from '../../../../Assets/Miscellaneous/add.svg';
import {Link} from 'react-router-dom';
const createButton = (props) => {

    return (
        <Link to="/board" className={classes.createButton}>
            <img src={addsvg} alt="addsvg" className={classes.createBtnSvg}/>
            <div className={classes.createBtnTxt}>Create board</div>
        </Link>
            
    )
}
export default createButton;
