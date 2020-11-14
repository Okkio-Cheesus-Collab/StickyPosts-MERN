import React from 'react';
import classes from '../Auth.module.css'

const Login = (props) => {
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
                        <input className={classes.authField} type="password"></input>
                    </div>
                </div>
                <p className={classes.errors}></p>
                <div className={classes.loginSection}>
                    <button className={classes.loginButton}>Login</button>
                    <div className={classes.authMode}>
                        <p>Don't have an account?</p><p className={classes.loginMode} onClick={props.toggleSignup}>Signup</p>
                    </div>
                </div>
            </div>
              
        </>
    );
}

export default Login;