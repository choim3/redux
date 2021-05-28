import counterReducer from "./counter";
// import darkReducer from "./rating";
import cartReducer from "./cart";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});
export default allReducers;
