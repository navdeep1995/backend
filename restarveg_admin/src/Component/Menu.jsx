import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: "User" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary vertical>
        <Link to={"/user"}>
          <Menu.Item
            name="User"
            active={activeItem === "User"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Menu.Item
          name="Items"
          active={activeItem === "Items"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Admin"
          active={activeItem === "Admin"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
