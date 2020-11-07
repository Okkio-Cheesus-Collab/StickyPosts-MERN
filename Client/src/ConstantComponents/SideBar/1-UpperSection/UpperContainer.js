import React, {useState} from 'react';
import NameCard from './components/NameCard';
import CreateButton from './components/createButton';
import classes from '../../CSS/Sidebar.module.css';
const UpperContainer = (props) => {

    return (
        <div className={classes.upperBoard}>
            <NameCard/>
            <CreateButton/>
        </div> 
    )
}
export default UpperContainer;
