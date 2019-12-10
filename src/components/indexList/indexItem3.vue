<template>
  <div>
    <div class="index-intro8">
      <div class="index-intro-title">全国数十家税优地资源，一站式代理服务，四大税务服务保障</div>

      <div class="content3-list-wrap">
        <div class="content3-list">
          <img class="content3-img1" src="../../assets/img/back3-1.png" alt />
          <img class="content3-img2" src="../../assets/img/back3-5.png" alt />
          <div class="content3-text-wrap">
            <div class="content3-text1">资深团队 税法专家</div>
            <div class="content3-text2">全国资深财税团队支持熟悉税</div>
            <div class="content3-text3">收政策法规</div>
          </div>
        </div>

        <div class="content3-list">
          <img class="content3-img1" src="../../assets/img/back3-2.png" alt />
          <img class="content3-img2" src="../../assets/img/back3-6.png" alt />
          <div class="content3-text-wrap">
            <div class="content3-text1">税优扶持 增加收入</div>
            <div class="content3-text2">全国数十家税收优惠地多项税</div>
            <div class="content3-text3">收优惠政策扶持节省成本，增加收入</div>
          </div>
        </div>

        <div class="content3-list">
          <img class="content3-img1" src="../../assets/img/back3-3.png" alt />
          <img class="content3-img2" src="../../assets/img/back3-7.png" alt />
          <div class="content3-text-wrap">
            <div class="content3-text1">安全合法 合规便捷</div>
            <div class="content3-text2">税优政策合法，渠道安全合规</div>
            <div class="content3-text3">支持发票办理、报销服务</div>
          </div>
        </div>

        <div class="content3-list">
          <img class="content3-img1" src="../../assets/img/back3-4.png" alt />
          <img class="content3-img2" src="../../assets/img/back3-6.png" alt />
          <div class="content3-text-wrap">
            <div class="content3-text1">一站式税筹 高效落地</div>
            <div class="content3-text2">互联网化全流程线上操作一站</div>
            <div class="content3-text3">式税务筹划</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexItem3"
};
</script>
<style lang="less">
@media (max-width: 1280px) {
  .index-intro8 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 111px !important;
    .index-intro-title {
      width: 100%;
      height: 98px !important;
      color: #fff;
      font-size: 22px !important;
      text-align: center;
      line-height: 90px !important;
    }
    .content3-list-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .content3-list {
        display: inline-block;
        width: 185px !important;
        height: 179.6px !important;
        position: relative;
        overflow: hidden;
        margin-left: 20px;
        border-radius: 4px;
        margin-top: 40px;
        .content3-img1 {
          width: 100%;
          transition: all 0.7s;
        }
        .content3-img2 {
          width: 32px !important;
          height: 34px !important;
          position: absolute;
          top: 47px !important;
          left: 84px !important;
          transition: all 0.7s;
        }
        .content3-text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 21px 33px 24px 33px !important;
          background-color: #fff;
          margin-top: -2px;
          transition: all 0.7s;
          .content3-text1 {
            color: #333;
            font-size: 14px !important;
          }
          .content3-text2 {
            font-size: 11px !important;
            color: #333;
            margin-top: 23px !important;
            line-height: 12px;
          }
          .content3-text3 {
            font-size: 11px !important;
            color: #333;
            line-height: 12px;
          }
        }
      }
      .content3-list:hover {
        box-shadow: 0px 0px 30px 0px rgb(12, 59, 95);
      }
      .content3-list:hover > .content3-img1 {
        transform: translateY(-80px) !important;
        transition-duration: 0.7s;
      }
      .content3-list:hover > .content3-img2 {
        transform: translateY(-43px) !important;
        transition-duration: 0.7s;
      }
      .content3-list:hover > .content3-text-wrap {
        transform: translateY(-80px) !important;
        transition-duration: 0.7s;
      }
    }
  }
}

.index-intro8 {
  height: 682px;
  // padding-bottom: 35px;
  background: url("../../assets/img/index3-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .index-intro-title {
    width: 100%;
    height: 103px;
    color: #333;
    font-size: 24px;
    text-align: center;
    line-height: 143px;
    font-weight: 600;
  }
  .content3-list-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content3-list {
      display: inline-block;
      width: 285px;
      height: 260px;
      position: relative;
      overflow: hidden;
      margin-left: 20px;
      border-radius: 4px;
      margin-top: 40px;
      .content3-img1 {
        width: 100%;
        transition: all 0.7s;
      }
      .content3-img2 {
        position: absolute;
        top: 60px;
        left: 113px;
        transition: all 0.7s;
      }
      .content3-text-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 29px 48px 54px 51px;
        background-color: #fff;
        margin-top: -2px;
        transition: all 0.7s;
        .content3-text1 {
          color: #333;
          font-size: 20px;
        }
        .content3-text2 {
          font-size: 14px;
          color: #333;
          margin-top: 28px;
          line-height: 22px;
        }
        .content3-text3 {
          font-size: 14px;
          color: #333;
          line-height: 22px;
        }
      }
    }
    .content3-list:hover {
      box-shadow: 0px 0px 30px 0px rgba(6, 100, 172, 0.4);
    }
    .content3-list:hover > .content3-img1 {
      transform: translateY(-100px);
      transition-duration: 0.7s;
    }
    .content3-list:hover > .content3-img2 {
      transform: translateY(-44px);
      transition-duration: 0.7s;
    }
    .content3-list:hover > .content3-text-wrap {
      transform: translateY(-100px);
      transition-duration: 0.7s;
    }
  }
}
</style>