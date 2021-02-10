import React from "react";
import { Route, Link } from "react-router-dom";
import Register from "../Pages/Register";
import Mainpage from "../Pages/Items";
import LoginPage from "../Pages/Login";
import EditProfile from "../Pages/EditProfile";

import Layers from "@material-ui/icons/Layers";
import { Container } from "semantic-ui-react";
import { isLoggedIn } from "../service/axios";
const routes = [
  {
    routeName: "/login",
    name: "login",
    icon: <Layers />,
  },
];

export default function login() {
  const rootName = "/test";

  const isLoginIn = isLoggedIn();

  return (
    <div className="publicAreaContent">
      <Container fluid className="exchangeContainerStyle">
        {isLoginIn ? (
          <div>
            <Route exact path={"/"} component={Register} />
            <Route path={"/loginPage"} component={LoginPage} />
            <Route path={"/Mainpage"} component={Mainpage} />
            <Route path={"/MainLogin"} component={Mainpage} />
            <Route exact path={"/logout"} component={LoginPage} />
            <Route exact path={"/profile"} component={EditProfile} />
          </div>
        ) : (
          <Route path={"/"} component={LoginPage} />
        )}
      </Container>
    </div>
  );
}
