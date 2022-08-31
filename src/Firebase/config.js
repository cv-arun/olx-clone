import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/firebase-firestore'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: API_key,
    authDomain: "olx-clone-64684.firebaseapp.com",
    projectId: "olx-clone-64684",
    storageBucket: "olx-clone-64684.appspot.com",
    messagingSenderId: "1073689592539",
    appId: "1:1073689592539:web:fda5b3cb30f0370ca582fe",
    measurementId: "G-5KH7DTKJRN"
  };

 export default firebase.initializeApp(firebaseConfig)
