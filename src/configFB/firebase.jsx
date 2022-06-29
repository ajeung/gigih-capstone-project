import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_SH_APP_API_KEY,
  authDomain: process.env.REACT_APP_SH_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_SH_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SH_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SH_APP_MSSG_SENDER_ID,
  appId: process.env.REACT_APP_SH_APP_ID,
  measurementId: process.env.REACT_APP_SH_APP_MEASSUREMENT_ID,
};

// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = init.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
