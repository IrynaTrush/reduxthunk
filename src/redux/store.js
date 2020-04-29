import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../redux/reducers/home.reducer';

const reducers = combineReducers({
    homeReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;