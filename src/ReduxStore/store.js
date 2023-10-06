import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducerAccount from "./reducerAccount";
import reducerCustomer from "./reducerCustomer";

const middleware = [thunk];

const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
