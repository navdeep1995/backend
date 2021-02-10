import { createUser } from "../Action";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Menu from "../Component/Menu.jsx";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [status, setstatus] = useState(false);
  const [contact, setContact] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(createUser(username, useremail, userpassword));
  });
  const formHandler = () => {
    setstatus(true);
    dispatch(createUser(username, useremail, userpassword, contact));
  };
  return (
    <MDBContainer>
      <Menu />

      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Register</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                onChange={(evt) => setusername(evt.target.value)}
                value={username}
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                onChange={(evt) => setuseremail(evt.target.value)}
                value={useremail}
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                // onChange={(evt) => setuseremail(evt.target.value)}
                // value={userpassword}
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Contact"
                icon="phone"
                group
                // value={contact}
                onChange={(evt) => setContact(evt.target.value)}
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                onChange={(evt) => setuserpassword(evt.target.value)}
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary" onClick={formHandler}>
                <Link to={{ pathname: "/MainLogin", state: { status } }}>
                  Register
                </Link>
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;
