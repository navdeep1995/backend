import React from "react";
import Menu from "../Component/Menu.jsx";
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Table from "../Component/Table";
import { getUsers } from "../Action";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const fields = [
  {
    name: "Username ",
    key: "username ",
  },
  {
    name: "UserEmail ",
    key: "email ",
  },
  {
    name: "Contact  ",
    key: "contact ",
  },
];
const User = () => {
  const tabledata = useSelector((state) => state.Register.userDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [""]);
  return (
    <Container>
      <Table fields={fields} data={tabledata} />
    </Container>
  );
};

export default User;
