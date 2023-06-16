import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// reducer
import { reducer as reduxFormReducer } from 'redux-form';
import { userReducer } from "../reducers/user";
import { flagReducer } from "../reducers/common";
import { cartReducer } from "../reducers/cart";
import { cartItemReducer } from "../reducers/cart_items";

export const rootReducer = combineReducers({
  form: reduxFormReducer,
  user: userReducer,
  pageFlag: flagReducer,
  cart: cartReducer,
  cart_items: cartItemReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
