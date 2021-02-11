const jwt = require("jsonwebtoken");
var issue = async (payload) => {
  console.log("jwt function called", payload);
  return jwt.sign(payload, "iAmSecretKey");
};
var verify = async (token, cb) => {
  return jwt.verify(token, "iAmSecretKey", {}, cb);
};
module.exports = {
  issue: issue,
  verify: verify,
};
