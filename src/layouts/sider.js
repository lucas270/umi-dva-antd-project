import React, { Component } from 'react';
import { Link } from 'dva/router'; // 跳转路由
import { Layout, Menu, Icon } from 'antd';

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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['testPage']}>
              <Menu.Item key="/">
                <Link to="/">
                  <Icon type="eye" />
                  <span>首页</span>
                </Link>
              </Menu.Item>

              <Menu.SubMenu
                key="sub1"
                title={(
                  <span>
                    <Icon type="smile" />
                    <span>数据传递</span>
                  </span>)}
              >
                <Menu.Item key="testPage">
                  <Link to="testPage">
                    <Icon type="video-camera" />
                    <span>models传递数据</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="dataTransfer">
                  <Link to="dataTransfer">
                    <Icon type="user" />
                    <span>学习数据流</span>
                  </Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>
        );
      }
}
export default SiderMenu;
