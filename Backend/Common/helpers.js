//generates random id;
const uuid = require("uuid-random");

exports.uuid = async () => {
  let id = await uuid();
  return id;
};

exports.dateMethod = async () => {
  const d = Date();
  const date = new Date(d);
  const getDate = date.getDate();
  const getMonth = date.getMonth() + 1;
  const getYear = date.getFullYear();
  const newDate = getYear + "-" + getMonth + "-" + getDate;
  console.log("newDate ", newDate);
  return newDate;
};
