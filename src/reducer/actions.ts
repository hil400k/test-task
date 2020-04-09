import { textRef } from "../firebase";

export const actionTypes = {
  FETCH_TEXT: 'FETCH_TEXT'
};

export const actions = {
  fetchText: () => (dispatch: Function) => {
    textRef.on('value', snapshot => {
      dispatch({
        type: actionTypes.FETCH_TEXT,
        payload: snapshot.val()
      });
    })
  }
};
