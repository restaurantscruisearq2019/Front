import React from "react";
import MenuItem from "./MenuItem";

import {
  Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment,
  Menu,
  Icon,
  Sidebar
} from "semantic-ui-react";

class SideBar extends React.Component {
  render() {
    return (
      <Sidebar.Pushable as={Segment} attached="bottom">
        <Sidebar
          as={Menu}
          animation="uncover"
          visible={true}
          icon="labeled"
          vertical
          inline
          inverted>
          <Menu.Item>
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item>
            <Icon name="block layout" />
            Topics
          </Menu.Item>
          <Menu.Item>
            <Icon name="smile" />
            Friends
          </Menu.Item>
          <Menu.Item>
            <Icon name="calendar" />
            History
          </Menu.Item>
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}

export default SideBar;
