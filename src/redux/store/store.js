import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { weatherReducer } from "../reducers/weatherReducer";

const rootReducer = combineReducers({
	city: weatherReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
