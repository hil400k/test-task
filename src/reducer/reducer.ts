import { actionTypes } from './actions';

interface IAction {
  type: string;
  payload: any;
}

export default (state: any = { }, action: IAction) => {
  switch (action.type) {
    case actionTypes.FETCH_TEXT: {
      return {
        items: action.payload
      }
    }
    default: return state;
  }
}
