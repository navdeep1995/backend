import axios from "axios";

//const url = "http://localhost:8000/";

export const apiGetCall = (url, params = {}) => {
  return new Promise((resolve) => {
    console.log("url ", url);
    axios
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

// export const apiGetCall = (url, data, params = {}) => {
//   console.log(url, data, params);
//   return new Promise((resolve) => {
//     axios
//       .post(url, data)
//       .then((res) => {
//         console.log("response==", res.data);
//         resolve(res.data);
//       })
//       .catch((error) => {
//         resolve(error);
//       });
//   });
// };
