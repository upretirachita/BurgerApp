import React from 'react';
import './SideDraw.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const SideDraw = (props)=>{
    return(
       <div className="SideDraw">
            <div className="SideDrawLogo">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
       </div>
    );
}

export default SideDraw