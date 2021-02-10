import { Dispatch } from 'redux';

// Init
import { dbAPI, REACT_APP_TMBD_KEY } from '../../../api/init';
import { loadingToggleAXN } from '../loading/loadingActions';

// ACTION TYPES
import { IUpComingMoviesSuccess } from './moviesActionsTypes';

// Get up coming movies (Coming Soon)
export const getUpComingMoviesAXN = () => (
  dispatch: Dispatch<IUpComingMoviesSuccess>
) => {
  // Loading true
  loadingToggleAXN(true);
  // Get movies
  const endPoint: string = `/movie/upcoming?api_key=${REACT_APP_TMBD_KEY}&language=en-US&page=1`;

  // Api call
  dbAPI.get(endPoint).then((res) => {
    console.log(res);
  });
};
