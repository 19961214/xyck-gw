<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro3">
      <div class="jj-intro-title">助力企业商业决策、税务筹划</div>

      <div class="jj-content3-wrap">
        <div class="jj-content3-item">
          <img src="../../assets/img/jj13.png" alt />
          <p class="jj-content3-text1">与企业签订任务外包协议</p>
          <p
            class="jj-content3-text2"
          >企业通过业务外包，将任务外包给厦云创科（以下简称我司），签署任务外包协议，我司将任务众包给自由职业者，完成派单、接单电子签约流程。</p>
        </div>

        <div class="jj-content3-item">
          <img src="../../assets/img/jj14.png" alt />
          <p class="jj-content3-text1">代付佣金、代开发票、代缴税款</p>
          <p
            class="jj-content3-text2"
          >众包人员接受并完成任务后，将成果提交给企业确认交付，企业与我司进行佣金结算，我司将对应报酬汇入众包人员账户，并代为申报个税，并开具发票及凭证回执给到企业。合规纳税更安心，合理开票更放心。</p>
        </div>

        <div class="jj-content3-item">
          <img src="../../assets/img/jj15.png" alt />
          <p class="jj-content3-text1">专属税务筹划、一站式服务</p>
          <p
            class="jj-content3-text2"
          >享受税务筹划，专属顾问，项目落地托管服务，为客户在税优地设立个人独资企业/个人工作室，并提供一站式代理服务，从而为客户达到成本最低化，收益最大化的目的。</p>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem3"
};
</script>
<style lang="less">
@media (max-width: 1350px) {
  .jj-index-intro3 {
    background-color: #fafafa;
    padding-bottom: 87px;
    .jj-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
    }
    .jj-content3-wrap {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .jj-content3-item {
        width: 190px !important;
        height: 230px !important;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 14px 20px 0px rgba(97, 97, 97, 0.15);
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
        margin-right: 20px !important;
        position: relative;
        img {
          position: absolute;
        top: 20px;
        left: -40px;
        }
        .jj-content3-text1 {
          font-size: 16px !important;
          font-family: PingFang SC;
          font-weight: 600;
          color: #333;
          margin-top: 39px !important;
        }
        .jj-content3-text2 {
          display: inline-block;
          width: 229px !important;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 300;
          color: #666;
          line-height: 22px;
          margin-top: 26px !important;
          padding: 0 36px 0 35px !important;
        }
      }
    }
  }
}
.jj-index-intro3 {
  background-color: #fafafa;
  padding-bottom: 87px;
  .jj-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
  .jj-content3-wrap {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    .jj-content3-item {
      width: 290px;
      height: 300px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 14px 20px 0px rgba(97, 97, 97, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      float: left;
      margin-right: 51px;
      padding: 71px 35px 0 40px;
      position: relative;
      img {
        position: absolute;
        top: 20px;
        left: -40px;
      }
      .jj-content3-text1 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #333;
        margin-top: 50px;
      }
      .jj-content3-text2 {
        display: inline-block;
        width: 286px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 300;
        color: #666;
        line-height: 22px;
        margin-top: 25px;
        padding: 0 41px 0 38px;
      }
    }
  }
}
</style>