import { SETUSER } from "../Action";
const initialState = {
  userDetails: [],
};
export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case SETUSER:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
}
