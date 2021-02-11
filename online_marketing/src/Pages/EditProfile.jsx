import react from "react";
import { Container, FormInput } from "semantic-ui-react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Modal from "../Component/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));
const EditProfile = () => {
  return (
    <div>
      <Modal show isOpenmodal={true} data={""}></Modal>
    </div>
  );
};
export default EditProfile;
