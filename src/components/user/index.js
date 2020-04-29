import React from 'react';
import './style.css';

const user = (props) => {
    return(
        <div className="userWrapper">
            <img className="avatar" src={props.avatar} alt="avatar"/>
            <p className="name" title="name">{props.name}</p>
            <p className="username" title="username">{props.username}</p>
        </div>
    )
}

export default user;