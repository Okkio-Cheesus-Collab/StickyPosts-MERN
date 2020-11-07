import React from 'react';
import classes from '../../CSS/Navbar.module.css';
import Logo from '../../Assets/logo/logo.png';


const Navbar = () => {
    return(
    <nav className={classes.navBody}>
        <div className={classes.logoBundle}>
            <img src={Logo} className={classes.logo} alt="logo"></img>
            <h1 className={classes.logoLabel}>StickyPosts</h1>
        </div>
        <ul className={classes.navButtons}>
            <li className={classes.loginButton}>Login</li>
        </ul>
    </nav>
    )
}

export default Navbar;