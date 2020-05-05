const users = state => state.homeReducer.users;
const tweets = state => state.homeReducer.tweets;
const loader = state => state.homeReducer.isLoading;

export { users, tweets, loader };