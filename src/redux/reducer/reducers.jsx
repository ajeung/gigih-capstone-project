import { createSlice } from '@reduxjs/toolkit'

// const [userName, setUserName] = userState(null)
// const [userEmail, setUserEmail] = userState(null)

const initialState = {
    userName: null,
    userEmail: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLogoutState: state => {
            state.userName = null
            state.userEmail = null
        }
    }
})

export const {setActiveUser, setUserLogoutState} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export default userSlice.reducer

// import {combineReducers} from "@reduxjs/toolkit";
// import {firebaseReducer} from "react-redux-firebase";
// import {firestoreReducer} from "redux-firestore";

// export const rootReducer = combineReducers({
//     firebase: firebaseReducer,
//     firestore: firestoreReducer
// });

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
