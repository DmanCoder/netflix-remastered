import { combineReducers } from 'redux';

// REDUCERS
import loadingReducer from './loading/loadingReducer';
import moviesReducer from './movies/moviesReducer';
import errorsReducer from './errors/errorsReducer';
import languageReducer from './language/languageReducer';

const rootReducer = combineReducers({
  loadingRXS: loadingReducer,
  moviesRXS: moviesReducer,
  errorsRXS: errorsReducer,
  languageRXS: languageReducer,
});

export default rootReducer;

// export default (state: any, action: any) =>
//   action.type === LOGOUT_USER
//     ? rootReducer(undefined, action)
//     : rootReducer(state, action);
