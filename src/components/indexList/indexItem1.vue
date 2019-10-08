<template>
  <div>
    
    <!-- 产品介绍 -->
    <el-row class="index-intro1">
      <div class="index-intro-title">产品介绍</div>
      <el-col :span="16" :offset="4">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back-img3.png" alt />
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌税通</div>
            <div class="img-wrap-text2">SaaS服务平台，专注于“互联网+税收优化”</div>
            <div class="img-wrap-text3">解决企业服务端与自由职业者之间的佣金结算发放、代征税收等服务</div>
            <div class="img-wrap-text4">了解更多 ></div>
          </div>
        </el-col>
      </el-col>
    </el-row>

    <el-row class="index-intro1">
      <el-col :span="16" :offset="4">
        
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌钱进</div>
            <div class="img-wrap-text2">为中高收入自由职业者、创客、合伙人提供专属定制的个人税务筹划方案</div>
            <div class="img-wrap-text3">综合成本可降至0.5%-6.45%</div>
            <div class="img-wrap-text3">实现客户税负最小化、收益最大化</div>
            <div class="img-wrap-text4">了解更多 ></div>
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back-img4.png" alt />
          </div>
        </el-col>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: "indexItem1"
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
  .img-wrap {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-wrap2 {
    padding: 59px 0 67px 60px;
    .img-wrap-text1 {
      color: #15abfe;
      font-size: 30px;
    }
    .img-wrap-text2 {
      margin-top: 41px;
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .img-wrap-text3 {
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .img-wrap-text4 {
      color: #15abfe;
      font-size: 16px;
      margin-top: 98px;
      cursor:pointer;
    }
  }
}
</style>