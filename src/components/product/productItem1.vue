<template>
  <div>
    <!-- 产品介绍 -->
    <div id="cp-index-intro1">
      <div class="img-wrap">
        <img src="../../assets/img/back-img3.png" alt />
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
</template>

<script>
export default {
  name: "productItem1",
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  },
  mounted() {
    setTimeout(() => {
      const a = window.localStorage.getItem("a");
      if (a == 1) {
        var dis = document.getElementById("cp-index-intro1");
        dis.scrollIntoView();
        window.localStorage.clear();
      }
    }, 0);
  }
};
</script>
<style lang="less">
#cp-index-intro1 {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding-bottom: 60px;
  .img-wrap {
    width: 600px;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-wrap2 {
    width: 600px;
    height: 350px;
    padding: 59px 0 67px 60px;
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
      width: 120px;
      height: 40px;
      border: 1px solid #15abfe;
      border-radius: 4px;
      text-align: center;
      line-height: 40px;
      color: #15abfe;
      font-size: 16px;
      margin-top: 27px;
      cursor: pointer;
    }
  }
}
</style>