import { actionTypes } from './actions';
import { IAction, IGlobalState } from "../models";

export default (state: IGlobalState = {}, action: IAction): IGlobalState => {
  switch (action.type) {
    case actionTypes.FETCH_TEXT: {
      return {
        ...state,
        text: action.payload
      };
    };
    case actionTypes.SET_USER: {
      return {
        ...state,
        user: action.payload
      }
    };
    case actionTypes.CLEAR_USER: {
      delete state.user;
      return {
        ...state
      };
    };
    default: return state;
  }
}
