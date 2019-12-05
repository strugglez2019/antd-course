export default {
  //singular: true,
  plugins: [
      ['umi-plugin-react', {
          //暂时不添加配置,插件不会起作用,后期使用
      }]
  ],
  routes: [{
      path: '/',
      component: './HelloWorld',
  }]
};
