import React, { useEffect } from 'react';
import './style.css';
import User from '../../components/user/index';
import { useSelector,useDispatch } from 'react-redux';
import { users } from '../../redux/selectors/home.selector';
import { loadUsers } from '../../redux/actions/home.action';
import preloader from '../../assets/images/Spinner-1s-200px.svg';
 

export default () => {
  const usersServer = useSelector(users);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(loadUsers()), 500); 
  }, [dispatch]);
    

  const user = usersServer.map(item => {
    return( 
      <User
      avatar={item.avatar}
      name={item.name}
      username={item.username}
      id={item.id}
      key={item + Math.random()}
    /> 
    )
  })
    return ( 
        <div className="usersWrapper">
            {
              usersServer.length ? user : <img src={preloader} alt="preloader"/>
            }
        </div>
    );  
  }