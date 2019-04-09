import React from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDraw';


const Layout = (props)=>{
    return(
        <Aux>
            <Toolbar />
            <SideDraw />
            <main className="Content"> 
            {props.children}
            </main>
        </Aux>
    );
}

export default Layout