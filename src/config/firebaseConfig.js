import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy8o1IOZKZFZGin6jXS4zUa01sFpFJAys",
  authDomain: "react-nija-mario.firebaseapp.com",
  databaseURL: "https://react-nija-mario.firebaseio.com",
  projectId: "react-nija-mario",
  storageBucket: "react-nija-mario.appspot.com",
  messagingSenderId: "973452234370",
  appId: "1:973452234370:web:03bea11587d235e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
