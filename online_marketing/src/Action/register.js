import { apiPostCall } from "../service/axios";
export const SETUSER = "SETUSER";
export const SETUSERLOGIN = "SETUSERLOGIN";
export const SETLOGGEDINUSER = "SETLOGGEDINUSER";
export const SETEDITUSERPROFILE = "SETEDITUSERPROFILE";
export const setUser = (data) => ({
  type: SETUSER,
  payload: data,
});

export const setUserLogin = (data) => ({
  type: SETUSERLOGIN,
  payload: data,
});

export const setLoggedInUser = (data) => ({
  type: SETLOGGEDINUSER,
  payload: data,
});

export const setEditUserProfile = (data) => ({
  type: SETEDITUSERPROFILE,
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

export const getLoggedInUser = (userId) => {
  return (dispatch) => {
    apiPostCall(`http://localhost:8000/getUser`, { userId: userId }).then(
      (result) => {
        result && dispatch(setLoggedInUser(result));
      }
    );
  };
};

export const editUserProfile = (userId, username, useremail, contact) => {
  console.log("userId--", userId);
  return (dispatch) => {
    apiPostCall(`http://localhost:8000/editProfile`, {
      userId: userId,
      username: username,
      useremail: useremail,
      contact: contact,
    }).then((result) => {
      result && dispatch(setEditUserProfile(result));
    });
  };
};
