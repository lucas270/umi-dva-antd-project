import React from 'react'; // 这行必须写，不然报错，可能是eslint搞事情。
import { connect } from 'dva'; // connect用于组件连接models层数据
import classNames from 'classNames'; // 需要多个class时或要逻辑计算后决定是否要class，可以用这个插件
import {
  Form, Button, Row, Col,
} from 'antd';
import styles from './index.less';

/** classNames的用法
 * 1.直接跟着类名或放在数组中
 * classNames(class1,class2,...,class6)
 *  classNames([class1],[class2],...,[class6])
 * classNames([class1,class2,...,class6])
 * 2.后面跟布尔值，为真时引用该类名，类名用[]包起来
 * classNames({[class1]:4>2,[class2]:6>1,...,[class6]:3>7})
 * 可以混合放
 * classNames(class1,[class2],{[class3]:5>2},[class4,class6])
 */

const FormItem = Form.Item;
// 只要state或props变化，就会重新渲染

// 控制formItem里2个的比例
const formItemLayout = {
  labelCol: {
    sm: { span: 6 }, // 小屏占6份
    md: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 18 }, // 小屏占18份
    md: { span: 16 },
  },
};

const TestPage = (props) => {
  // 解构赋值，把下面mapStateToProps方法return的数据，取出来。 经过connect的，dispatch自动变成组件的props
  const { num, shoppingStore, dispatch } = props;

  const addClick = () => {
    // dispatch方法接收一个对象，整个对象称作action
    // type必须要有,固定写法“命名空间/方法名”,可以理解为触发该命名空间中某个方法，给方法传递参数可以在后面写key:value形式，没有可以不写
    dispatch({
      type: 'testPage/addNum', // testPage是models层的其中一个命名空间名字，addNum是该model中的方法。
    });
  };

  const showShopping = () => {
    dispatch({
      type: 'testPage/shoppingWZ',
      who: '购物网站：', // 给shoppingWZ方法传递了who这个参数
      // 参数2:值 //多个参数可以写多个
    });
  };

  return (
    <Row>
      <Col ms={24} md={8} lg={8}>
        <FormItem {...formItemLayout} label="没经过后台的">
          <span>{num}</span>
        </FormItem>
      </Col>
      <Col ms={24} md={8} lg={8}>
        <FormItem {...formItemLayout} label="后台返回的">
          <span>{shoppingStore}</span>
        </FormItem>
      </Col>
      <Col ms={24} md={8} lg={8}>

        <Button type="primary" onClick={addClick} className={classNames(styles.btn, { [styles.btnColor]: 4 > 3 })}>没经过后台的+1</Button>

        <span className={styles['override-ant-btn-primary']}>
          <Button type="primary" onClick={showShopping}>查看后台返回的数据</Button>
        </span>

      </Col>
    </Row>);
};

function mapStateToProps(state) {
  // 这个state是所有model层的state，这里只用到其中一个，所以state.testPage把命名空间为testPage这个model层的state数据取出来
  // es6语法解构赋值
  const { num, shoppingStore } = state.testPage;
  // 这里return出去的数据，会变成此组件的props，在组件可以通过props.num取到。props变化了，会重新触发render方法，界面也就更新了。
  return {
    num,
    // num:num, //同上，es6语法，key/value相同名时可以简写。
    shoppingStore,
  };
}

// function mapDispatchToProps (dispatch) {
// 代码
// }

// connect方法用来连接models层的state数据，参数常用的有2个，是第一个mapStateToProps，第二个mapDispatchToProps
// mapStateToProps按字面意思：把models层state数据变为组件的props
// mapDispatchToProps：用了此方法，dispatch只会在此方法里。不写该参数，dispatch会作为组件的props。(我平常用几乎不写该方法)
// export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
export default connect(mapStateToProps)(TestPage);
