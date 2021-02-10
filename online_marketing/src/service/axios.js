import axios from "axios";

//const url = "http://localhost:8000/";

export const apiGetCall = (url, params = {}) => {
  return new Promise((resolve) => {
    axios
      .get(url, params)
      .then((res) => {
        //console.log("res == ", res.data);
        resolve(res.data);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

export const apiPostCall = (url, data, params = {}) => {
  //console.log(url, data, params);
  return new Promise((resolve) => {
    axios
      .post(url, data)
      .then((res) => {
        console.log("response==", res);
        resolve(res.data);
      })
      .catch((error) => {
        //console.log("error ", error);
        resolve(error);
      });
  });
};

export const isLoggedIn = () => {
  let token = localStorage.getItem("jwtToken");

  return token;
};

export const Logout = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("persist:root");
};
