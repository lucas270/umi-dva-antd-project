import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

// 表格列定义
const columns = [{
  title: '姓名',
  dataIndex: 'name', // 与数据对象的key同名时，会自动遍历出数据
  // key:"name", //每行应有唯一的key或rowkey，否则有警告，有rowkey且唯一时可以忽略，如果不唯一或没有rowkey可以指定key
},
{
  title: '驾驶车辆',
  dataIndex: 'car',
},
{
  title: '驾驶年龄',
  dataIndex: 'drivingAge',
},
{
  title: '操作',
  render: (text, record) => {
    return (
      <div>
        <a>编辑</a>
        <a>删除</a>
      </div>
    );
  },
}];

class TableList extends Component {
  render() {
    const { dataSource } = this.props;
    return (
      <div style={{ marginTop: 10 }}>
        <Table
          rowKey={(i, v) => v}
          columns={columns}
          dataSource={dataSource}
          bordered
        />
      </div>

    );
  }
}

const mapStateToProps = ({ dataTransfer }) => {
  const { dataCars } = dataTransfer;
  return {
    dataSource: dataCars,
  };
};
export default connect(mapStateToProps)(TableList);
