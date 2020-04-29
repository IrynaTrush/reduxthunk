import React from "react";
import './style.css';

function post(props) {
    return (
       <div className="postWrapper">
                <div className="user">
                    <img src={props.avatar} className="userImage" alt="avatar"/>
                    <div className="content">
                        <div className="userInfo">
                        <div className="username">{props.name}</div>
                        <div className="userlink">{props.username} </div>
                        </div>
                        <div className="message">{props.content}</div>
                    </div>
                </div>
                <div className="ray">
                    <img src={props.image} className="rayImage" alt="another"/>
                </div>
                <div className="footer">
                    <div className="item"><i className="far fa-comment"></i><span>478</span></div>
                    <div className="item"><i className="fas fa-random"></i><span>156</span></div>
                    <div className="item"><i className="far fa-heart"></i><span>756</span></div>
                    <div className="item"><i className="fas fa-cloud-upload-alt"></i></div> 
                </div>
            </div>
        )
}

export default post;