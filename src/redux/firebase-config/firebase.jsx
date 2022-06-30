import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import { rootReducer } from '../reducer/reducers';
import { createFirestoreInstance } from 'redux-firestore';
import { configureStore } from '@reduxjs/toolkit';

const firebaseConfig = {
  apiKey: process.env.SH_APP_API_KEY,
  authDomain: process.env.SH_APP_AUTH_DOMAIN,
  projectId: process.env.SH_APP_PROJECT_ID,
  storageBucket: process.env.SH_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.SH_APP_MSSG_SENDER_ID,
  appId: process.env.SH_APP_ID,
  measurementId: process.env.SH_APP_MEASSUREMENT_ID
}

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const init = firebase.initializeApp(firebaseConfig);
const fb = firebase.firestore();

const initialState = {};
const store = configureStore(rootReducer, initialState);

export const firebaseConfiguration = {
  firebaseConfig,
  rrfConfig,
  initialState,
  init,
  fb,
  store,
  rrfProps: {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  }
}
