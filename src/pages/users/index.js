import React, { useEffect } from 'react';
import './style.css';
import User from '../../components/user/index';
import { useSelector,useDispatch } from 'react-redux';
import { users } from '../../redux/selectors/home.selector';
import { loadUsers } from '../../redux/actions/home.action';

export default () => {
  const usersServer = useSelector(users);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(loadUsers()), 500);
  }, [dispatch]);

  console.log(usersServer);

  const user = usersServer.map(item => {
    return( 
      <User
      avatar={item.avatar}
      name={item.name}
      username={item.username}
      id={item.id}
    /> 
    )
  })
    return(
        <div className="usersWrapper">
            {user}
        </div>
    )
}