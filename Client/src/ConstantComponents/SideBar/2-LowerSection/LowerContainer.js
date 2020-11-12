import React, {useState} from 'react';
import BoardButtons from './components/BoardButtons';
import classes from '../../CSS/Sidebar.module.css';

const LowerContainer = (props) => {
    let boards = []
    const data =    {   "Boards":
                        [   "TrelloClone",
                            "Okkio",
                            "Cheesus"   ]
                    }
    data["Boards"].map((board)=>{
        return(
            boards.push(
                <BoardButtons boardName={board} toggleHoverDynamic={props.toggleHoverDynamic}/>
             )
        )
    })
    return (
        <div className={classes.lowerBoard}>
            {boards}
        </div>
    )
}
export default LowerContainer;
