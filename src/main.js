import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css';
router.beforeEach((to,from,next)=>{
  //(1) 全局
  console.log(to.matched);
  let flag = to.matched.some(match=>match.meta && match.meta.needLogin);
  // 如果用户已经登录了 并且访问的还是登录页面
  // 先要校验，当前路由是否要登录
  //  如果登录过，并且需要登录
  if (flag) {
    let isLogin = localStorage.getItem('login');
    if (isLogin) {
      console.log('需要登录');
      // ajax看一下用户是否登录过
      if (to.name=='login') {
        // 去首页
        next('/');
      } else {
        next();
      }
    } else {
      next('/')
    }
  } else if(to.name == 'login'){
    if (isLogin) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
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


// 钩子函数
// $router $route
//meta