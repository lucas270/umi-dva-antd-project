import React from 'react';
import { Link } from 'dva/router'; // 跳转路由
import { Menu, Icon } from 'antd';

const MenuList = () => {
  return (
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
      <Menu.SubMenu
        key="sub2"
        title={(
          <span>
            <Icon type="dashboard" />
            <span>图表</span>
          </span>)}
      >
        <Menu.Item key="baiduMap">
          <Link to="baiduMap">
            <Icon type="video-camera" />
            <span>百度地图</span>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="ECharts">
          <Link to="ECharts">
            <Icon type="user" />
            <span>ECharts</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="antV">
          <Link to="antV">
            <Icon type="user" />
            <span>antV</span>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="recharts">
          <Link to="recharts">
            <Icon type="user" />
            <span>recharts</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="BizCharts">
          <Link to="BizCharts">
            <Icon type="user" />
            <span>BizCharts</span>
          </Link>
        </Menu.Item> */}
      </Menu.SubMenu>
    </Menu>

  );
};

export default MenuList;
