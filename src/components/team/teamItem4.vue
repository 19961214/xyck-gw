<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro4">
      <div class="jj-intro-title4">应用案例</div>
      <div class="lb-content4-wrap">
        <el-carousel
          trigger="click"
          arrow="always"
          indicator-position="outside"
          class="lb4-cartoon"
        >
          <el-carousel-item>
            <div class="lb-item-wrap">
              <div class="jj-content4-img">
                <img src="../../assets/img/jj17.png" alt />
              </div>
              <div class="jj-content4-text">
                <div class="jj-content4-text1">[案例1]</div>
                <div
                  class="jj-content4-text2"
                >某北京互联网教育公司，主要经营线上培训教学业务，教师在该公司的教学平台上进行教学，但平台与教师之间存在资金流转不合规、税务成本高等问题，后来该教公司与我司达成合作，给平台教师的相关佣金报酬。</div>
                <div
                  class="jj-content4-text3"
                >采用我司的掌税通平台来完成佣金线上支付，该教育公司业务流程与资金流程达成一致、并通过掌税通平台进行合法纳税实现合理节税。</div>
              </div>
            </div>
          </el-carousel-item>

          <el-carousel-item>
            <div class="lb-item-wrap">
              <div class="jj-content4-img">
                <img src="../../assets/img/jj18.png" alt />
              </div>
              <div class="jj-content4-text">
                <div class="jj-content4-text1">[案例2]</div>
                <div
                  class="jj-content4-text2"
                >某上海贷运代理公司，主要经营贷运代理业务，服务于该公司的司机属于自然人类别，收到该公司的劳务报酬后无条件办理开票，导致公司无法建账等问题。</div>
                <div
                  class="jj-content4-text3 jj-content4-text3s"
                >后来该货运公司通过与我司达成合作，将司机的报酬通过掌税通平台进行发放，掌税通帮助司机进行完税结算，司机收到劳务报酬后，由掌税通代开发票，从而降低了企业经营风险。</div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="lb-item-wrap">
              <div class="jj-content4-img">
                <img src="../../assets/img/jj19.png" alt />
              </div>
              <div class="jj-content4-text">
                <div class="jj-content4-text1">[案例3]</div>
                <div class="jj-content4-text2">某深圳互联网企业，主要经营商务咨询业务，一年收入500万元，在日常操作中，该企业需要缴纳136万的税收。</div>
                <div
                  class="jj-content4-text3"
                >后来该企业通过与我司合作，采用“掌钱进”的计划，成立一家个人独资企业，500万收入只需缴纳23.6万的税收，综合税负率4.72%，节税比例高达70%以上，利用国家政策合理节税，增加收入。</div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="lb-item-wrap">
              <div class="jj-content4-img">
                <img src="../../assets/img/jj20.png" alt />
              </div>
              <div class="jj-content4-text">
                <div class="jj-content4-text1">[案例4]</div>
                <div
                  class="jj-content4-text2"
                >某直播平台头号大V网红，通过直播短视频等方式实现年收入102万元，其采用传统纳税方法纳税的话，税负太高，因此后来找到我司帮其进行税务筹划。</div>
                <div
                  class="jj-content4-text3"
                >我司提供的“掌钱进”计划，帮助此网红成立个人工作室，个人工作室与直播平台签订服务合同，平台公司将薪酬以服务费的形式打入个人工作室，该个人工作室享受超低税率，仅需缴纳4.52万元。</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem4"
};
</script>
<style lang="less">
@media (max-width: 1170px) {
  .jj-index-intro4 {
    background-color: #fff;
    padding-bottom: 87px;
    .jj-intro-title4 {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight:600;
    }
    .lb-content4-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .lb4-cartoon {
        width: 900px;
        height: 350px;
        .lb-item-wrap {
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
          .jj-content4-img {
            width: 450px !important;
            height: 350px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .jj-content4-text {
            width: 450px !important;
            height: 162px;
            .jj-content4-text1 {
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(21, 171, 254, 1);
              line-height: 90px;
              padding: 29px 0 0 29px !important;
            }
            .jj-content4-text2 {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              line-height: 22px;
              padding: 0 91px 0 30px !important;
            }
            .jj-content4-text3 {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              line-height: 22px;
              padding: 0 91px 0 30px !important;
              margin-top: 10px;
              padding-bottom: 80px !important;
            }
            .jj-content4-text3s {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
.jj-index-intro4 {
  background-color: #fff;
  padding-bottom: 87px;
  .jj-intro-title4 {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:600;
    
  }
  .lb-content4-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .lb4-cartoon {
      width: 1200px;
      height: 350px;
      .lb-item-wrap {
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        .jj-content4-img {
          width: 400px;
          height: 260px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .jj-content4-text {
          width: 600px;
          height: 350px;
          .jj-content4-text1 {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 600;
            color: rgba(21, 171, 254, 1);
            line-height: 90px;
            padding: 10px 0 0 60px;
          }
          .jj-content4-text2 {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            padding: 0 96px 0 60px;
          }
          .jj-content4-text3 {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            padding: 0 96px 0 60px;
            margin-top: 10px;
            padding-bottom: 78px;
          }
          .jj-content4-text3s {
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>