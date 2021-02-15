import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import Sidebar from "./Sidebar";

import { Logout } from "../service/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [dropdown, setdropdown] = useState(false);

  const menuHandler = () => {
    setdropdown(true);
    dropdown ? setdropdown(false) : setdropdown(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon onClick={menuHandler} />

          <Typography variant="h6" className={classes.title}>
            User Panel
          </Typography>
          <Button color="inherit" onClick={() => Logout()}>
            <Link to={"/logout"}>Logout</Link>
          </Button>
          <Button color="inherit">
            <Link to={"/loginPage"}>Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
      {dropdown && (
        <List>
          <ListItem>
            <Link to="/profile">Profile</Link>
          </ListItem>
          <ListItem>
            <Link to="/allUser">AllUser</Link>
          </ListItem>
        </List>
      )}
    </div>
  );
}
