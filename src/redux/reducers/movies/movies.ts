// Action types
import {
  GET_UP_COMING_MOVIES,
  MoviesDispatchTypes,
} from '../../actions/movies/moviesActionsTypes';

// Interfaces
interface IDefaultState {
  upComingMovies: [];
}

// Default State
const defaultState: IDefaultState = {
  upComingMovies: [],
};

// Movies Reducer TODO: Change the type of `action`
const moviesReducer = (state = defaultState, action: MoviesDispatchTypes) => {
  switch (action.type) {
    case GET_UP_COMING_MOVIES:
      return {
        ...state,
        upComingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
