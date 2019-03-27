<template>
  <div class="hello">
   
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    msg: String
  },
  mounted(){
    axios.get('/api/getUser').then(data=>{
        console.log(data);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/common.less';
  .hello {
    color: @color;
  }
</style>
