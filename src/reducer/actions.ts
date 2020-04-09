import { itemsRef } from "../firebase";

export const actionTypes = {
  GET: 'GET'
};

export const actions = {
  fetchItems: () => (dispatch: Function) => {
    itemsRef.on('value', snapshot => {
      dispatch({
        type: actionTypes.GET,
        payload: snapshot.val()
      });
    })
  }
};
