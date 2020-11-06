import React, {useState} from 'react';
import BoardButtons from './components/BoardButtons';
import classes from '../../CSS/Sidebar.module.css';

const LowerContainer = (props) => {

    return (
        <div className={classes.lowerBoard}>
            <BoardButtons toggleHover={props.toggleHover}/>
        </div>
    )
}
export default LowerContainer;
