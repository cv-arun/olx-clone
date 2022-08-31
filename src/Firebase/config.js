import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/firebase-firestore'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey:"API_key",
    authDomain: "Auth domain",
    projectId: "project id",
    storageBucket: "storage bucket",
    messagingSenderId: "mesaging id",
    appId: "appid",
    measurementId: "measurmentid"
  };

 export default firebase.initializeApp(firebaseConfig)
