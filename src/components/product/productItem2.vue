<template>
  <div>
    <!-- 产品介绍 -->
    <div id="cp-index-intro2">
      <div class="cp-img-wrap">
        <div class="img-wrap">
          <img src="../../assets/img/index-item1.png" alt />
        </div>
        <div class="img-wrap2">
          <div class="img-wrap-text1" style="color:#ff9900;">掌钱进</div>
          <div
            class="cp-img-wrap-text2"
          >针对企业税负成本高、缺少进项发票、高收入个人税负压力大等高收入群体用户痛点，厦云创科提供出一套专属定制的“掌钱进”计划，为客户提供一站式税务筹划和代理服务，为客户在税优地注册个人独资企业/个人工作室，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而综合成本可降至0.5%-6.45%，为客户节省最大的成本，实现最大的收益。</div>
          <!-- <div class="cp-img-wrap-text3">客户在掌税通平台为自由职业者支付款项掌税通平台为自由职业者代缴税费</div> -->
          <div class="cp-img-wrap-text4" @click="gotoCall">申请试用</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productItem1",
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  },
  mounted() {}
};
</script>
<style scoped lang="less">


#cp-index-intro2 {
  padding-top: 60px;
  background-color: #f9fcff;
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding-bottom: 60px;
  overflow: hidden;
  .cp-img-wrap {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-wrap {
      display: inline-block;
      // margin-top: 78px;
      padding-top: 59px;
      img {
        width: 550px;
        height: 356px;
      }
    }
    .img-wrap2 {
      display: inline-block;
      width: 450px;
      height: 350px;
      // padding: 59px 0 80px 60px;
      .img-wrap-text1 {
        color: #15abfe;
        font-size: 30px;
      }
      .cp-img-wrap-text2 {
        width: 430px;
        margin-top: 41px;
        color: #333333;
        font-size: 14px;
        line-height: 26px;
      }
      .cp-img-wrap-text3 {
        width: 258px;
        margin-top: 30px;
        color: #ff9900;
        font-size: 14px;
        line-height: 26px;
      }
      .cp-img-wrap-text4 {
        width: 160px;
        height: 40px;
        border: 1px solid #fba013;
        box-shadow: 0px 6px 10px 0px rgba(251, 160, 19, 0.34);
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        background-color: #fba013;
        color: #fff;
        font-size: 14px;
        margin-top: 27px;
        cursor: pointer;
      }
      .cp-img-wrap-text4:hover {
        background-color: #fbb03d;
      }
    }
  }

  // .img-wrap2:hover {
  //   box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
  // }
}
</style>