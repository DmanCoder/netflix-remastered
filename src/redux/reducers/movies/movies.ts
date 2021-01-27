// Action types
import { ERROR_FEEDBACK } from '../../actions/types';

// Interfaces
interface IDefaultState {}

// Default State
const defaultState: IDefaultState = {};

// Movies Reducer TODO: Change the type of `action`
const moviesReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ERROR_FEEDBACK:
      return defaultState;
    default:
      return state;
  }
};

export default moviesReducer;
