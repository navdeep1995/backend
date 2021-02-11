import { SETITEMS, SETORDER, GETORDER, SETREMOVEORDER } from "../Action";
const initialState = {
  itemsList: [],
  setOrder: [],
  getUserOrderList: [],
  removeOrder: [],
};
export default function items(state = initialState, action = {}) {
  switch (action.type) {
    case SETITEMS:
      return { ...state, itemsList: action.payload };
    case SETORDER:
      return { ...state, setOrder: action.payload };
    case GETORDER:
      return { ...state, getUserOrderList: action.payload };
    case SETREMOVEORDER:
      return { ...state, removeOrder: action.payload };
    default:
      return state;
  }
}
