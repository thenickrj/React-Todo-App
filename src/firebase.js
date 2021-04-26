import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //Firebase config
});

const db = firebaseApp.firestore();

export default db;
