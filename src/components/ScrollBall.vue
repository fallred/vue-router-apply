<template>
    <div class="ball" :style="style" :id="ballId">
        <slot></slot>
    </div>
</template>
<script>
// 组件的id问题 _uid
// 属性问题 校验->计算属性
// 双向通信 props+emit /v-model / .sync
// 数据绑定问题 $refs 拿到组件内部的方法，
export default {
    name: 'scroll-ball',
    props: {
        color:{
            type:String,
            default: 'white'
        },
        value: {
            type:Number,
            default: 0
        },
        target: {
            type:Number,
            default: 300
        }
    },
    methods: {
        stop(){
            this.$emit('end');
            cancelAnimationFrame(this.timer);
        }
    },
    mounted(){
        // 单向数据流动，子组件通知父亲，自己当前的位置，父亲更新位置，再传递给子组件
        let ball = document.getElementById(this.ballId)
        // 写一个滚动事件
        this.timer;
        let fn = ()=>{
            let left = this.value;
            if (left >= this.target) {
                return cancelAnimationFrame(this.timer);
            }
            // left += 2;
            this.$emit('input',left + 2);
            this.$emit('update:value',left + 2);
            ball.style.transform = `translate(${this.value}px)`;
            this.timer = requestAnimationFrame(fn);
        }
         this.timer = requestAnimationFrame(fn);
    },
    computed:{
        ballId(){
            return `ball`+this._uid
        },
        style(){
            return {background: this.color}
        }
    }
}
</script>
<style scoped lang="less">
    .ball {
        width:100px;
        height: 100px;
        line-height:100px;
        text-align: center;
        border:1px solid red;
        border-radius: 50%;

    }
</style>