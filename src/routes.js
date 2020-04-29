import React from 'react';

import Home from './pages/home';
import Users from './pages/users';
import AddUser from './pages/addUser';
import Posts from './pages/posts/index';
import AddPost from './pages/addPost/index';


export const routes = [
    {
        path: "/reduxthunk/users",
        component: <Users/>
    },
    {
        path: "/reduxthunk/addUser",
        component: <AddUser/>
    },
    {
        path: "/reduxthunk/posts",
        component: <Posts/>
    },
    {
        path: "/reduxthunk/addPost",
        component: <AddPost/>
    },
    {
        path: "/reduxthunk/",
        component: <Home/>, 
        exact: true
    },
    {
        path: '*',
        component: () => ( <div>page not found 404</div>)
    },
   
]