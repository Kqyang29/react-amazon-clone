import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjHy0u9SmML140uXQUCLv944Mpm498J5g",
  authDomain: "linkedin-clone-3dccb.firebaseapp.com",
  projectId: "linkedin-clone-3dccb",
  storageBucket: "linkedin-clone-3dccb.appspot.com",
  messagingSenderId: "424920140635",
  appId: "1:424920140635:web:9f082c5add2ef2d4c7287e"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

export default db;