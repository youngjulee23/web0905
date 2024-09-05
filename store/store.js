import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import { userSlice } from "../features/users/userSlice";

const rootReducer = combineReducers({
    // counter: counterSlice,
    user:userSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
