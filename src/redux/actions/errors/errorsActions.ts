import { Dispatch } from 'redux';

// Types
import { IErrorFeedback, ERROR_FEEDBACK } from './errorsActionsType';

// Loading toggle action
export const errorsFeedbackAXN = (errors: {}) => (
  dispatch: Dispatch<IErrorFeedback>
) =>
  dispatch({
    type: ERROR_FEEDBACK,
    payload: errors,
  });
