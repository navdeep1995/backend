const db = require("../db");

exports.itemList = async (req, res) => {
  try {
    let sql = `SELECT  *  from ItemsTable`;
    db.query(sql, (err, result) => {
      if (result) {
        res.json({
          status: 1,
          data: result,
          message: "Items fetched  successfully",
        });
      } else {
        res.json({ status: 1, message: "Items are not found" });
      }
    });
  } catch (error) {
    return res.json({ status: 0, message: "Something went wrong " });
  }
};
