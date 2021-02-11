const db = require("../db");
const jwt = require("../Common/jwt");
const helper = require("../Common/helpers");

// create user api
exports.createUser = async (req, res) => {
  try {
    console.log("req.body", req.file);

    let username = req.body.username;
    let useremail = req.body.useremail;
    let password = req.body.userpassword;
    let contact = req.body.usernumber;
    let userimage = req.body.userimage;

    let g_uid = await helper.uuid();
    console.log("date", date);
    if (username != "" && useremail != "" && contact != "") {
      let sql = `INSERT INTO UserTable  (id,username,useremail,contact ,type,password, userimage) values('${g_uid}','${username}',
       '${useremail}', '${contact}' , 'user','${password}', '${userimage}')`;
      console.log("sql ", sql);
      db.query(sql, function (err, result) {
        if (err) throw err;
        return res.json({
          status: 1,
          message: "Data  saved successfully",
        });
      });
    } else {
      return res.json({ status: 0, message: "Parameter(s) Missing" });
    }
  } catch (error) {
    //console.log("erroir ", error);
    return res.json({ status: 0, message: "Something went wrong" });
  }
};

exports.userLogin = async (req, res) => {
  try {
    let useremail = req.body.useremail;
    let password = req.body.userpassword;
    const obj = {
      useremail: req.body.useremail,
      password: req.body.userpassword,
    };
    let token = await jwt.issue(obj);

    if (useremail != "" && password != "") {
      let sql = `SELECT  *  from UserTable where  useremail = '${useremail}' `;
      await db.query(sql, function (err, result) {
        if (err) {
          return res.json({ status: 0, message: "Invalid credentials" });
        } else {
          //console.log("data ", result);

          if (result.length > 0) {
            if (password == result[0].password) {
              return res.json({
                status: 1,
                data: { userId: result[0].id, jwtToken: token },
                message: "password matched",
              });
            } else {
              console.log(
                "pw not matched",
                password,
                "===",
                result[0].password
              );
              return res.json({ status: 0, message: "password not matched" });
            }
          } else {
            console.log("invalida");

            return res.json({ status: 0, message: "Invalid credentials" });
          }
        }
      });
    } else {
      res.json({ status: 0, message: "Parameter(s) Missing" });
    }
  } catch (error) {
    console.log("error", error);
    return res.json({ status: 0, message: "Something went wrong" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let sql = `SELECT  *  from UserTable `;
    db.query(sql, function (err, result) {
      if (err) throw err;
      return res.json({
        status: 1,
        data: result,
        message: "Data  fetched successfully",
      });
    });
  } catch (error) {
    res.json({ status: 0, message: "  Something  went wrong" });
  }
};

exports.editProfile = async (req, res) => {
  try {
    let userId = req.body.userId;
    let username = req.body.username;
    let useremail = req.body.useremail;
    let contact = req.body.contact;
    console.log(req.body);

    let sql = `update UserTable set username = '${username}', useremail ='${useremail}', 
    contact ='${contact}' where id = '${userId}'`;
    console.log(sql);
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          status: 1,
          message: "Profile updated Successfully",
          // data: result,
        });
      }
    });
  } catch (error) {
    res.json({ status: 0, message: " Something went wrong" });
  }
};

exports.getLoggedInUserProfile = (req, res) => {
  try {
    const userId = req.body.userId;
    const sql = `select  username , useremail ,  contact , password from UserTable  where id ='${userId}'`;
    db.query(sql, (err, result) => {
      if (err) {
        return res.json({ status: 0, message: "Error" });
      } else {
        return res.json({
          status: 1,
          message: "User details  detched successfully",
          data: result,
        });
      }
    });
  } catch (err) {
    return res.json({ status: 0, message: "Something  went  wrong " });
  }
};
