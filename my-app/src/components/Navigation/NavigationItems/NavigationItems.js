import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationItems = (props)=>{
    return(
       <ul className="NavigationItems">
           <NavigationItem link="/" active>Burger Bulder</NavigationItem>
           <NavigationItem link="/">Check Out</NavigationItem>
       </ul>
    );
}

export default NavigationItems