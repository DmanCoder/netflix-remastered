import { Dispatch } from 'redux';

// Types
import { ISetLanguageDispatchTypes, SET_LANGUAGE } from './languageActionsType';

// Loading toggle action
export const setLanguageAXN = (language: string) => (
  dispatch: Dispatch<ISetLanguageDispatchTypes>
) =>
  dispatch({
    type: SET_LANGUAGE,
    payload: language,
  });
