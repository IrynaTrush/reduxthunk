import api from '../../api/api';
import { LOAD_USERS_SUCCESS, LOAD_USERS_FAIL,
   ADD_NEW_USER_SUCCESS, ADD_NEW_USER_FAIL,
   LOAD_TWEETS_SUCCESS, LOAD_TWEETS_FAIL,
   ADD_NEW_TWEET_SUCCESS, ADD_NEW_TWEET_FAIL } from './action.types';

export const loadUsers = (load) => (dispatch) => {
    api.getUsers().then((res) => {
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: res.data.data,
      });
    }).catch((err) => {
      console.log('error');
      dispatch({
        type: LOAD_USERS_FAIL,
        payload: err,
      });
    });
  };

  export const postNewUser= ( name, username, url, history) => (dispatch) => {
    api.createUser(name, username, url).then((data) => {
      dispatch({
         type: ADD_NEW_USER_SUCCESS,
         payload: data,
       });
      history.push('/reduxthunk/users');
    }).catch((err) => {
      console.log('error');
      dispatch({
        type: ADD_NEW_USER_FAIL,
        payload: err,
      });
    });
  };

  export const loadTweets = () => (dispatch) => {
    api.getTweets().then((res) => {
      dispatch({
        type: LOAD_TWEETS_SUCCESS,
        payload: res,
      });
    }).catch((err) => {
      console.log('error');
      dispatch({
        type: LOAD_TWEETS_FAIL,
        payload: err,
      });
    });
  };

  export const postNewTweet = (userId, content, image, history) => (dispatch) => {
    api.createTweet(userId, content, image).then((data) => {
      dispatch({
        type: ADD_NEW_TWEET_SUCCESS,
        payload: data,
      });
      history.push('/reduxthunk/posts');
    }).catch((err) => {
      console.log('error');
      dispatch({
        type: ADD_NEW_TWEET_FAIL,
        payload: err,
      });
    });
  };

