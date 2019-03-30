<template>
    <div>
        <input type="text" v-model="username">
        <button @click="toList">去列表页</button>
    </div>
</template>
<script>
export default {
    methods: {
        toList(){// vue.use(VueRouter) $router:存的都是方法 $route：存的都是属性
            this.$router.push('/user/list');
        }
    },
    // 路由钩子函数
    beforeRouteLeave(to,from,next){
        // next();//express next
        if(this.username){
            let confirm = window.confirm('你需要切换吗？');
            if(confirm){
                next();
            }
        } else {
            next();
        }
    },
    data(){
        return {username:''}
    }    
}
</script>