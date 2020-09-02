import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChRS4lkVaWoQk7Vj8XGbHTwEA4tqFpO84",
  authDomain: "instagram-clone-48ca3.firebaseapp.com",
  databaseURL: "https://instagram-clone-48ca3.firebaseio.com",
  projectId: "instagram-clone-48ca3",
  storageBucket: "instagram-clone-48ca3.appspot.com",
  messagingSenderId: "936786093558",
  appId: "1:936786093558:web:300f0c1861c1d8f8b893d7",
  measurementId: "G-RC2M5X56R6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
