// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApt_d58lcjepEMJLpE-bBEyPmp9Z_kPt8",
    authDomain: "newflibiistore.firebaseapp.com",
    databaseURL: "https://newflibiistore.firebaseio.com",
    projectId: "newflibiistore",
    storageBucket: "newflibiistore.appspot.com",
    messagingSenderId: "170714134458",
    appId: "1:170714134458:web:0a9aceecc3b11cb6adcf83",
    measurementId: "G-32GRLJVTKJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};