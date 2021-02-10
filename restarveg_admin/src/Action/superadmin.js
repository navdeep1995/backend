import { apiGetCall } from "../service/axios";
export const SETUSER = "SETUSER";

export const setUser = (data) => ({
  type: SETUSER,
  payload: data,
});

export const getUsers = () => {
  return (dispatch) => {
    apiGetCall(`http://localhost:8000/getAllUsers`).then((result) => {
      result && dispatch(setUser(result?.data));
    });
  };
};
