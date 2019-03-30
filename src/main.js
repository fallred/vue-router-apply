import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css';
router.beforeEach((to,from,next)=>{
  //(1) 全局
  console.log('all');
  next();
});
router.beforeResolve((to,from,next)=>{
  // (4) 解析完成
  // 当前路由解析后悔跳转的钩子
  console.log('resolve');
  next();
});
router.afterEach(()=>{
  //(5) 解析后
  console.log('after');
});
new Vue({
  router, //在实例中引入路由
  render: h => h(App),
}).$mount('#app')
