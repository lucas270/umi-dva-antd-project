import React from 'react';
// import { connect } from 'dva';
import DocumentTitle from 'react-document-title'; // 能动态修改页面title的
import { LocaleProvider, Layout, Spin } from 'antd'; // LocaleProvider全局设置中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from './header';
import Sider from './sider';
// import styles from './index.css';

const { Content } = Layout;

function BasicLayout(props) {
  const pageTitle = () => {
    return '知识-Umi Pro';
  };

  const { children } = props;
  return (
    <DocumentTitle title={pageTitle()}>
      <LocaleProvider locale={zhCN}>
        <Layout>
          <Header />
          <Layout style={{ marginTop: 64 }}>
            <Sider />
            <Content style={{ padding: 24, background: '#fff' }}>
              {/* 可以弄个全局loading */}
              {/* <Spin spinning={loading.global}> */}
              { children }
              {/* </Spin> */}
            </Content>
          </Layout>
        </Layout>
      </LocaleProvider>
    </DocumentTitle>
  );
}

// function mapStateToProps({ loading }) {
//   return {
//     ...loading,
//   };
// }

// export default connect(mapStateToProps)(BasicLayout);
export default BasicLayout;
