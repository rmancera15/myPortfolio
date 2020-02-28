import React, { useState, useEffect } from 'react';
import './header.css';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        height: "3em",
        width: "3em",
    }
});



function HeaderComponent() {
    const classes = useStyles();
    const [dimensions, setDimensions ] = useState({
        height: window.innerHeight + 'px',
        width: window.innerWidth,
        scrollTo:window.innerHeight
    });
    

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    function handleClick() {
        window.scrollTo(0, dimensions.scrollTo, {
            behavior: 'smooth',
            duration: 3000
        });
    }
    
    function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    return(
        <>
    <div className="header-wrapper" style={{"height":dimensions.height}}>
      <div className="header">
            <h3>Roberto Mancera</h3>
            <h6>Web Developer</h6>
    </div>
    <div className="scroll-down-btn">
    <IconButton onClick={handleClick}>
       <ArrowDropDownCircleIcon className={classes.root}/>
    </IconButton>
    </div>
    </div>
    </>
    )
}

export default HeaderComponent;