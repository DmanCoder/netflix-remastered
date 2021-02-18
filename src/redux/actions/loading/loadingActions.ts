import { Dispatch } from 'redux';

// Types
import { ILoadingDispatchTypes, LOADING_TOGGLE } from './loadingActionsTypes';

// Loading toggle action
const loadingToggleAXN = (isLoading: boolean) => (
  dispatch: Dispatch<ILoadingDispatchTypes>
) =>
  dispatch({
    type: LOADING_TOGGLE,
    payload: isLoading,
  });

export default { loadingToggleAXN };
