<template>
  <div>
    <div class="index-item1-wrap">
      <!-- <img  class="index-item1-img" src="../assets/img/index-1.png" alt /> -->
      <div class="index-item1-text-wrap">
        <div class="index-item1-text1">厦云：助力企业商业决策税务筹划</div>
        
      </div>
      <div class="product-nav">
        <div class="product-nav-item">典型应用行业</div>
        <div class="product-nav-item">行业痛点</div>
        <div class="product-nav-item">应用案例</div>
        <div class="product-nav-item2">助力企业商业决策、<div>税务筹划</div></div>
        <div class="product-nav-item">政策合理性</div>
      </div> 
    </div>
    <teamItem1></teamItem1>
    <teamItem2></teamItem2>
    
    <teamItem4></teamItem4>
    <teamItem3></teamItem3>
    <teamItem5></teamItem5>
  </div>
</template>

<script>
import teamItem1 from "./team/teamItem1.vue";
import teamItem2 from "./team/teamItem2.vue";
import teamItem3 from "./team/teamItem3.vue";
import teamItem4 from "./team/teamItem4.vue";
import teamItem5 from "./team/teamItem5.vue";
export default {
  name: "vue-index",
  components: {
    teamItem1,
    teamItem2,
    teamItem3,
    teamItem4,
    teamItem5
  },
  mounted() {
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
.index-item1-wrap {
  width: 100%;
  height: 500px;
  margin-top: 59px;
  background: url("../assets/img/jj-1.png");
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
  }
  .product-nav {
    width: 1000px;
    height: 78px;
    background: rgba(247, 252, 255, 1);
    border: 1px solid #eee;
    overflow: hidden;
    transform: translateY(230px);
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
    .product-nav-item2{
      width: 200px;
      height: 100%;
      float: left;
      display: flex;
      flex-direction: column;
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
      border: 1px solid #eee;
    }
    .product-nav-item2:hover {
      color: #15abfe;
      background-color: #fff;
      border: 1px solid #eee;
    }
  }
}
</style>