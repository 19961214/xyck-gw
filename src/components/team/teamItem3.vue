<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro3">
      <div class="jj-intro-title">助力企业商业决策、税务筹划</div>
      <el-col :span="16" :offset="4">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem3"
};
</script>
<style lang="less">
.jj-index-intro3 {
  background-color: #232433;
  padding-bottom: 87px;
  .jj-intro-title {
    width: 100%;
    height: 143px;
    color: #ffffff;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jj-content3-wrap {
      overflow: hidden;
    .jj-content3-item {
      width: 366px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      float: left;
      margin-right: 51px;
      img {
        margin-top: 50px;
      }
      .jj-content3-text1 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-top: 50px;
      }
      .jj-content3-text2 {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 300;
        color: rgba(153, 154, 171, 1);
        line-height: 22px;
        margin-top: 25px;
        padding: 0 41px 0 38px;
      }
    }
  }
}
</style>