import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

// combineReducers est une fonction qui permet de combiner plusieurs réducteurs en un seul réducteur principal.
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

// configureStore est une fonction qui simplifie la création du store.
const store = configureStore({
    // reducer définit le réducteur principal qui sera utilisé pour gérer l'état de l'application.
    reducer: rootReducer,
    devTools: true
});

export default store;
