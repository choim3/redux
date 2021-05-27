import counterReducer from "./counter";
import darkReducer from "./rating";
import cartReducer from "./cart";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer,
  dark: darkReducer,
});
export default allReducers;
