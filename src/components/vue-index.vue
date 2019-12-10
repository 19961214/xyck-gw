<template>
  <div>
    <div class="index-item1-wrap">
      <!-- <img  class="index-item1-img" src="../assets/img/index-1.png" alt /> -->
      <div class="index-item1-text-wrap">
        <div class="index-item1-text1">用科技打造更专业的人财税一体化商业服务</div>
        <div class="index-item1-text2-wrap">
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>佣 金 结 算</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>税 收 优 惠</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>人 力 资 源</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>产 业 运 营</span>
          </div>
        </div>
      </div>
    </div>
    <indexItem1></indexItem1>
    <indexItem2></indexItem2>
    <indexItem3></indexItem3>
    <indexItem4></indexItem4>
    <indexItem5></indexItem5>
    <indexItem6></indexItem6>
  </div>
</template>

<script>
import indexItem1 from "./indexList/indexItem1.vue";
import indexItem2 from "./indexList/indexItem2.vue";
import indexItem3 from "./indexList/indexItem3.vue";
import indexItem4 from "./indexList/indexItem4.vue";
import indexItem5 from "./indexList/indexItem5.vue";
import indexItem6 from "./indexList/indexItem6.vue";
export default {
  name: "vue-index",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    indexItem1,
    indexItem2,
    indexItem3,
    indexItem4,
    indexItem5,
    indexItem6
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1024px) {
}
.index-item1-wrap {
  width: 100%;
  height: 500px;
  margin-top: 59px;
  background: url("../assets/img/index-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .index-item1-text-wrap {
    .index-item1-text1 {
      font-size: 34px;
      color: #fff;
    }
    .index-item1-text2-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .index-item1-text2 {
        margin-top: 32px;
        display: inline-block;
        img {
          margin-left: 20px;
          width: 16px;
          height: 14px;
        }
        span {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: 9px;
        }
      }
    }
  }
}
</style>