import { actionTypes } from './actions';

interface IAction {
  type: string;
  payload: any;
}

export default (state: any = { }, action: IAction) => {
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
