<template>
  <div id="call-header-back2">
    <div class="hd-item1-wrap">
      <!-- <img  class="index-item1-img" src="../assets/img/index-1.png" alt /> -->
      <div class="index-item1-text-wrap">
        <div class="index-item1-text1">用科技打造更专业的人财税一体化商业服务</div>
        <div class="index-item1-text2-wrap">
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>佣 金 结 算</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>税 收 优 惠</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>人 力 资 源</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>产 业 运 营</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item-wraps">
      <div class="item-wrap">
          <div class="item-title">
            活动资讯 >
            <p>新闻详情</p>
          </div>
          <div class="item-content-wrap">
            <div class="item-content-text1">2018小微企业认定标准 小微企业优惠政策解读</div>
            <div class="item-content-text2">2019-09-20</div>
            <div class="item-content-text3">
              近年来，国家针对小微企业推出了不少扶持优惠政策，创业者大多会选择创立小微企业。下面，厦云创科将为大家讲解小微企业认定标准及小微企业的优惠政策。
              <br />小微企业认定标准
              <br />据了解，小微企业的概念是由经济学家郎咸平提出的，大体是指小型企业、微型企业、个体工商户、家庭作坊等企业。目前，我国企业包括大型企业、中型企业、小型企业和微型企业等多个类别。不同类型企业划分标准各异，现阶段小微企业的划分标准主要有以下三点：
              <br />1、在资产总额方面，工业企业不超过3000万元，其他企业不超过1000万元；
              <br />2、在从业人数方面，工业企业不超过100人，其他企业不超过80人；
              <br />3、在税收指标方面，年度应纳税所得额不超过30万元。
            </div>
            <div class="item-img-wrap">
              <img class="item-img" src="../assets/img/item3.png" alt />
            </div>
            <div class="item-content-text4">
              以上是通过资产、从业人数、税收指标三个方面来认定小微企业，如果你还想了解如何通过行业区分来认定小微企业。更值得关注的是，国家针对小微企业推出了系列税收优惠政策。在增值税、企业所得税、印花税等方面，小微企业可以享受很大的优惠。<br />
              小微企业优惠政策<br />
              增值税优惠政策：<br />
              2017年12月31日—2020年12月31日，月销售额不超过3万元的小规模纳税人，可享受小微企业暂免征收增值税优惠。2017年12月1日—2019年12月31日，对小型企业、微型企业发放小额贷款取得的利息收入，免收增值税。<br />
              企业所得税优惠政策：<br />
              2017年1月1日—2019年12月31日，年应纳税所得额不超过50万元，所得额按50%计入应纳税所得额，同时按20%征收企业所得税。<br />
              印花税优惠政策：<br />
              2018年1月1日-2020年12月31日，对小微企业签订的借款合同免征印花税。<br />
              如还想了解小型微利企业的优惠政策。<br />
              总体来看，小微企业成本低优惠大，对于普通创业者来说是个不错的创业选择。以上就是小微企业认定标准以及税收优惠政策相关内容，希望能给广大创业者提供帮助。
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-storyitem",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var dis = document.getElementById("call-header-back2");
    dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#call-header-back2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  .hd-item1-wrap {
    width: 100%;
    height: 500px;
    margin-top: 58px;
    background: url("../assets/img/zx-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .index-item1-text-wrap {
      .index-item1-text1 {
        font-size: 34px;
        color: #fff;
      }
      .index-item1-text2-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .index-item1-text2 {
          margin-top: 32px;
          display: inline-block;
          img {
            margin-left: 20px;
            width: 16px;
            height: 14px;
          }
          span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-left: 9px;
          }
        }
      }
    }
  }
  .item-wraps {
    margin-top: 30px;
    width: 1000px;
    .item-wrap {
      // margin-top: 40px;
      margin-bottom: 60px;
      padding: 0 0 0 31px; 
      .item-title {
        color: #999;
        font-size: 14px;
        display: inline-block;
        p {
          display: inline-block;
          color: #12b5fe;
        }
      }
      .item-content-wrap {
        width: 100%;
        background-color: #fafafa;
        margin-top: 29px;
        
        padding-left: 31px;
        // padding-right: 59px;
        // padding-bottom: 66px;
        padding-top: 39px;
        .item-content-text1 {
          color: #333;
          font-size: 26px;
        }
        .item-content-text2 {
          margin-top: 19px;
          color: #999;
          font-size: 14px;
        }
        .item-content-text3 {
          margin-top: 37px;
          color: #333;
          font-size: 14px;
          line-height: 22px;
        }
        .item-img-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 41px;
          .item-img {
            width: 416px;
            height: 338px;
          }
        }
        .item-content-text4 {
          margin-top: 28px;
          color: #333;
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>