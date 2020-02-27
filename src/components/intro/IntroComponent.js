import React from 'react';
import './intro.css';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: 150,
        width: 150,
        display:"inline-flex"
    },
 
});

function IntroComponent() {
    const classes = useStyles();
    return(
        <>
        <div className="introduction">
            <Avatar alt="Rob" src="rob.jpg" className={classes.root}/>
            <p className="introduction-text">
             Passionate about Code, travel, puppies and pizza.<br/>
             Web Deveoper From Chicago, Living in Hollywood, working
             in Camarillo, CA. 
            </p>
        </div>
        </>
    )
}

export default IntroComponent;