import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <img src="https://cdn2.iconfinder.com/data/icons/large-svg-icons-part-3/512/twitter_bird-512.png" 
            alt="tweet" className="logo"/>
            <ul className="nav">
            <li>
              <Link to="/reduxthunk/">Home</Link>
            </li>
            <li>
              <Link to="/reduxthunk/users">Users</Link>
            </li>
            <li>
              <Link to="/reduxthunk/addUser">Add User</Link>
            </li>
            <li>
              <Link to="/reduxthunk/posts">Posts</Link>
            </li>
            <li>
              <Link to="/reduxthunk/addPost">Add Post</Link>
            </li>
            </ul>
        </div>
    )
}

export default Sidebar;