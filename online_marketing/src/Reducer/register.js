import { SETUSER, SETUSERLOGIN } from "../Action";
const initialState = {
  userDetails: [],
  loginDetails: [],
};
export default function user(state = initialState, action = {}) {
  //console.log("action  ====================", action.payload);
  switch (action.type) {
    case SETUSER:
      return { ...state, userDetails: action.payload };
    case SETUSERLOGIN:
      return { ...state, loginDetails: action.payload };
    default:
      return state;
  }
}
