import React from 'react';
import { Link } from 'dva/router';
import {
  Layout, Menu, Icon,
} from 'antd';
import Header from './header';
import styles from './index.css';

const { Sider, Content } = Layout;

function BasicLayout(props) {
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Layout style={{ marginTop: 64 }}>
        <Sider
          trigger={null}
          collapsible
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.SubMenu
              key="sub1"
              title={(
                <span>
                  <Icon type="smile" />
                  <span>数据传递</span>
                </span>)}
            >
              <Menu.Item key="1">
                <Link to="testPage">
                  <Icon type="video-camera" />
                  <span>models传递数据</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="dataTransfer">
                  <Icon type="user" />
                  <span>学习数据流</span>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3">
              <Link to="/">
                <Icon type="upload" />
                <span>首页</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
        }}
        >
          { children }
        </Content>
      </Layout>
    </Layout>
    // <div className={styles.normal}>
    //   <h1 className={styles.title}>Yay! Welcome to umi!</h1>
    //   { children }
    // </div>

  );
}

export default BasicLayout;
