import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// reducer
import { userReducer } from "../reducers/user";
import { flagReducer } from "../reducers/common";

export const rootReducer = combineReducers({
  user: userReducer,
  pageFlag: flagReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
