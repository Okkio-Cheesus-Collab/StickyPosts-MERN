import React, {useState} from 'react';
import classes from '../Auth.module.css'
import Login from './Login'
import Signup from './Signup'
import Bg from '../../Home/Components/BackgroundShapes'

const AuthContainer = () => {
    const [loginOrSignup,setLoginOrSignup] = useState(true)
    const [style,setStyle] = useState();
    const toggleSignup = () =>{
        setStyle({
            marginTop:`${-100}px`,
            opacity:0.1,
            width:`${300}px`,
            height:`${500}px`
        })
        let temp = loginOrSignup
        setTimeout(()=>{
            setStyle()
            setLoginOrSignup(!temp)

        },200)
        
    }
    return(<>
    <div className={classes.AuthWrapper} >
        <div className={classes.AuthContainer}style={style}>
            { loginOrSignup ?
            <> 
                <Login toggleSignup={toggleSignup}></Login>
            </>
            :
            <>
                <Signup toggleSignup={toggleSignup}/>
            </>
            }
        </div>
    </div>
    </>
    )
}
export default AuthContainer;