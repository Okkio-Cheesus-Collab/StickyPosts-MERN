import React from 'react';
import classes from '../Auth.module.css'

const Login = () => {
    return (
        <>  
            <div className={classes.welcomeMessage}>
                <h1 className={classes.welcomeLabel}>Welcome back!</h1>
                <p>ready to get some work done?</p>
            </div>
            <div className={classes.inputContainer}>
                <div className={classes.inputFields}>
                    <div>
                        <label className={classes.authFieldLabel}>Username</label>
                        <input className={classes.authField}></input>
                    </div>
                    <div>
                        <label className={classes.authFieldLabel}>Password</label>
                        <input className={classes.authField}></input>
                    </div>
                </div>
                <div className={classes.loginSection}>
                    <button className={classes.loginButton}>Login</button>
                    <p>Already have an account?</p>
                </div>
            </div>
              
        </>
    );
}

export default Login;