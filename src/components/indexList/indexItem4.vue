<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="index-intro">
      <div class="index-intro-title">我们能为您提供国内合法、合规、稳定的税务服务落地</div>
      <el-col :span="16" :offset="4">
        <el-col :span="12" :offset="0">
          <div class="content-wrap wrap1">
            <div class="content-title">
              <div class="content-title1">企业服务</div>
              <div class="content-title2">掌税通</div>
            </div>
            <div
              class="content-text"
            >专业企业财税一站式代理服务，多种税优方案，与税优地政府、委托代征机构深度合作，采取最佳税收模式，有效降低企业成本，企业将代发给自然人的款项及税金打款给掌掌财商户服务平台，平台收款后开具发票给企业，代发款项给自然人，并为自然人到税务机关汇总申报税费并开具完税凭证。</div>
            <div class="content-btn-wrap">
              <div class="content-btn">获取免费方案</div>
            </div>
          </div>
        </el-col>

        <el-col :span="12" :offset="0">
          <div class="content-wrap">
            <div class="content-title">
              <div class="content-title1">个人服务</div>
              <div class="content-title2 line">掌财进</div>
            </div>
            <div
              class="content-text"
            >为客户在设立个体工商户企业或个人工作室，并为其提供财税一站式代理服务，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而为客户实现税负最低化，收益最大化。主要适用于年收入较高较稳定的自由职业者、创客、合伙人。</div>
            <div class="content-btn-wrap">
              <div class="content-btn line2">获取免费方案</div>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem4"
};
</script>
<style lang="less">
.index-intro {
  background-color: rgb(247, 252, 255);
  padding-bottom: 87px;
  .index-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrap1{
      margin-right: 40px;
  }
  .content-wrap {
    background-color: #fff;
    padding: 40px 67px 30px 40px;
    .content-title {
      display: flex;
      .content-title1 {
        color: #333;
        font-size: 20px;
      }
      .content-title2 {
        width: 65px;
        height: 20px;
        background-color: #15abfe;
        text-align: center;
        line-height: 20px;
        border-radius: 10px;
        margin-left: 10px;
      }
      .line{
          background-color: #FF7515;
      }
    }
    .content-text {
      margin-top: 52px;
      color: #999;
      font-size: 14px;
      line-height: 22px;
    }
    .content-btn-wrap {
      display: flex;
      justify-content: center;
      .content-btn {
        width: 160px;
        height: 40px;
        background-color: #15abfe;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        margin-top: 57px;
      }
      .line2{
          background-color: #fff;
          border: 1px solid #FF7515;
          border-radius: 4px;
          color: #FF7515;
      }
    }
  }
}
</style>