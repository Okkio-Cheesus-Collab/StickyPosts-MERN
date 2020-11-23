import React, {useState} from 'react';
import classes from '../../../CSS/Sidebar.module.css';
import {Plus} from 'react-feather'
import {Link} from 'react-router-dom';
const createButton = (props) => {

    return (
        <Link to="/board" className={classes.createButton}>
            <Plus className={classes.createBtnSvg}/>
            <div className={classes.createBtnTxt}>Create board</div>
        </Link>
            
    )
}
export default createButton;
