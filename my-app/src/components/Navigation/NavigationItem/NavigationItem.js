import React from 'react';
import './NavigationItem.css'
import classes from './NavigationItem.css';

const NavigationItem = (props)=>{
    return(
       <ul className="NavigationItem">
           <li>
               <a  className ={props.active ? classes.active : null}
                href={props.link}>
                    {props.children} 
               </a>
            </li>
       </ul>
    );
}

export default NavigationItem