<template>
  <div>
    <!-- 产品介绍 -->
    <div id="cp4-index-intro4">
      <div class="img-wrap2">
        <div class="img-wrap-text1">掌掌财小程序</div>
        <div
          class="cp-img-wrap-text2"
        >掌掌财小程序是厦云创科推出的一款针对自由职业者使用的移动端应用产品，主要服务于自由职业者解决佣金收款流程复杂、纸质合同签署困难、资产记录不清晰等问题。用户可通过掌掌财小程序完成在线实名认证、电子合同签约、查询自己收款记录等服务。</div>
        <div class="cp4-img-wrap-text3">轻量级应用，无需登录APP也可一步实现电子合同签约</div>
        <div class="cp3-img-wrap-texts">收款记录实时查询，便捷高效</div>
        <div class="cp4-code">
          <img src="../../assets/img/code.jpg" alt />
        </div>
      </div>
      <div class="img-wrap">
        <img src="../../assets/img/back2-3.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productItem4",
  mounted() {
    setTimeout(() => {
      const a = window.localStorage.getItem("a");
      if (a == 4) {
        var dis = document.getElementById("cp4-index-intro4");
        dis.scrollIntoView();
        window.localStorage.clear();
      }
    }, 0);
  }
};
</script>
<style lang="less">
@media (max-width: 1024px) {
  #cp4-index-intro4 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7fcff;
    height: 440px !important;
    padding: 70px 62px 20px 63px !important;
    .img-wrap {
      width: 450px !important;
      height: 350px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-wrap2 {
      width: 450px !important;
      height: 350px;
      padding: 0 5px 2px 0 !important;
      .img-wrap-text1 {
        color: #15abfe;
        font-size: 30px;
      }
      .cp-img-wrap-text2 {
        width: 430px;
        margin-top: 37px !important;
        color: #333333;
        font-size: 14px;
        line-height: 26px;
      }
      .cp4-img-wrap-text3 {
        width: 343px;
        margin-top: 28px !important;
        color: #ff9900;
        font-size: 14px;
        line-height: 26px;
      }
      .cp3-img-wrap-texts {
        width: 300px;
        margin-top: 14px !important;
        color: #ff9900;
        font-size: 14px;
        line-height: 26px;
      }
      .cp4-code {
        width: 84px !important;
        height: 84px !important;
        margin-top: 34px !important;
        cursor: pointer;
        img {
          width: 84px !important;
          height: 84px !important;
        }
      }
    }
  }
}

#cp4-index-intro4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7fcff;
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
    .cp4-img-wrap-text3 {
      width: 343px;
      margin-top: 28px;
      color: #ff9900;
      font-size: 14px;
      line-height: 26px;
    }
    .cp3-img-wrap-texts {
      width: 300px;
      margin-top: 15px;
      color: #ff9900;
      font-size: 14px;
      line-height: 26px;
    }
    .cp4-code {
      width: 100px;
      height: 100px;
      margin-top: 36px;
      cursor: pointer;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>