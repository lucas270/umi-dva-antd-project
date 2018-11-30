import React from 'react';
import {
  Layout, Row, Col, Avatar, Popover,
} from 'antd';
import logo from '../assets/logo.svg';
import styles from './index.css';

const { Header } = Layout;

const HeaderView = () => {
  const content = <span>登录</span>;
  return (
    <Header className={styles.header}>
      <Row>
        <Col span={5}>
          <img alt="logo" src={logo} className={styles.img} />
          <span className={styles.logoTxt}>Umi Pro</span>
        </Col>
        <Col span={19}>
          <Popover placement="bottom" content={content} className={styles.avatarDiv}>
            <span> Hi,管理员</span>
            <Avatar size="large" icon="user" />
          </Popover>
        </Col>
      </Row>
    </Header>


  );
};

export default HeaderView;
