import { actionTypes } from './actions';

export default (state: any = {}, action: any) => {
  switch (action.type) {
    case actionTypes.GET: {
      return {
        ...state
      }
    }
    default: return state;
  }
}
