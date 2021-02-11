import {
  SETUSER,
  SETUSERLOGIN,
  SETLOGGEDINUSER,
  setEditUserProfile,
} from "../Action";
const initialState = {
  userDetails: [],
  loginDetails: [],
  getLoginUserDetails: [],
  editUserProfile: [],
};
export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case SETUSER:
      return { ...state, userDetails: action.payload };
    case SETUSERLOGIN:
      return { ...state, loginDetails: action.payload };
    case SETLOGGEDINUSER:
      return { ...state, getLoginUserDetails: action.payload };
    case setEditUserProfile:
      return { ...state, editUserProfile: action.payload };
    default:
      return state;
  }
}
