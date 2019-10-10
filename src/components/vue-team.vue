<template>
  <div>
    <el-row>
      <el-col :span="24" class="cp-content">
        <img src="../assets/img/jj-1.png" alt />
        <!-- <div class="cp-content-text-wrap">
          <div class="hd-content-text2">用科技打造更专业的人财税一体化商业服务</div>
          <div class="cp-content-text3">人力资源 &nbsp|&nbsp 佣金结算 &nbsp|&nbsp 税收优惠</div>
        </div> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import storyItem1 from "./story/storyItem1.vue";
export default {
  name: "vue-index",
  components: {
    storyItem1
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1480px) {
  .cp-content {
    margin: 0 auto;
    //   transform: translate(0, -85px);
    position: relative;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1024px) {
  .cp-content {
    margin: 0 auto;
    //   transform: translate(0, -85px);
    position: relative;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .cp-content {
    margin: 0 auto;
    //   transform: translate(0, -85px);
    position: relative;
    img {
      width: 100%;
    }
  }
}
.cp-content {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
}
</style>