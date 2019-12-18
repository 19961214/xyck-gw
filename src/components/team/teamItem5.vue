<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro5">
      <div class="jj-intro-title">政策合规性</div>
      <div class="jj-content5-wrap">
        <div class="jj-content5-item">
          <div class="jj-content5-item1">*《个体工商户个人所得税计税办法》第四条：</div>
          <p class="jj-content5-item2">个体工商户以业主为个人所得税纳税义务人。</p>
          <div class="jj-content5-item1">*《个人所得税法实施条例》第六条 个人所得税法规定的各项个人所得的范围，经营所得，是指：</div>
          <p class="jj-content5-item2">
            1.个体工商户从事生产、经营活动取得的所得，个人独资企业投资人、合伙企业的个人合伙人来源于境内注册的个人独资企业、合伙企业生产、经营的所得；
            <br />2.个人依法从事办学、医疗、咨询以及其他有偿服务活动取得的所得；
            <br />3.个人对企业、事业单位承包经营、承租经营以及转包、转租取得的所得；
            <br />4.个人从事其他生产、经营活动取得的所得。
          </p>
          <div class="jj-content5-item1">*《财政部税务总局关于实施小微企业普惠性税收减免政策的通知》(财税[2019]13 号)规定：</div>
          <p class="jj-content5-item2">
            小规模纳税人发生增值税应税销售行为，合计月销售额未超过10万元(以1个季度为1个纳税期的，季度销售额未超过30万元，下同)的，免征增值税。
            <br />小规模纳税人发生增值税应税销售行为，合计月销售额超过10万元，但扣除本期发生的销售不动产的销售额后未超过10万元的，其销售货物、劳务、服务、无形资产取得的销售额免征增值税。
          </p>
        </div>

        <div class="jj-content5-items">
          <img src="../../assets/img/jj16.png" alt />
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem5"
};
</script>
<style lang="less">

.jj-index-intro5 {
  background-color: #fff;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .jj-content5-wrap {
    .jj-content5-item {
      width: 470px;
      height: 420px;
      margin-right: 26px;
      display: inline-block;
      .jj-content5-item1 {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #333;
        line-height: 26px;
        margin-top: 20px;
      }
      .jj-content5-item2 {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #666;
        line-height: 22px;
        margin-top: 20px;
      }
    }
    .jj-content5-items {
      width: 500px;
      height: 500px;
      display: inline-block;
      position: relative;
      img {
        width: 500px;
        height: 240px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}
</style>