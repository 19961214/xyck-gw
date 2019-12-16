<template>
  <div>
    <!-- 产品介绍 -->
    <div id="cp-index-intro1">
      <div class="cp-img-wrap">
        <div class="img-wrap">
          <img src="../../assets/img/index-item2.png" alt />
        </div>
        <div class="img-wrap2">
          <div class="img-wrap-text1">掌税通</div>
          <div
            class="cp-img-wrap-text2"
          >共享经济下自由职业者与平台客户企业进行服务合作，平台客户企业通过平台完成对自由职业者的佣金核算，并将佣金款项和税费打款给平台，平台收款后开具相应发票给客户，并将代发的佣金款项汇入自由职业者的收款账户，平台依据款项支付流水完成对自由职业者税款的代扣代缴工作。</div>
          <div class="cp-img-wrap-text3">客户在掌税通平台为自由职业者支付款项掌税通平台为自由职业者代缴税费</div>
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
<style lang="less">
@media (max-width: 1240px) {
  #cp-index-intro1 {
    margin-top: 30px !important;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    //   padding-bottom: 60px;
    .img-wrap {
      display: inline-block;

      padding-top: 59px;
      img {
        width: 450px !important;
        height: 350px !important;
      }
    }
    .img-wrap2 {
      width: 450px !important;
      height: 350px;
      padding: 59px 19px 27px 0 !important;
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
        width: 140px;
        height: 40px;
        border: 1px solid rgba(21, 171, 254, 1);
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        color: #15abfe;
        font-size: 16px;
        margin-top: 27px;
        cursor: pointer;
      }
      .cp-img-wrap-text4:hover {
        background-color: #15abfe;
        color: #fff;
      }
    }
    // .img-wrap2:hover {
    //   box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
    // }
  }
}

#cp-index-intro1 {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  //   padding-bottom: 60px;
  .img-wrap {
    display: inline-block;
    float: left;
    padding-top: 59px;
    img {
      width: 550px;
      height: 356px;
    }
  }
  .img-wrap2 {
    display: inline-block;
    float: left;
    width: 450px;
    height: 350px;
    padding: 59px 0 80px 60px;
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
      width: 140px;
      height: 40px;
      border: 1px solid rgba(21, 171, 254, 1);
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      color: #15abfe;
      font-size: 16px;
      margin-top: 27px;
      cursor: pointer;
    }
    .cp-img-wrap-text4:hover {
      background-color: #15abfe;
      color: #fff;
    }
  }
  // .img-wrap2:hover {
  //   box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
  // }
}
</style>