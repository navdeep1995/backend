import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link } from "react-router-dom";
import { Table, Container } from "semantic-ui-react";
import { getLoggedInUser } from "../Action";
import Edit from "@material-ui/icons/Edit";
import Modal from "../Component/Modal";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedInId = useSelector(
    (state) => state.Register.loginDetails.data.userId
  );
  const getUser = useSelector(
    (state) => state.Register.getLoginUserDetails.data
  );
  console.log("getUser", getUser);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    setUserId(loggedInId);
    console.log(userId);
    dispatch(getLoggedInUser(userId));
  }, [userId]);

  // const editProfile = ()=>{
  //   console.log("userId")
  // }
  return (
    <div style={{ borderRadius: 25, maxWidth: "36rem", boxShadow: "30px" }}>
      {getUser.map((item) => (
        <Container>
          <div>
            <Table style={{ width: "auto", margin: "auto", marginTop: "auto" }}>
              <Table.Row>
                <Table.HeaderCell>
                  Profile{" "}
                  <Link to={"/editProfile"}>
                    <Edit />
                  </Link>
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Username :</Table.Cell>
                <Table.Cell>
                  {console.log("item ", item)}
                  {item.username}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Email :</Table.Cell>
                <Table.Cell>{item.useremail}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Contact :</Table.Cell>
                <Table.Cell>{item.contact} </Table.Cell>
              </Table.Row>
            </Table>
          </div>
        </Container>
      ))}
    </div>
  );
};

export default Profile;
