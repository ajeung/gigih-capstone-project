import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
// import { rootReducer } from '../reducer/reducers';
// import { createFirestoreInstance } from 'redux-firestore';
// import { configureStore } from '@reduxjs/toolkit';

const firebaseConfig = {
  apiKey: "AIzaSyAyl7zNqJ4MY-hcwel7jYT97rq6S020GhU",
  authDomain: "soluhouse2022.firebaseapp.com",
  projectId: "soluhouse2022",
  storageBucket: "soluhouse2022.appspot.com",
  messagingSenderId: "1022303014861",
  appId: "1:1022303014861:web:b8e29c8904af7ddad5be84",
  measurementId: "G-HT9EJQTC5B"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
// };

// const init = firebase.initializeApp(firebaseConfig);
// const fb = firebase.firestore();

// const initialState = {};
// const store = configureStore(rootReducer, initialState);

// export const firebaseConfiguration = {
//   firebaseConfig,
//   rrfConfig,
//   initialState,
//   init,
//   fb,
//   store,
//   rrfProps: {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch,
//     createFirestoreInstance,
//   }
// }
