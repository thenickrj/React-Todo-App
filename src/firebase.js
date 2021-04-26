import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_f1Qgg7m5zV9HDMHFDSlO8BEw5qE0nDo",
  authDomain: "todo-app-113a5.firebaseapp.com",
  databaseURL: "https://todo-app-113a5.firebaseio.com",
  projectId: "todo-app-113a5",
  storageBucket: "todo-app-113a5.appspot.com",
  messagingSenderId: "184438950936",
  appId: "1:184438950936:web:ea97ff3993c1f7a271476d",
  measurementId: "G-6WRPJTDKCW",
});

const db = firebaseApp.firestore();

export default db;
