# vue-router-apply

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



//defer有序加载js的 async异步无序的
//preload预加载   prefetch 预抓取

// webpack懒加载


## 当组件切换时
- 会触发离开的钩子 beforeRouteLeave
- 如果进入到新的页面，beforeEach
- beforeEnter进到路由的配置中
- 会进入到新的页面里，组件内部 会触发一个方法 beforeRouteEnter 组件进入时的钩子
- 解析完成 beforeResolve
- afterEach 当前进入完毕
- 当属性变化时，并没有重新加载组件 会触发beforeRouteUpdate方法
- 组件渲染完成后会调用当前beforeRouteEnter回调方法