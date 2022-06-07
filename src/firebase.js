import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyBb7Dc_Ql_Q8lG98MTVU3ylF4YcC-ZviNk",
  
    authDomain: "clone-9fa80.firebaseapp.com",
  
    projectId: "clone-9fa80",
  
    storageBucket: "clone-9fa80.appspot.com",
  
    messagingSenderId: "629907794621",
  
    appId: "1:629907794621:web:16edf0eda74f25ca0f25d4"
 

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };