import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCTapRggIUYOVIPuM96MWlfAP9zMenrWVs",
  authDomain: "shlack-d0d44.firebaseapp.com",
  projectId: "shlack-d0d44",
  databaseURL: "https://shlack-d0d44-default-rtdb.firebaseio.com/",
  storageBucket: "shlack-d0d44.appspot.com",
  messagingSenderId: "706515288044",
  appId: "1:706515288044:web:03b2ac7a5431f2f5278ac9",
  measurementId: "G-0DGGEP8VH6"
};
firebase.initializeApp(config);

export default firebase;
