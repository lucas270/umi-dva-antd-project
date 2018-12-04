import React from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import styles from './index.css';

export default function () {
  const testClick = () => {
    router.push('/testPage');
  };
  const btnClick = () => {
    router.push('/dataTransfer');
  };
  return (
    <React.Fragment>
      <div className={styles.welcome} />
      <div className={styles.btns}>
        <Button type="primary" onClick={testClick} style={{ marginRight: 10 }}>
            model传递数据页
        </Button>
        <Button type="primary" onClick={btnClick}>学习数据流</Button>
      </div>
    </React.Fragment>
  );
}
