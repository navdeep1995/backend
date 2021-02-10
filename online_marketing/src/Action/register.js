import { apiPostCall } from "../service/axios";
export const SETUSER = "SETUSER";
export const SETUSERLOGIN = "SETUSERLOGIN";

export const setUser = (data) => ({
  type: SETUSER,
  payload: data,
});

export const setUserLogin = (data) => ({
  type: SETUSERLOGIN,
  payload: data,
});
export const createUser = (uname, uemail, upass, usernumber) => {
  const details = {
    username: uname,
    useremail: uemail,
    userpassword: upass,
    usernumber: usernumber,
  };
  //console.log("details", details);
  return (dispatch) => {
    apiPostCall(`http://localhost:8000/createUser`, details).then((result) => {
      //console.log("result--", result?.data);
      result && dispatch(setUser(result?.data));
    });
  };
};

export const userLogin = (email, password) => {
  const details = {
    useremail: email,
    userpassword: password,
  };
  //console.log("details", details);
  return (dispatch) => {
    apiPostCall(`http://localhost:8000/userLogin`, details).then((result) => {
      console.log("result--", result?.data.jwtToken);
      result && dispatch(setUserLogin(result));
      localStorage.setItem("jwtToken", result?.data.jwtToken);
    });
  };
};
