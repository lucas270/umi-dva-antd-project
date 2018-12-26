import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuList from './menu';

const { Sider } = Layout;

class SiderMenu extends Component {
    state = {
      collapsed: false,
    };

      onCollapse = (collapsed) => {
        this.setState({ collapsed });
      }

      render() {
        return (
          <Sider
            breakpoint="md"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width={230}
          >
            <MenuList />
          </Sider>
        );
      }
}
export default SiderMenu;
