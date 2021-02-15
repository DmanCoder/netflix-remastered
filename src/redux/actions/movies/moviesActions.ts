import { Dispatch } from 'redux';
import store from '../../store/store';

// Init
import { dbAPI, REACT_APP_TMBD_KEY } from '../../../api/init';

// Actions
import { loadingToggleAXN } from '../loading/loadingActions';
import { ILoadingToggle } from '../loading/loadingActionsTypes';

// ACTION TYPES
import {
  IUpComingMoviesSuccess,
  GET_UP_COMING_MOVIES,
} from './moviesActionsTypes';

// Get up coming movies (Coming Soon)
export const getUpComingMoviesAXN = () => (
  dispatch: Dispatch<IUpComingMoviesSuccess | ILoadingToggle>
) => {
  // Loading true
  // dispatch(loadingToggleAXN(true))

  // Get language
  const language: string = store.getState().languageRXS;

  // Endpoint
  const endPoint: string = `/movie/upcoming?api_key=${REACT_APP_TMBD_KEY}&language=${language}&page=1`; // TODO Crate pagination

  // Api call - Get upcoming movies
  dbAPI.get(endPoint).then((res) => {
    const { data } = res;
    dispatch({
      type: GET_UP_COMING_MOVIES,
      payload: data,
    });
  });
};
