import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBkxd4i4NjZIUBI0JpNez8iuDdWMY6wQfg",
    authDomain: "messanger-app-64c49.firebaseapp.com",
    projectId: "messanger-app-64c49",
    storageBucket: "messanger-app-64c49.appspot.com",
    messagingSenderId: "440151420233",
    appId: "1:440151420233:web:c7a89220eacc4ec7c73e98",
    measurementId: "G-2MCXG07M6D"
});

  const db = firebaseApp.firestore();

  export default db;