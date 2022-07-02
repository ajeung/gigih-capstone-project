<<<<<<< HEAD
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU",
  authDomain: "soluhouse2022.firebaseapp.com",
  projectId: "soluhouse2022",
  storageBucket: "soluhouse2022.asia-southeast1.appspot.com",
  messagingSenderId: "1022303014861",
  appId: "1:1022303014861:web:b8e29c8904af7ddad5be84",
  measurementId: "G-HT9EJQTC5B",
  databaseURL:
    "https://soluhouse2022-default-rtdb.asia-southeast1.firebasedatabase.app",
};
=======
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU',
    authDomain: 'soluhouse2022.firebaseapp.com',
    projectId: 'soluhouse2022',
    storageBucket: 'soluhouse2022.appspot.com',
    messagingSenderId: '1022303014861',
    appId: '1:1022303014861:web:b8e29c8904af7ddad5be84',
    measurementId: 'G-HT9EJQTC5B',
}
>>>>>>> main

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

<<<<<<< HEAD
export { auth, provider, firebaseApp };
=======
export { auth, provider }
>>>>>>> main
