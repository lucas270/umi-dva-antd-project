import { message } from 'antd';

export default {
  namespace: 'dataTransfer',
  state: {
    dataCars: [],
    dataCarsBackup: [],
  },

  reducers: {
    showData(state, { dataCars }) {
      return { ...state, dataCars, dataCarsBackup: dataCars };
    },
    queryData(state, { carData }) {
      const { name } = carData;
      let dataCars = state.dataCars.slice(0);
      dataCars = dataCars.filter(item => item.name.includes(name));
      return { ...state, dataCars };
    },
    addData(state, { carData }) {
    // carData:{name: "张三", car: "QQ", drivingAge: 1}
      const dataCars = [].concat(state.dataCars);
      dataCars.unshift(carData);
      message.success('添加成功');
      return { ...state, dataCars };
    },
    emptyWord(state, _) {
      const dataCars = state.dataCarsBackup.slice(0);
      return { ...state, dataCars };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/dataTransfer') {
          // 监听进入页面时，发个请求获取数据。现在例子写死。
          const dataCars = [
            { name: '张三', car: '宝马', drivingAge: '2' },
            { name: '张望', car: '宝马', drivingAge: '3' },
            { name: '举栗子', car: '大众', drivingAge: '6' },
            { name: '陈大师', car: '路虎', drivingAge: '4' },
          ];
          dispatch({ type: 'showData', dataCars });
        }
      });
    },
  },
};
