import {combineReducers} from "@reduxjs/toolkit";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// import {createSlice} from '@reduxjs/toolkit'

// export const tokenSlice = createSlice({
//     name: 'code',
//     initialState: {
//         accCodeBearer: '',
//         value: window.localStorage.getItem('code')
//     },
//     reducers: {
//         getCode: (state) => {
//             const urlSearchParams = new URLSearchParams(window.location.hash.substring(1))
//             const authCode = urlSearchParams.get('authorization_code')
//             const accCodeBearer = `Bearer ${authCode}`
//             state.accCodeBearer = accCodeBearer;
//         }
//     }
// })

// export const { getCode } = tokenSlice.actions
// export default tokenSlice.reducer
