import React, { useState } from 'react';
import './header.css';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import FloatingActionButton from '@material-ui/FloatingActionButton';

function HeaderComponent() {
    const [height, setHeight ] = useState(window.innerHeight+'px');
   
    return(
        <>
    <div className="header-wrapper" style={{"height":height}}>
      <div className="header">
            <h3>Roberto Mancera</h3>
            <h6>Web Developer</h6>
    </div>
    <div className="scroll-down-btn">
        <FloatingActionButton>
        <ArrowDropDownCircleIcon/>
        </FloatingActionButton>
    </div>
    </div>
    </>
    )
}

export default HeaderComponent;