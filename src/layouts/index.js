import React from 'react';
import { Layout, Menu, Icon } from 'antd';
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
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
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
