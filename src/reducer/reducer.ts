import { actionTypes } from './actions';

export default (state: any = { }, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_TEXT: {
      return {
        items: action.payload
      }
    }
    default: return state;
  }
}
