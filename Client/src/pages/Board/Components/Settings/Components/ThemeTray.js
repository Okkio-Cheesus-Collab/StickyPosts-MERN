import React, {useState,useEffect} from 'react';
import classes from '../Settings.module.css'
import {ArrowLeft} from 'react-feather';
const ThemeTray = (props) => {
    const [theme,setTheme] = useState(false);
    const [style,setStyle] = useState();
    const toggleTheme = (event) => {
        let selectedPref = event.target.id
        setTheme(selectedPref)
        props.toggleTheme(selectedPref)
    }
    const Back = () => {
        props.transitionToHome({transform: `translateX(${100}%)`,opacity:0})
            setTimeout(() => {
                props.transitionToHome({
                    opacity:0,
                    transform: `translateX(${-100}%)`
                })
                props.setTrayScene("HomeTray")
            },100)
    }
    useEffect(()=>{
        setTheme(props.themePref)
    },[])
    return (
        <>
            <div className={classes.Header}>
                <ArrowLeft className={classes.backBtn} onClick={Back}/>
                Themes
                </div>
            <div className={classes.optionsContainer}>
                <div className={classes.optionContainer} id="lightMode" onClick={(event)=> toggleTheme(event)}>
                        <div className={classes.optionRadioCircle} id="lightMode">
                            {theme=="lightMode"?
                                <div className={classes.optionRadioFill}></div>
                                : null
                            }
                        </div>
                        <div className={classes.option} id="lightMode">Light</div>
                </div>
                <div className={classes.optionDivider}/>
                <div className={classes.optionContainer} id="darkMode"  onClick={(event)=> toggleTheme(event)}>
                        <div className={classes.optionRadioCircle} id="darkMode">
                            {theme=="darkMode"?
                                <div className={classes.optionRadioFill}></div>
                                : null
                            }
                        </div>
                        <div className={classes.option} id="darkMode">Dark</div>
                </div>
                <div className={classes.optionDivider}/>

            </div>
        </>
    )
}
export default ThemeTray;