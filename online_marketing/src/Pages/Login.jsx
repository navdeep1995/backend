import React, { useEffect, useState } from "react";
import Menu from "../Component/Menu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Action";
import { Link } from "react-router-dom";
import Mainpage from "./Items";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const LoginPage = () => {
  const loginStatus = useSelector((state) => state.Register.loginDetails);

  //console.log("loginStatus", loginStatus);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [status, setStatus] = useState(0);

  const onLogin = () => {
    dispatch(userLogin(email, password));
  };
  return (
    <MDBContainer>
      <Menu />
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                value={email}
                type="email"
                onChange={(evt) => setEmail(evt.target.value)}
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={onLogin}>
                <Link
                  to={{
                    pathname: "/MainLogin",
                    // state: console.log("states,", `${status}`),
                  }}
                >
                  Login
                </Link>
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;
