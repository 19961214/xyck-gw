<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content3">
        <img src="../assets/img/gy-1.png" alt />
      </el-col>
    </el-row>
	<storyItem1></storyItem1>
	<storyItem2></storyItem2>
  </div>
</template>

<script>
import storyItem1 from "./story/storyItem1.vue";
import storyItem2 from "./story/storyItem2.vue";
export default {
  name: "vue-index",
  components: {
	storyItem1,
	storyItem2
  },
  mounted() {
      var dis = document.getElementById("cp-content3");
      dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#cp-content3 {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  img {
    width: 100%;
  }
  
}

</style>