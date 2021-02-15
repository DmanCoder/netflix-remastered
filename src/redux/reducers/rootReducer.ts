import { combineReducers } from 'redux';

// REDUCERS
import loadingReducer from '../reducers/loading/loading';
import movieReducer from '../reducers/movies/movies';
import errorsReducer from '../reducers/errors/errors';

const rootReducer = combineReducers({
  loadingRXS: loadingReducer,
  movieRXS: movieReducer,
  errorsRXS: errorsReducer,
});

export default rootReducer;

// export default (state: any, action: any) =>
//   action.type === LOGOUT_USER
//     ? rootReducer(undefined, action)
//     : rootReducer(state, action);
