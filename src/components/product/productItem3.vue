<template>
  <div>
    <!-- 产品介绍 -->
    <div id="cp-index-intro3">
      <div class="cp-img-wrap">
        <div class="img-wrap">
        <img src="../../assets/img/cp-3.png" alt />
      </div>
      <div class="img-wrap2">
        <div class="img-wrap-text1">掌掌财APP</div>
        <div
          class="cp-img-wrap-text2"
        >掌掌财APP，是厦云创科推出的一款企业服务者及自由职业者均可使用的移动端应用程序，企业可使用企业账号登录在APP上进行合同管理、佣金管理、佣金代发、一键开票等业务，自由职业者可使用个人账号登录在APP上进行合同签约、佣金收款、明细查询等业务。随时随地使用、操作安全便捷。</div>
        <div class="cp-img-wrap-text3">自由职业者APP一键签约，一键收款，一键理财</div>
        <div class="cp-img-wrap-text3">企业服务端APP一键结算，一键打款，一键开票</div>
        <div class="cp-img-wrap-text4" @click="gotoCall">申请试用</div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "productItem3",
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  },
  mounted() {
    setTimeout(() => {
      const a = window.localStorage.getItem("a");
      if (a == 3) {
        var dis = document.getElementById("cp-index-intro3");
        dis.scrollIntoView();
        window.localStorage.clear();
      }
    }, 0);
  }
};
</script>
<style lang="less">
@media (max-width: 1240px) {
  #cp-index-intro3 {
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
        height: 428px !important;
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
        width: 300px;
        margin-top: 20px;
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

#cp-index-intro3 {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding-bottom: 60px;
  .img-wrap {
    display: inline-block;
    padding-top: 59px;
    float: left;
    img {
      width: 455px;
    height: 430px;
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
      width: 300px;
      margin-top: 20px;
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