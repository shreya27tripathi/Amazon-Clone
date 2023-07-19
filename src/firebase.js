import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCU9_ej2WDk6_cLT_3IfXj63wSsPqA4Fck",
    authDomain: "clone-586d2.firebaseapp.com",
    projectId: "clone-586d2",
    storageBucket: "clone-586d2.appspot.com",
    messagingSenderId: "700819036575",
    appId: "1:700819036575:web:84fa7cfa8a29c8d3a005aa",
    measurementId: "G-BC51LY0D45"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebase.auth();

// export { db, auth };
export {auth };