import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: process.env.SH_APP_API_KEY,
    authDomain: process.env.SH_APP_AUTH_DOMAIN,
    projectId: process.env.SH_APP_PROJECT_ID,
    storageBucket: process.env.SH_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.SH_APP_MSSG_SENDER_ID,
    appId: process.env.SH_APP_ID,
    measurementId: process.env.SH_APP_MEASSUREMENT_ID
  };

  // Initialize Firebase
  const init = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = init.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();