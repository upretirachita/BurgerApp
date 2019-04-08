import React from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css'

const Layout = (props)=>{
    return(
        <Aux>
            <div>Toolbar, Sidebar, Backdraw1</div>
            <main className="Content"> 
            {props.children}
            </main>
        </Aux>
    );
}

export default Layout