import React from 'react';
import classes from '../Home.module.css';
import {Link} from 'react-router-dom';
import Postits from '../../../Assets/Background/Color_Post_it.svg';
import Sidebar from '../../../ConstantComponents/SideBar/Sidebar';

const HomeContainer = () => {
    return(
    <div className={classes.homeContainer}>
        <Sidebar></Sidebar>
        <div className={classes.homeCard}>
            <label className={classes.welcomeLabel}>Stick it and Stick to it</label>
            <p className={classes.welcomeIntro}>StickyPosts allows you to create online boards for you and any partners to section and plan your projects
                with ease and visibility
            </p>
            <Link to="/board" className={classes.createBoardBtn}>
                <button >
                    Create a new board
                </button>
            </Link>
            {/* <img src={Postits} className={classes.PostitBg}></img> */}
        </div>
    </div>
    )
}

export default HomeContainer;