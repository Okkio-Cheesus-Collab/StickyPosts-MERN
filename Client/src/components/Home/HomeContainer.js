import React from 'react';
import classes from '../../CSS/Home.module.css';


const HomeContainer = () => {
    return(
    <div className={classes.homeContainer}>
        <div className={classes.homeCard}>
            <label className={classes.welcomeLabel}>Stick it and Stick to it</label>
            <p className={classes.welcomeIntro}>StickyPosts allows you to create online boards for you and any partners to section and plan your projects
                with ease and visibility
            </p>
            <button className={classes.createBoardBtn}>Create a new board</button>
        </div>
    </div>
    )
}

export default HomeContainer;