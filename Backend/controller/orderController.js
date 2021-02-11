const db = require("../db");
const helper = require("../Common/helpers");

exports.addOrder = async (req, res) => {
  try {
    let itemId = req.body.itemid;
    let userId = req.body.userId; // refer from user table
    let orderId = req.body.orderId; // will be auto generated
    let price = req.body.price;
    let getItemslist;
    for (let i = 0; i < itemId.length; i++) {
      getItemslist = `Select * from ItemsTable where itemId =('${itemId[i]}')`;
      db.query(
        getItemslist,

        async (err, result) => {
          if (err) {
            console.log(err);
          } else {
            let g_uid = await helper.uuid();
            // let g_uid = await guid.uuid();
            let updatedDate = await helper.dateMethod();
            console.log("date  is", updatedDate);
            let sql = `INSERT INTO OrderTable  (userId ,orderId ,orderName , quantity , price,created_at) values('${userId}',
           '${g_uid}', '${result[0].itemName}' , 2,'${result[0].price}',${updatedDate})`;
            console.log("sql ", sql);
            db.query(sql, async (err, data) => {
              if (err) console.log("errror", err);
            });
          }
        }
      );
    }

    return res.json({
      status: 1,
      message: "Order created successfully",
    });
  } catch (error) {
    console.log(error, "error");
    return res.json({ status: 0, message: "Something went wrong" });
  }
};

// exports.addOrder = async (req, res) => {
//   try {
//     console.log(req.body);
//     let itemId = req.body.itemid;
//     let userId = req.body.userId; // refer from user table
//     let orderId = req.body.orderId; // will be auto generated
//     let price = req.body.price;

//     let getItemslist;
//     for (let i = 0; i < itemId.length; i++) {
//       getItemslist = `Select * from ItemsTable where itemId =('${itemId[i]}')`;
//       db.query(getItemslist, (err, result) => {
//         if (err) {
//           console.log(err);
//         } else {
//           let sql = `INSERT INTO OrderTable  (userId ,orderId ,orderName , quantity , price) values('${userId}',
//           2, '${result[0].itemName}' , 2,'${result[0].price}')`;
//           db.query(sql, (err, data) => {
//             if (err) throw err;
//             let response = await res.json({
//               status: 1,
//               data: data,
//               message: "Order created successfully",
//             });

//             return response
//           });
//         }
//       });
//     }
//   } catch (error) {
//     return res.json({ status: 0, message: "Something went wrong" });
//   }
// };

exports.removeOrder = async (req, res) => {
  try {
    console.log("remove order api called");
    // console.log(req.body);
    let orderId = req.body.orderId;
    let userId = req.body.userId;

    let sql = `DELETE from OrderTable where orderId ='${orderId}'`;

    db.query(sql, (req, result) => {
      if (result) {
        console.log("result", result);
        return res.json({
          status: 1,
          data: result,
          message: "Order removed  Successfully.",
        });
      } else {
        res.json({
          status: 0,
          message: "Unable to remove order",
        });
      }
    });
  } catch (error) {
    return res.json({ status: 0, message: "Something  went wrong" });
  }
};

exports.getUserOrderList = async (req, res) => {
  try {
    let userId = req.body.userId;
    console.log("userId--->>- ", userId);

    let sql = `Select *  from OrderTable  where userId = '${userId}'`;
    console.log("SQL==>", sql);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log("data  ", result);
      return res.json({
        status: 1,
        data: result,
        message: "Order List fetched  successfully.",
      });
    });
  } catch (error) {
    res.json({ status: 0, message: "Something went wrong" });
  }
};
