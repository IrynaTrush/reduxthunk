import React from 'react';
import Sidebar from '../sidebar/index';
import './style.css';


const Layout = (props) => {
    return(
        <div className="main">
            <Sidebar></Sidebar>
    <div className="wrapper">{props.children}</div>
        </div>
    )
}

export default Layout;