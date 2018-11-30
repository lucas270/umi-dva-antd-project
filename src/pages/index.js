import React from 'react';
import { Layout, Button } from 'antd';
import DocumentTitle from 'react-document-title';
import router from 'umi/router';
import styles from './index.css';

export default function () {
  const testClick = () => {
    router.push('/testPage');
  };
  const btnClick = () => {
    router.push('/testPage3');
  };
  return (
  // <React.Fragment>
    <DocumentTitle title="知识·类型">
      <div>
        <div className={styles.welcome} />
        <Button type="primary" onClick={testClick} style={{ marginRight: 10 }}>
            model传递数据页
        </Button>
        <Button type="primary" onClick={btnClick}>
            学习数据流
        </Button>
      </div>
    </DocumentTitle>
  // </React.Fragment>
  );
}
