import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCIAewmtbTiO8XSX_ZLl7u3aVeR8gAEaK4",
  authDomain: "new-app-c7abb.firebaseapp.com",
  databaseURL: "https://new-app-c7abb.firebaseio.com",
  projectId: "new-app-c7abb",
  storageBucket: "new-app-c7abb.appspot.com",
  messagingSenderId: "581040163869",
  appId: "1:581040163869:web:4635a159254bb7aee94af4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
