<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="index-intro">
      <div class="index-intro-title">我们能为您提供国内合法、合规、稳定的税务服务落地</div>
      <div class="index3-content-wrap">
        <div class="index3-content-wraps">
          <div class="content-wrap wrap1">
          <div class="content-title">
            <div class="content-title1">企业服务</div>
            <div class="content-title2">掌税通</div>
          </div>
          <div
            class="content-text"
          >专业企业财税一站式代理服务，多种税优方案，与税优地政府、委托代征机构深度合作，采取最佳税收模式，有效降低企业成本，企业将代发给自然人的款项及税金打款给掌掌财商户服务平台，平台收款后开具发票给企业，代发款项给自然人，并为自然人到税务机关汇总申报税费并开具完税凭证。</div>
          <div class="content-btn-wrap">
            <div class="content-btn" @click="gotoCall">获取免费方案</div>
          </div>
        </div>

        <div class="content-wrap">
          <div class="content-title">
            <div class="content-title1">个人服务</div>
            <div class="content-title2 line">掌钱进</div>
          </div>
          <div
            class="content-text"
          >为客户在设立个体工商户企业或个人工作室，并为其提供财税一站式代理服务，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而为客户实现税负最低化，收益最大化。主要适用于年收入较高较稳定的自由职业者、创客、合伙人。</div>
          <div class="content-btn-wrap">
            <div class="line2" @click="gotoCall">获取免费方案</div>
          </div>
        </div>
        </div>
        
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem4",
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  }
};
</script>
<style scoped lang="less">
.index-intro {
  background: url("../../assets/img/index4-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  padding-bottom: 87px;
  .index-intro-title {
    width: 100%;
    margin: 60px 0;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:600;
  }
  .index3-content-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .index3-content-wraps{
      width: 1000px;
      display: flex
    }
    .wrap1 {
      margin-right: 34px;
    }
    .content-wrap {
      width: 483px;
      height: 320px;
      background-color: #fff;
      // padding: 40px 67px 30px 40px;
      position: relative;
      box-shadow:0px 0px 20px 0px rgba(153,153,153,0.1);
      .content-title {
        display: flex;
        margin-top: 43px;
        margin-left: 30px;
        .content-title1 {
          color: #333;
          font-size: 20px;
        }
        .content-title2 {
          width: 65px;
          height: 20px;
          font-size: 12px;
          color: #fff;
          background-color: #15abfe;
          text-align: center;
          line-height: 20px;
          border-radius: 10px;
          margin-left: 10px;
        }
        .line {
          background-color: #ff7515;
        }
      }
      .content-text {
        margin-top: 27px;
        color: #999;
        font-size: 14px;
        line-height: 26px;
        margin-left: 30px;
        margin-right: 37px;
      }
      .content-btn-wrap {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        .content-btn {
          width: 160px;
          height: 40px;
          background-color: #15abfe;
          border: 1px solid #15abfe;
          box-shadow:0px 6px 10px 0px rgba(21,171,254,0.34);
          color: #fff;
          border-radius:20px;
          font-size: 14px;
          text-align: center;
          line-height: 40px;
          margin-bottom: 30px;
          cursor: pointer;
        }
        .content-btn:hover {
          background-color: #37b6fc;
          border: 1px solid #37b6fc;
          color: #fff;
          cursor: pointer;
        }
        .line2 {
          width: 160px;
          height: 40px;
          background-color: #FBA013;
          border: 1px solid #FBA013;
          box-shadow:0px 6px 10px 0px rgba(255,117,21,0.34);
          color: #fff;
          border-radius:20px;
          font-size: 14px;
          text-align: center;
          line-height: 40px;
          margin-bottom: 30px;
          cursor: pointer;
        }
        .line2:hover {
          background-color: #fbb03d;
          border: 1px solid #fbb03d;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .content-wrap:hover {
      box-shadow:0px 0px 20px 0px rgba(153,153,153,0.2);
    }
  }
}
</style>