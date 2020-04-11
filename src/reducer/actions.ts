import { app, textRef } from "../firebase";

export const actionTypes = {
  FETCH_TEXT: 'FETCH_TEXT',
  SET_USER: 'SET_USER',
};

export const actions = {
  fetchText: () => (dispatch: Function) => {
    textRef.on('value', snapshot => {
      dispatch({
        type: actionTypes.FETCH_TEXT,
        payload: snapshot.val()
      });
    })
  },
  tryToAuth: () => (dispatch: Function) => {
    const user = localStorage.getItem('auth');

    if (user) {
      dispatch({
        type: actionTypes.SET_USER,
        payload: JSON.parse(user)
      });
    }
  },
  login: (email: string, password: string) => (dispatch: Function) => {
      app.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
          const user = response.user;
          localStorage.setItem('auth', JSON.stringify(user));

          dispatch({
            type: actionTypes.SET_USER,
            payload: user
          })
        })
        .catch((err) => {
          console.info(err, 'error');
        })
  }
};
