import { message } from 'antd';

export default {
  namespace: 'dataTransfer',
  state: {
    dataCars: [],
    dataCarsBackup: [],
    id: 5, // 添加时，新的id从5开始
  },

  reducers: {
    // 进入页面展示数据
    showData(state, { dataCars }) {
      return { ...state, dataCars, dataCarsBackup: dataCars };
    },
    // 搜索时候
    queryData(state, { carData }) {
      const { name } = carData;
      let dataCars = state.dataCars.slice(0);
      dataCars = dataCars.filter(item => item.name.includes(name));
      return { ...state, dataCars };
    },
    // 添加
    addData(state, { carData }) {
    // carData:{ name: "张三", car: "QQ", drivingAge: 1}
      const dataCars = [].concat(state.dataCars);
      let id = state.id;
      const carData2 = { ...carData, id };
      dataCars.unshift(carData2);
      id++;
      message.success('添加成功');
      return { ...state, dataCars, id };
    },
    emptyWord(state, _) {
      const dataCars = state.dataCarsBackup.slice(0);
      return { ...state, dataCars };
    },
    // 删除数据
    delData(state, { name }) {
      const dataCars = state.dataCars.slice(0);
      const index = dataCars.findIndex(it => it.name === name);
      dataCars.splice(index, 1);
      return { ...state, dataCars };
    },
    // 编辑数据
    editData(state, { carData, id }) {
      const { name, car, drivingAge } = carData;
      const dataCars = state.dataCars.slice(0);
      dataCars.map((item, index) => {
        if (item.id === id) {
          dataCars[index] = { id, name, car, drivingAge };
        }
      });
      message.success('修改成功');
      return { ...state, dataCars };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/dataTransfer') {
          // 监听进入页面时，发个请求获取数据。现在例子写死。
          const dataCars = [
            { id: 1, name: '张三', car: 'baoma', drivingAge: '2' },
            { id: 2, name: '张望', car: 'baoma', drivingAge: '3' },
            { id: 3, name: '举栗子', car: 'dazhong', drivingAge: '6' },
            { id: 4, name: '陈大师', car: 'luhu', drivingAge: '4' },
          ];
          dispatch({ type: 'showData', dataCars });
        }
      });
    },
  },
};
