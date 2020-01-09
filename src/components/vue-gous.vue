<template>
  <div>
    <el-row>
      <div id="cp-content6">
        <div class="gy-item1-wrap">
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
          <div class="product-nav">
            <div class="product-nav-item" @click="goGY">关于厦云创科</div>
            <div class="product-nav-item" @click="goLX">联系我们</div>
            <div class="product-nav-item">加入我们</div>
          </div>
        </div>
      </div>
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
  methods: {
    goGY() {
      this.$router.push({ path: "/article" });
    },
    goLX() {
      this.$router.push({ path: "/us" });
    }
  },
  mounted() {
    var dis = document.getElementById("cp-content6");
    dis.scrollIntoView();
  }
};
</script>
<style scoped lang="less">
@import url("../assets/css/reset.css");
.gy-item1-wrap {
  width: 100%;
  height: 500px;
  margin-top: 57px;
  background: url("../assets/img/jr-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  display: flex;
  flex-direction: column;
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
  .product-nav {
    width: 1000px;
    height: 78px;
    background: #fff;
    border: 1px solid #eee;
    overflow: hidden;
    transform: translateY(210px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
    .product-nav-item {
      width: 33.3%;
      height: 100%;
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 26px;
      cursor: pointer;
    }
    .product-nav-item:hover {
      color: #15abfe;
      background-color: rgba(247, 252, 255, 1);
      border: 1px solid #eee;
    }
  }
}
</style>