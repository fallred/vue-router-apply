
<template>
  <div id="app">
    <ScrollBall color="red" :target="500" :value.sync="pos4" ref="ball4">红球2</ScrollBall>
    <ScrollBall color="red" :value="pos4" :target="500" @update:value="value=>pos4=value">红球2</ScrollBall>
    <ScrollBall color="red" v-model="pos3" :target="500" >红球1</ScrollBall>
    <ScrollBall color="red" :value="pos1" :target="500" @input="input">红球</ScrollBall>
    <ScrollBall color="blue" :value="pos2" :target="500">篮球</ScrollBall>
   
    <button @click="getPosition">获取球1的位置</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
import ScrollBall from './components/ScrollBall.vue';
export default {
  name: 'app',
  data(){
    return {pos1:50, pos2: 100, pos3: 50,pos4: 200}
  },
  components: {
    ScrollBall
  },
  methods: {
    input(value){
      console.log(value);
      this.pos1 = value;
      // this.pos2 = value;
      // this.pos3 = value;
      // this.pos4 = value;
    },
    stop(){
      this.$refs.ball4.stop();
    },
    getPosition(){
      console.log(this.pos1);
    }
  }
}
</script>

<style lang="less">

</style>
