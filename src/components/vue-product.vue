<template>
  <div>
    <div class="product-item1-wrap">
      <!-- <img  class="index-item1-img" src="../assets/img/index-1.png" alt /> -->
      <div class="index-item1-text-wrap">
        <div class="index-item1-text1">我们的产品</div>
        <div class="index-item1-text2">Our products</div>
      </div>
      <div class="product-nav">
        <div class="product-nav-item">掌税通</div>
        <div class="product-nav-item">掌钱进</div>
        <div class="product-nav-item">掌掌财APP</div>
        <div class="product-nav-item">掌掌财小程序</div>
        <div class="product-nav-item">我们的优势</div>
      </div>
    </div>
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
  methods: {},
  mounted() {}
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1024px) {
}

.product-item1-wrap {
  width: 100%;
  height: 500px;
  margin-top: 59px;
  background: url("../assets/img/cpjs.png");
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .index-item1-text1 {
      font-size: 34px;
      color: #fff;
    }
    .index-item1-text2 {
      font-size: 24px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-top: 23px;
    }
  }
  .product-nav {
    width: 1000px;
    height: 78px;
    background: rgba(247, 252, 255, 1);
    border: 1px solid rgba(247, 252, 255, 1);
    overflow: hidden;
    transform: translateY(210px);
    display: flex;
    justify-content: center;
    align-items: center;
    .product-nav-item {
      width: 200px;
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
      background-color: #fff;
    }
  }
}
</style>