import react, { useEffect } from "react";
import Menu from "../Component/Menu";
import Table from "../Component/Table";
import { useSelector, useDispatch } from "react-redux";
import { getItemList } from "../Action";
import Login from "./Login";

const fields = [
  {
    name: "ItemId ",
    key: "itemId",
  },

  {
    name: "ItemName ",
    key: "itemName",
  },

  {
    name: "Price ",
    key: "price",
  },
];
const MainPage = (props) => {
  var items = useSelector((state) => state.Order);
  var loginStatus = useSelector((state) => state.Register.loginDetails);
  console.log("items ", items);
  console.log(loginStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemList());
  }, []);

  const status = loginStatus.status;

  if (status === 1) {
    return (
      <div>
        <Menu></Menu>

        <Table fields={fields} data={items} />
      </div>
    );
  } else if (status === 0) {
    return (
      <div>
        <Login></Login>
      </div>
    );
  }
};
export default MainPage;
