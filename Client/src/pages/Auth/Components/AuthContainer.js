import React from 'react';
import classes from '../Auth.module.css'
import Login from './Login'

const AuthContainer = () => {
    return(
    <div className={classes.AuthWrapper}>
        <div className={classes.AuthContainer}>
            <Login></Login>
        </div>
    </div>
    )
}
export default AuthContainer;