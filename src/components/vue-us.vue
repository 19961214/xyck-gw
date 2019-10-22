<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content5">
        <img src="../assets/img/lx-1.png" alt />
      </el-col>
    </el-row>
    <usItem1></usItem1>
    <usItem2></usItem2>
  </div>
</template>

<script>
import usItem1 from "./us/usItem1.vue";
import usItem2 from "./us/usItem2.vue";
export default {
  name: "vue-index",
  components: {
  usItem1,
  usItem2
  },
  mounted() {
      var dis = document.getElementById("cp-content5");
      dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#cp-content5 {
  margin: 0 auto;
  img {
    width: 100%;
  }
  
}

</style>