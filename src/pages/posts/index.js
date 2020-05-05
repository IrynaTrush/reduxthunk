import React, { useEffect } from 'react';
import './style.css';
import  Post  from '../../components/post/index';
import { useSelector, useDispatch } from 'react-redux';
import { tweets, users } from '../../redux/selectors/home.selector';
import { loadTweets, loadUsers } from '../../redux/actions/home.action';
import preloader from '../../assets/images/Spinner-1s-200px.svg';

export default () => {
    const tweetsServer = useSelector(tweets);
    const usersServer = useSelector(users);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => dispatch(loadTweets()),dispatch(loadUsers()), 500);
      }, [dispatch]);
    console.log(tweetsServer);

    const tweet = tweetsServer.map((item, index) => {
        return (
            <Post
            name={usersServer[index].name}
            username={usersServer[index].username}
            avatar={usersServer[index].avatar}
            content={item.content}
            userId={item.userId}
            image={item.image}
            />
        )
    })
    return(
        <div className="postsWrapper">
            {
              usersServer.length ? tweet : <img src={preloader} alt="preloader"/>
            }
        </div>
    )
}