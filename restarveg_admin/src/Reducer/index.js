import { combineReducers, compose } from "redux";
import { reducer as formReducer } from "redux-form";
// import {re} from "../Action";
import Register from "./dashboard";

const appReducer = combineReducers({ Register, form: formReducer });
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
