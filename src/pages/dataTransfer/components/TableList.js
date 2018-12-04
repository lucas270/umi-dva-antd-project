import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Divider } from 'antd';
import DataModal from './DataModal';


class TableList extends Component {
  state={
    visible: false, // 弹框默认隐藏
    record: {},
  }

  renderCar=(text) => {
    let car = '';
    switch (text) {
      case 'dazhong':
        car = '大众';
        break;
      case 'baoma':
        car = '宝马';
        break;
      case 'luhu':
        car = '路虎';
        break;
      case 'benci':
        car = '奔驰';
        break;
      default:
        car = '';
    }
    return car;
  }

  // 编辑
  onEdit = record => () => {
    this.setState({ visible: true, record });
  }

  // 删除
  del= name => () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'dataTransfer/delData',
      name,
    });
  }

  enterModal =(values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'dataTransfer/editData',
      carData: values,
      id: this.state.record.id,
    });
    this.setState({ visible: false });
  }

  // 子组件回调调用的
  cancelModal = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, record } = this.state;
    const { dataSource } = this.props;

    // 表格列定义
    const columns = [{
      title: '姓名',
      dataIndex: 'name', // 与数据对象的key同名时，会自动遍历出数据
      // key:"name", //每行应有唯一的key或rowkey，否则有警告，有rowkey且唯一时可以忽略，如果不唯一或没有rowkey可以指定key
    },
    {
      title: '驾驶车辆',
      dataIndex: 'car',
      render: (text) => {
        return this.renderCar(text);
      },
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
            <a onClick={this.onEdit(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="确定删除吗？" onConfirm={this.del(record.name)} okText="确定" cancelText="取消">
              <a href="#">删除</a>
            </Popconfirm>
          </div>
        );
      },
    }];


    return (
      <div style={{ marginTop: 10 }}>
        <Table
          rowKey={(i, v) => v}
          columns={columns}
          dataSource={dataSource}
          bordered
          locale={{ emptyText: '木有数据哦(⊙o⊙)' }}
        />
        {/* DataModal组件中的isVisible,cancelModal...是自定义属性，名字随便起，它们会变成组件DataModal的props */}
        <DataModal isVisible={visible} cancelModal={this.cancelModal} enterModal={this.enterModal} record={record} />
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
