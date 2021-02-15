import React from "react";
import { Route, Link } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import User from "../Pages/User";

import Layers from "@material-ui/icons/Layers";

import { Container } from "semantic-ui-react";

const routes = [
  {
    // routeName: "/login",
    // name: "login",
    // icon: <Layers />,
  },
];

export default function login() {
  const rootName = "/test";
  return (
    <div className="publicAreaContent">
      <Container fluid className="exchangeContainerStyle">
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path={"/user"} component={User} />
      </Container>
    </div>
  );
}
