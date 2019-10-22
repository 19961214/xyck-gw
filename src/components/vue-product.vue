<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content">
        <img src="../assets/img/cp-1.png" alt />
        <div class="cp-content-btn" @click="gotoCall">
          <span>申请试用</span>
        </div>
      </el-col>
    </el-row>
    <productItem1></productItem1>
    <productItem2></productItem2>
    <productItem3></productItem3>
    <productItem4></productItem4>
    <productItem5></productItem5>
  </div>
</template>

<script>
import productItem1 from "./product/productItem1.vue";
import productItem2 from "./product/productItem2.vue";
import productItem3 from "./product/productItem3.vue";
import productItem4 from "./product/productItem4.vue";
import productItem5 from "./product/productItem5.vue";
export default {
  name: "vue-index",
  components: {
    productItem1,
    productItem2,
    productItem3,
    productItem4,
    productItem5
  },
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  },
  mounted() {
    var dis = document.getElementById("cp-content");
    dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1024px) {
  #cp-content {
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
    }
    .cp-content-btn {
      color: #fff;
      font-size: 14px !important;
      width: 120px !important;
      height: 36px !important;
      text-align: center;
      line-height: 40px;
      border: 1px solid #fff;
      margin-top: 201px !important;
      cursor: pointer;
      position: absolute;
      left: 50%;
      bottom: 40px !important;
      transform: translateX(-60px) !important;
    }
    .cp-content-btn:hover {
      background-color: #fff;
      color: #15abfe;
    }
  }
}

#cp-content {
  margin: 0 auto;
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-btn {
    color: #fff;
    font-size: 16px;
    width: 140px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #fff;
    margin-top: 90px;
    cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: 77px;
    transform: translateX(-70px);
  }
  .cp-content-btn:hover {
    background-color: #fff;
    color: #15abfe;
  }
}
</style>