import React from "react";
import Menu from "../Component/Menu";
import Appbar from "../Component/Appbar";

import { Container } from "semantic-ui-react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const Dashboard = () => {
  return (
    <Container>
      <Appbar />
      <Menu />
    </Container>
  );
};

export default Dashboard;
