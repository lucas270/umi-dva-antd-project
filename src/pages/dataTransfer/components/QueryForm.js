import React from 'react';
import { connect } from 'dva';
import {
  Form, Button, Input, Select, Row, Col,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const QueryForm = (props) => {
  // 下面种写法是直接解构form中的getFieldDecorator出来
//   const { form: getFieldDecorator } = props;

  // 经过Form.create方法包装的组件，form自动变成组件的props， btnTxt是由使用此组件的组件传递过来的(即此组件为子组件，使用它的为父组件)
  const { form, btnTxt, dispatch } = props;
  const { getFieldDecorator, getFieldsValue } = form;

  // 搜索按钮
  const queryClick = (e) => {
    e.preventDefault();
    const values = getFieldsValue();
    dispatch({
      type: 'dataTransfer/queryData',
      carData: values,
    });
  };

  // 重置按钮
  const handleReset = () => {
    form.resetFields();
  };

  const keyWordChange = (e) => {
    if (e.target.value === '') {
      dispatch({
        type: 'dataTransfer/emptyWord',
      });
    }
  };

  // 自定义校验
  const checkName = (rule, value, callback) => {
    if (value && value.length > 5) {
      callback('测试下自定义校验');
    }
    callback();
  };

  // 添加
  const handleAdd = () => {
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'dataTransfer/addData',
          carData: values,
        });
      }
    });
  };

  return (
    <Form onSubmit={queryClick}>
      <Row>
        <Col ms={24} md={8} lg={8}>
          <FormItem {...formItemLayout} label="用户">
            { getFieldDecorator('name', { rules: [{ validator: checkName }] })(
              <Input placeholder="搜索仅作用于此字段" onChange={keyWordChange} />,
            )
            }
          </FormItem>
        </Col>
        <Col ms={24} md={8} lg={8}>
          <FormItem {...formItemLayout} label="车品牌">
            { getFieldDecorator('car', { initialValue: '' })(
              <Select>
                <Option value="">全部</Option>
                <Option value="dazhong">大众</Option>
                <Option value="baoma">宝马</Option>
                <Option value="luhu">路虎</Option>
                <Option value="benci">奔驰</Option>
              </Select>,
            )
            }
          </FormItem>
        </Col>
        <Col ms={24} md={8} lg={8}>
          <FormItem {...formItemLayout} label="驾驶年龄">
            {/* initialValue是默认值，rules一条规则，一个对象  */}
            { getFieldDecorator('drivingAge', { rules: [{ required: true, message: '驾龄不能为空' }, { max: 2, pattern: '^[0-9]*$', message: '只能是数字且不能超过2位数' }] })(
              <Input placeholder="驾驶年龄" />,
            )
            }
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit" icon="search">
            {btnTxt}
          </Button>
          <Button icon="redo" onClick={handleReset} style={{ marginLeft: 10 }}>重置</Button>
          <Button type="primary" style={{ marginLeft: 10 }} onClick={handleAdd}>添加</Button>
        </Col>
      </Row>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};
const FormQuery = Form.create()(QueryForm);
export default connect(mapStateToProps)(FormQuery);
