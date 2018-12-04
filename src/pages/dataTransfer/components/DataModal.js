
import React from 'react';
import { connect } from 'dva';
import {
  Form, Modal, Input, Select,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 4, offset: 2 },
  wrapperCol: { span: 14 },
};

const DataModal = (props) => {
  const {
    isVisible, form, enterModal, cancelModal, record,
  } = props;
  const { name, car, drivingAge } = record;
  const { getFieldDecorator, validateFields, resetFields } = form;

  // 子组件向父组件传参，通过回调函数
  const handleOk = () => {
    validateFields((err, values) => {
      if (!err) {
        enterModal(values);
        // 确定后清空表单值
        resetFields();
      }
    });
  };

  const handleCancel = () => {
    cancelModal();
  };

  return (
    <Modal
      title="编辑"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelText="取消"
      okText="确定"
    >
      <Form>
        <FormItem {...formItemLayout} label="用户">
          { getFieldDecorator('name', { initialValue: name })(
            <Input placeholder="用户名" />,
          )
            }
        </FormItem>
        <FormItem {...formItemLayout} label="车品牌">
          { getFieldDecorator('car', { initialValue: car })(
            <Select>
              <Option value="dazhong">大众</Option>
              <Option value="baoma">宝马</Option>
              <Option value="luhu">路虎</Option>
              <Option value="benci">奔驰</Option>
            </Select>,
          )
            }
        </FormItem>
        <FormItem {...formItemLayout} label="驾驶年龄">
          { getFieldDecorator('drivingAge', { initialValue: drivingAge, rules: [{ required: true, message: '驾龄不能为空' }, { max: 2, pattern: '^[0-9]*$', message: '只能是数字且不能超过2位数' }] })(
            <Input placeholder="输入驾驶年龄" />,
          )
            }
        </FormItem>
      </Form>
    </Modal>
  );
};
export default Form.create()(DataModal);
