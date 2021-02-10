import { combineReducers } from 'redux';

// REDUCERS
import loadingReducer from '../reducers/loading/loading';
import movieReducer from '../reducers/movies/movies';

// ACTIONS
import { LOGOUT_USER } from '../actions/types';

const rootReducer = combineReducers({
  loadingRXS: loadingReducer,
  movieRXS: movieReducer,
});

export default (state: any, action: any) =>
  action.type === LOGOUT_USER
    ? rootReducer(undefined, action)
    : rootReducer(state, action);
