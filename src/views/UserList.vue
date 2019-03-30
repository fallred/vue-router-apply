<template>
    <div>
        <li><router-link to="/user/detail?id=1">用户1</router-link></li>
        <li><router-link to="/user/detail?id=2">用户2</router-link></li>
        <li><router-link to="/user/detail/3">用户3</router-link></li>
    </div>
</template>
<script>
    export default {
        beforeRouteEnter (to, from, next) {
            // 此方法中不能拿到this
            if (from.name=='userAdd') {
                console.log('userAdd 进入到 userList是这里过来的');
            }
            next(vm=>{
                // 组件渲染完成后会调用当前beforeRouterEnter方法
                console.log(vm);
            })
        }
    }
</script>