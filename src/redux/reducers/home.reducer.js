import { LOAD_USERS_SUCCESS , ADD_NEW_USER_SUCCESS, LOAD_TWEETS_SUCCESS,
    ADD_NEW_TWEET_SUCCESS } from '../actions/action.types';

const initialState = {
  users: [],
  tweets: [],
};

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USERS_SUCCESS: {
            return {
               ...state,
               users : action.payload,
            };
        }
        case ADD_NEW_USER_SUCCESS: {
            return {
                ...state,
                users: [...state.users, action.payload.data.data],
            };
        }
        case LOAD_TWEETS_SUCCESS: {
            return {
                ...state, 
                tweets: action.payload.data.data,
            };
        }
        case ADD_NEW_TWEET_SUCCESS: {
            return {
                ...state,
                tweets: [...state.tweets, action.payload.data.data]
            };
        }
        default:
            return state;
    }
}

export default homeReducer;