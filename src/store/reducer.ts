import * as actions from './actions';

export default (state: any = {}, action: any) => {
  switch (action.type) {
    case actions.GET: {
      return {
        ...state
      }
    }
    default: return state;
  }
}
