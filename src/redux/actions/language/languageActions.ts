import { Dispatch } from 'redux';

// Types
import { ISetLanguageDispatchTypes, SET_LANGUAGE } from './languageActionsType';

// Loading toggle action
const setLanguageAXN = (language: string) => (
  dispatch: Dispatch<ISetLanguageDispatchTypes>
) =>
  dispatch({
    type: SET_LANGUAGE,
    payload: language,
  });

const languageActions = {
  setLanguageAXN,
};

export default languageActions;
