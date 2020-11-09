import React from 'react';
import classes from '../CSS/Navbar.module.css';
import Logo from '../../Assets/logo/logo.png';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return(
    <nav className={classes.navBody}>
        <Link to="/" className={classes.logoBundle}>
                <img src={Logo} className={classes.logo} alt="logo"></img>
                <h1 className={classes.logoLabel}>StickyPosts</h1>    
        </Link>
        <ul className={classes.navButtons}>
            <li className={classes.loginButton}>Login</li>
        </ul>
    </nav>
    )
}

export default Navbar;