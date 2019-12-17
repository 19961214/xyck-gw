<template>
  <div>
    <!-- 产品介绍 -->
    <div id="cp-index-intro4">
      <div class="cp-img-wrap">
        <div class="img-wrap">
          <img src="../../assets/img/cp-4.png" alt />
        </div>
        <div class="img-wrap2">
          <div class="img-wrap-text1">掌掌财小程序</div>
          <div
            class="cp-img-wrap-text2"
          >掌掌财小程序是厦云创科推出的一款针对自由职业者使用的移动端应用产品，主要服务于自由职业者解决佣金收款流程复杂、纸质合同签署困难、资产记录不清晰等问题。用户可通过掌掌财小程序完成在线实名认证、电子合同签约、查询自己收款记录等服务。</div>
          <div class="cp-img-wrap-text3">轻量级应用，无需登录APP也可一步实现电子合同签约</div>
          <div class="cp-img-wrap-text3">收款记录实时查询，便捷高效</div>
          <!-- <div class="cp-img-wrap-text4" @click="gotoCall">申请试用</div> -->
          <div class="cp-img-wrap-text5">扫码关注掌掌财小程序</div>
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


#cp-index-intro4 {
  padding-top: 60px;
  background-color: #f9fcff;
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding-bottom: 60px;
  .cp-img-wrap{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-wrap {
    display: inline-block;
    // padding-top: 59px;
    img {
      width: 455px;
      height: 430px;
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
      width: 335px;
      margin-top: 20px;
      color: #ff9900;
      font-size: 14px;
      line-height: 26px;
    }
    .cp-img-wrap-text5 {
      font-size: 16px;
      font-weight: 400;
      color: rgba(21, 171, 254, 1);
      line-height: 26px;
      margin: 40px 0 0 90px;
      cursor: pointer;
    }
  }
    }
  
  // .img-wrap2:hover {
  //   box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
  // }
}
</style>