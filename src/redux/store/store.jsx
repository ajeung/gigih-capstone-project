import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reducer/reducers'

export default configureStore({
    reducer: {
        user: userReducer
    }
})
