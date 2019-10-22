<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content6">
        <img src="../assets/img/jr-1.png" alt />
      </el-col>
    </el-row>
	<gousItem1></gousItem1>
	<gousItem2></gousItem2>
  </div>
</template>

<script>
import gousItem1 from "./gous/gousItem1.vue";
import gousItem2 from "./gous/gousItem2.vue";
export default {
  name: "vue-index",
  components: {
	gousItem1,
	gousItem2
  },
  mounted() {
      var dis = document.getElementById("cp-content6");
      dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#cp-content6 {
  margin: 0 auto;
  img {
    width: 100%;
  }
  
}

</style>