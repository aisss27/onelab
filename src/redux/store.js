import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/counterSlice";
import listSlice from "./slices/listSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        list: listSlice,
    },
})