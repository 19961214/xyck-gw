<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content4">
        <img src="../assets/img/gy-1.png" alt />
      </el-col>
    </el-row>
    <articleItem1></articleItem1>
    <articleItem2></articleItem2>
  </div>
</template>

<script>
import articleItem1 from "./article/articleItem1.vue";
import articleItem2 from "./article/articleItem2.vue";
export default {
  name: "vue-index",
  components: {
    articleItem1,
    articleItem2
  },
  mounted() {
      var dis = document.getElementById("cp-content4");
      dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#cp-content4 {
  margin: 0 auto;
  img {
    width: 100%;
  }
  
}
</style>