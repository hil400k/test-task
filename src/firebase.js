import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAt3B0Nwwjx6goQFLHBM9_2RG3-IX39iWk",
    authDomain: "test-task-4e8ab.firebaseapp.com",
    databaseURL: "https://test-task-4e8ab.firebaseio.com",
    projectId: "test-task-4e8ab",
    storageBucket: "test-task-4e8ab.appspot.com",
    messagingSenderId: "984140393533",
    appId: "1:984140393533:web:5efb2bceb29f89d30f4e54"
}

export const app = firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const textRef = databaseRef.child("text");
