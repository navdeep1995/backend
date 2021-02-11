import { apiGetCall, apiPostCall } from "../service/axios";

export const SETITEMS = "SETITEMS";
export const SETORDER = "SETORDER";
export const GETORDER = "GETORDER";
export const SETREMOVEORDER = "SETREMOVEORDER";
export const setOrder = (data) => ({
  type: SETORDER,
  payload: data,
});
export const setItems = (data) => ({
  type: SETITEMS,
  payload: data,
});
export const getOrder = (data) => ({
  type: GETORDER,
  payload: data,
});

export const setRemoveOrder = (data) => ({
  type: SETREMOVEORDER,
  payload: data,
});
export const getItemList = () => {
  return (dispatch) => {
    apiGetCall(`http://localhost:8000/itemList`).then((result) => {
      //console.log("item result--", result?.data);
      result && dispatch(setItems(result?.data));
    });
  };
};

export const createOrder = (itemId, userId) => {
  return (dispatch) => {
    apiPostCall(`http://localhost:8000/addOrder`, {
      itemid: itemId,
      userId: userId,
    }).then((result) => {
      //console.log(result?.data);
      result && dispatch(setOrder(result?.data));
    });
  };
};

export const getUserOrderList = (userId) => {
  console.log("userId ", userId);

  return (dispatch) => {
    apiPostCall(`http://localhost:8000/getUserOrderList`, {
      userId: userId,
    }).then((result) => {
      //console.log(result?.data);
      result && dispatch(getOrder(result?.data));
    });
  };
};

export const deleteOrder = (orderId, userId) => {
  console.log("orderId ", orderId);
  return (dispatch) => {
    apiPostCall(`http://localhost:8000/removeOrder`, {
      orderId: orderId,
      userId: userId,
    }).then((result) => {
      console.log("result ", result?.data);
      result && dispatch(setRemoveOrder(result?.data));
    });
  };
};
