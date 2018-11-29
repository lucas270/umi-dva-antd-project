import router from 'umi/router';
import {Button} from "antd";
import styles from './index.css';

export default function() {
  const testClick=()=>{
    router.push('/testPage')
  }
  const btnClick=()=>{
      router.push('/testPage3')
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Button type="primary" onClick={testClick} style={{marginRight:10}}>
            model传递数据页
        </Button>
        <Button type="primary" onClick={btnClick}>
            学习数据流
        </Button>
    </div>
  );
}
