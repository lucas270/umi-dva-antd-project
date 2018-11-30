import React, { Component } from 'react';
import { connect } from 'dva';
import {
  Form, Button, Table, Row, Col,
} from 'antd';

// 也可以写成jsx文件，与js文件一样。
class BaseData extends Component {
  render() {
    return <div>dds</div>;
  }
}
export default connect()(BaseData);
