import React, {useEffect,useState, useRef} from 'react';
import classes from '../Settings.module.css'
import ThemeTray from './ThemeTray';
import HomeTray from './HomeTray'
const Tray = (props) => {
    const [style,setStyle] = useState();
    const [style2,setStyle2] = useState();
    const [trayScene,setTrayScene] = useState();
    let timeout = useRef();
    const pages = {
        Themes: ThemeTray,
        HomeTray: HomeTray
    }
    const settingSelect = (event) => {
        const selection = event.currentTarget.textContent
        setStyle2({transform: `translateX(${-100}%)`,opacity:0})
            setTimeout(() => {
                setStyle2({
                    opacity:0,
                    transform: `translateX(${100}%)`
                })
                setTrayScene(selection)
            },100)
        
    }
    const transitionToHome = (style) => {
        setStyle2(style)
    }
    let MyComponent = HomeTray
    if (trayScene) {
        MyComponent = pages[trayScene]
        
    }
    useEffect(()=> {
        clearTimeout(timeout)
            if (props.settingsState) {
                setStyle({top:`${115}%`,opacity:1})
            } else {
                setStyle()
                timeout = setTimeout (() => {
                    setStyle({display:'none'})
                    props.transitionEnd()
                },120)
            }
        },[props.settingsState])
        useEffect(()=> {
            setTimeout(() => {
                setStyle2({
                    opacity:1,
                    transform: `translateX(${0}%)`
                })
            },100)
        },[trayScene])
    return(
        <div className={classes.trayContainer} style={style}>
            <div className={classes.HeaderStatic}></div>
            <div className={classes.trayPage} style={style2}>
                <MyComponent 
                setTrayScene={setTrayScene}
                themePref={props.themePref}
                toggleTheme={props.toggleTheme}
                settingSelect={settingSelect}
                transitionToHome={transitionToHome}/>
            </div>
        </div>
    )
}
export default Tray;