import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {

    apiKey: "AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU",
  
    authDomain: "soluhouse2022.firebaseapp.com",
  
    projectId: "soluhouse2022",
  
    storageBucket: "soluhouse2022.appspot.com",
  
    messagingSenderId: "1022303014861",
  
    appId: "1:1022303014861:web:b8e29c8904af7ddad5be84",
  
    measurementId: "G-HT9EJQTC5B"
  
  };

  // Initialize Firebase
  
  const init = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = init.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();