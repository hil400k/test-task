import { actionTypes } from './actions';

export default (state: any = { items: 'no-items' }, action: any) => {
  switch (action.type) {
    case actionTypes.GET: {
      return {
        items: action.payload
      }
    }
    default: return state;
  }
}
