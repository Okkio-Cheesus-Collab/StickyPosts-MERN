import React, { useState, useEffect } from 'react';
import classes from './Settings.module.css'
import {Settings} from 'react-feather';
import Tray from './Components/Tray'


const SettingsContainer = (props) => {
    const [settingsState,setSettingsState] = useState(false);
    const [toMount,setToMount] = useState(false)
    const transitionEnd = () => {
        if(!settingsState) {
            setToMount(false)
        }
    }
    const toggleSettings = () => {
        let temp = settingsState
        if (!temp) {
            setToMount(true)
        }
        setSettingsState(!temp)
    }
   
    return(
        <div className={classes.settingsContainer}>
            <Settings 
            className={classes.gearSvg}
            size={25}
            onClick={toggleSettings}/>

            { toMount?
                <Tray toggleTheme={props.toggleTheme} themePref={props.themePref} transitionEnd={transitionEnd} settingsState={settingsState}/>
                : null
            }
        </div>
    )
}
export default SettingsContainer;