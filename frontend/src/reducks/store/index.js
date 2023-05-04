import { applyMiddleware } from "redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({})

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
