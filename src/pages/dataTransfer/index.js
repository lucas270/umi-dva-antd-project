import React, { Component, Fragment } from 'react';
import QueryForm from './components/QueryForm';
import TableList from './components/TableList';

class BaseData extends Component {
  render() {
    return (
      <Fragment>
        {/* btnTxt是自定义的，把值传到子组件QueryForm中去 */}
        <QueryForm btnTxt="搜索" />
        <TableList />
      </Fragment>
    );
  }
}
export default BaseData;
