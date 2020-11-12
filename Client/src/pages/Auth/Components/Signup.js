import React from 'react';
import classes from '../Auth.module.css'

const Signup = (props) => {
    return (
        <>  
            <div className={classes.welcomeMessage}>
                <h1 className={classes.welcomeLabel}>Welcome!</h1>
                <p>ready to start planning?</p>
            </div>
            <div className={classes.inputContainer}>
                <div className={classes.inputFieldsSignup}>
                    <div>
                        <label className={classes.authFieldLabel}>Username</label>
                        <input className={classes.authField}></input>
                    </div>
                    <div>
                        <label className={classes.authFieldLabel}>Password</label>
                        <input className={classes.authField}></input>
                    </div>
                    <div>
                        <label className={classes.authFieldLabel}>Confirm Password</label>
                        <input className={classes.authField}></input>
                    </div>
                    <p className={classes.errors}></p>
                </div>
                <div className={classes.loginSection}>
                    <button className={classes.loginButton}>Signup</button>
                    <div className={classes.authMode}>
                        <p>Already have an account?</p><p className={classes.loginMode} onClick={props.toggleSignup}>Login</p>
                    </div>                          
                </div>
            </div>
              
        </>
    );
}

export default Signup;