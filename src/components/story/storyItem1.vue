<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="index-intro1">
      <div class="index-intro-title">新闻动态</div>
      <div class="hd1-content1-wrap">
        <div class="hd1-content-left" @click="gotoitem">
          <img src="../../assets/img/item.png" alt />
          <div class="hd1-content-text1">中小企业怎么做税务筹划 中小企如何做好税务筹划</div>
          <div class="hd1-content-text2">2019.04.03</div>
        </div>
        <div class="hd1-content-wrap" @click="gotoitem2">
          <img src="../../assets/img/item6.png" alt />
          <div class="hd1-content-text1">明年1月1日社保入税 这10大变化财务要注意</div>
          <div class="hd1-content-text2">2019.06.05</div>
        </div>
        <div class="hd1-content-wrap" @click="gotoitem3">
          <img src="../../assets/img/item2.png" alt />
          <div class="hd1-content-text1">两会提议：自由职业者要纳入正式社会职业体系</div>
          <div class="hd1-content-text2">2019.08.07</div>
        </div>
        <div class="hd1-content-wrap" @click="gotoitem4">
          <img src="../../assets/img/item3.png" alt />
          <div class="hd1-content-text1">2018小微企业认定标准 小微企业优惠政策解读</div>
          <div class="hd1-content-text2">2019.09.20</div>
        </div>
        <!-- <div class="hd1-content-wrap hd1-content-left hd1-content-bottom">
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
        </div>-->
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "storyItem1",
  methods: {
    gotoitem() {
      this.$router.push({ path: "/item1" });
    },
    gotoitem2() {
      this.$router.push({ path: "/item2" });
    },
    gotoitem3() {
      this.$router.push({ path: "/item3" });
    },
    gotoitem4() {
      this.$router.push({ path: "/item4" });
    }
  }
};
</script>
<style scoped lang="less">
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
  .hd1-content1-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .hd1-content-wrap {
      width: 231px;
      height: 274px;
      display: inline-block;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(238, 238, 238, 1);
      border-radius: 4px;
      position: relative;
      margin-left: 25px;
      cursor: pointer;
      img {
        width: 231px;
        height: 176px;
      }
      .hd1-content-text1 {
        color: #333;
        font-size: 14px;
        padding: 14px 22px 0 15px;
        line-height: 22px;
      }
      .hd1-content-text2 {
        color: #333;
        font-size: 14px;
        position: absolute;
        right: 16px;
        bottom: 19px;
      }
    }
    // .hd1-content-wrap:hover {
    //   box-shadow: 0px 0px 30px 0px rgba(12, 61, 99, 0.15);
    // }
  }

  .hd1-content-bottom {
    margin-top: 40px;
  }
  .hd1-content-left{
    width: 231px;
      height: 274px;
      display: inline-block;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(238, 238, 238, 1);
      border-radius: 4px;
      position: relative;
      cursor: pointer;
      img {
        width: 231px;
        height: 176px;
      }
      .hd1-content-text1 {
        color: #333;
        font-size: 14px;
        padding: 14px 22px 0 15px;
        line-height: 22px;
      }
      .hd1-content-text2 {
        color: #333;
        font-size: 14px;
        position: absolute;
        right: 16px;
        bottom: 19px;
      }
  }
}
</style>