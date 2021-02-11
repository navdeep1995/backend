import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  FormControl,
  InputLabel,
  FormLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { Button, Checkbox } from "semantic-ui-react";
import { Form, FormInput } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrderList, editUserProfile } from "../Action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalPage = (data) => {
  const logInId = useSelector(
    (state) => state.Register.loginDetails.data.userId
  );
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [contact, setContact] = useState("");

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChangeHandle = (event, type) => {
    console.log("onchnage  called");
  };

  const onSubmitHandle = () => {
    dispatch(editUserProfile(logInId, username, useremail, contact));
  };
  return (
    <div>
      <Modal
        isOpen={data.isOpenmodal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{data.data}</h2>

        <Form>
          <Form.Field style={{ textAlign: "center" }}>Edit Profile</Form.Field>

          <Form.Field>
            <label>Username</label>
            <input
              placeholder="Username"
              // value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Useremail</label>
            <input
              placeholder="Useremail"
              // value={useremail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Contact</label>
            <input
              placeholder="Contact number"
              // value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </Form.Field>
          {/* <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field> */}
          <Button onClick={onSubmitHandle} type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalPage;
