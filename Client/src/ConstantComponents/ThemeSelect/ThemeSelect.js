import React, {useState, useEffect} from 'react';
import classes from '../CSS/Sidebar.module.css'


const ThemeSelect = (props) => {
    const [theme,setTheme] = useState(false);
    const [style,setStyle] = useState();
    const getCurrBtnPos = () =>{
        if (props.themePref == 'lightMode') {
            return {marginLeft:`${25}px`}
        } else {
            return {marginRight:`${25}px`}
        }
    }
    const toggleTheme = () => {
        // document.getElementById('root').style.cssText =
        // `-webkit-transition: none !important;
        // -moz-transition: none !important;
        // -o-transition: none !important;
        // transition: none !important;
        // transition-delay: 0s !important;`
        // document.getElementById('root').style.transitionDelay= "0s"
        let temp = theme
        setTheme(!temp)
        props.toggleTheme(temp)
        if(props.themePref == 'darkMode'){
            setStyle({marginLeft:`${25}px`})
        } else {
           setStyle({marginRight:`${25}px`})
        }
        
    }
    useEffect(()=>{
        setStyle(getCurrBtnPos())
        let temp = null
        if (props.themePref == 'darkMode') {
            temp = true
        } else if (props.themePref == 'lightMode') {
            temp = false
        }
        setTheme(temp)
    },[])
    return (
        <div className={classes.toggleContainer} onMouseEnter={props.toggleHoverDynamic} onMouseLeave={props.toggleHoverDynamic} onClick={toggleTheme}>
            <div className={classes.toggleBody}  >
                <span className={classes.toggleKnob} style={style}/>
            </div>
        </div>
    )
}
export default ThemeSelect;