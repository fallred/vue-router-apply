
import Home from '_v/Home.vue';
import Name from '_v/Name.vue';
import Version from '_v/Version.vue';
// import Login from '_v/Login.vue';
// import Profile from '_v/Profile.vue';
// import User from '_v/User.vue';
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
        component: {
            default: Home,
            name: Name,
            version: Version
        }
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('_v/Login.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('_v/Profile.vue'),
        meta: {needLogin: true}// 路由元信息
    },
    {
        path: '/user',
        name: 'user',
        meta: {needLogin: true},
        component: () => import('_v/User.vue'),
        children:[{
            path: '',
            component: () => import('_v/UserAdd.vue'),
        },{
            path: 'add',
            name: 'userAdd',// 默认路径儿子不能加/
            component: () => import('_v/UserAdd.vue'),
        },{
            path: 'list',
            name: 'userList',// 默认路径儿子不能加/
            component: () => import('_v/UserList.vue'),
        },{
            path: 'detail/:id',// /user/detail/1 /user/detail/2
            name: 'userDetail',// 默认路径儿子不能加/
            component: () => import('_v/UserDetail.vue'),
            beforeEnter(to,from,next){
                //(2) 局部
                console.log('xxx');
                next();
            }
        }]
    },{
        path:'*',
        component:  () => import('_v/404.vue'),
    }
];