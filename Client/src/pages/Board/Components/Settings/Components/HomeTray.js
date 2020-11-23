import React from 'react';
import classes from '../Settings.module.css'
const HomeTray = (props) => {
    return(
        <>
            <div className={classes.Header}>Settings</div>
                    <div className={classes.optionsContainer}>
                        <div className={classes.optionContainer} onClick={props.settingSelect}>
                            <div className={classes.option}>My Profile</div>
                        </div>
                        <div className={classes.optionDivider}/>
                        <div className={classes.optionContainer} onClick={props.settingSelect}>
                            <div className={classes.option}>Themes</div>
                        </div>
                        <div className={classes.optionDivider}/>
                    </div>
        </>
    )
}
export default HomeTray