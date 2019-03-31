<template>
    <div>
        userDetail {{this.$route.query.id}} '?传递参数'
        {{this.$route.params.id}} '通过路由的路径传递参数'
    </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next) {
        //(3) 组件
        console.log('enter userDetail');
        next();
    },
    beforeRouteUpdate(to, from, next){
        next();
    },
    // watch: {
    //     $route(){
    //         alert();
    //     }
    // },
    mounted() {
        
    },
}
</script>