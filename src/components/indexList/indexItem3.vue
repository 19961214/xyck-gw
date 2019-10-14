<template>
  <div>
    <el-row class="index-intro3">
      <div class="index-intro-title">全国数十家税优地资源，一站式代理服务，四大税务服务保障</div>
      <el-col :span="16" :offset="4">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem3"
};
</script>
<style lang="less">
.index-intro3 {
  padding-bottom: 35px;
  .index-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content3-list-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    .content3-list {
      width: 285px;
      height: 260px;
      position: relative;
      overflow: hidden;
      margin-left: 20px;
      .content3-img1 {
        width: 100%;
      }
      // .content3-img1:hover{
      //   transform: translateY(-50px);
      //   transition-duration:1s;
      // }
      .content3-img2 {
        position: absolute;
        top: 60px;
        left: 113px;
      }
      .content3-text-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 29px 48px 54px 51px;
        background-color: #fff;
        margin-top: -2px;
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