import { configureStore } from '@reduxjs/toolkit'
import { actionTypes } from "react-redux-firebase";
import rootReducer from '../reducer/reducers';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR]
        }
    }),
})

// import { configureStore } from '@reduxjs/toolkit'
// import tokenReducer from '../reducer/reducers'

// export default configureStore ({
//     reducer: {
//         token: tokenReducer
//     }
// })