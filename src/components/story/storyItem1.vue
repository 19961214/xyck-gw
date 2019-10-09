<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="index-intro1">
      <div class="index-intro-title">新闻动态</div>
      <el-col :span="16" :offset="4">
        <div class="hd1-content-wrap hd1-content-left">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap hd1-content-left hd1-content-bottom">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap hd1-content-bottom">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap hd1-content-bottom">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
        <div class="hd1-content-wrap hd1-content-bottom">
          <img src="../../assets/img/hd1.png" alt />
          <div class="hd1-content-text1">厦云创科荣获2019中国人力资源科技创新奖</div>
          <div class="hd1-content-text2">2019.09.09</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "storyItem1"
};
</script>
<style lang="less">
.index-intro1 {
  background-color: #fff;
  padding-bottom: 60px;
  .index-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hd1-content-wrap {
    width: 270px;
    height: 320px;
    display: inline-block;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 4px;
    position: relative;
    margin-left: 40px;
    .hd1-content-text1 {
      color: #333;
      font-size: 16px;
      padding: 14px 22px 0 15px;
    }
    .hd1-content-text2 {
      color: #333;
      font-size: 16px;
      position: absolute;
      right: 16px;
      bottom: 19px;
    }
  }
  .hd1-content-bottom{
    margin-top: 40px;
  }
  // .hd1-content-left{
  //   margin-left: 0;
  // }
}
</style>