
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-dva-antd-project',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
   // 修改antd主题样式
  // theme: {
  //   "@primary-color": "#30b767", // 全局主色
  //   "@link-color": #1890ff, // 链接色
  //   "@success-color": #52c41a, // 成功色
  // }
}
