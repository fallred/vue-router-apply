
import Home from '../views/Home.vue';
import Name from '../views/Name.vue';
import Version from '../views/Version.vue';
// import Login from '../views/Login.vue';
// import Profile from '../views/Profile.vue';
// import User from '../views/User.vue';
// 默认情况下只有首页默认显示，其他点击时才加载组件
// component => () => {}
export default [
    {
        path: '/',
        redirect:{path:'/home'}

    },
    {
        path: '/home',
        name: 'home',
        component:  ()=> import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('../views/Login.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Profile.vue'),
        meta: {needLogin: true}// 路由元信息
    },
    {
        path: '/user',
        name: 'user',
        meta: {needLogin: true},
        component: () => import('../views/User.vue'),
        children:[{
            path: '',
            component: () => import('../views/UserAdd.vue'),
        },{
            path: 'add',
            name: 'userAdd',// 默认路径儿子不能加/
            component: () => import('../views/UserAdd.vue'),
        },{
            path: 'list',
            name: 'userList',// 默认路径儿子不能加/
            component: () => import('../views/UserList.vue'),
        },{
            path: 'detail/:id',// /user/detail/1 /user/detail/2
            name: 'userDetail',// 默认路径儿子不能加/
            component: () => import('../views/UserDetail.vue'),
            beforeEnter(to,from,next){
                //(2) 局部
                console.log('xxx');
                next();
            }
        }]
    },{
        path:'*',
        component:  () => import('../views/404.vue'),
    }
];