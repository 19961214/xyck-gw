<template>
  <div>
    <!-- 产品介绍 -->
    <div class="cp5-index-intro5">
      <div class="cp5-index-intro-title">为什么选择厦云创科？</div>
      <div class="cp5-index-intro-titles">公司优势 / 技术优势</div>
      <div class="cp5-content-wrap">
        <div class="cp5-content-one-wrap">
          <div class="cp5-content-one">
            <div class="cp5-item cp5-item-top">
              <img class="cp5-item-img" src="../../assets/img/cp11.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">方案严谨合规</p>
                <p class="cp5-text2">自由职业者平台商业模式专家+税务专家共同打造合法合规解决方案</p>
              </div>
            </div>

            <div class="cp5-item">
              <img class="cp5-item-img" src="../../assets/img/cp2.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">深度政府合作</p>
                <p class="cp5-text2">省级税务机关认可，指定委托代征机构</p>
              </div>
            </div>
            <div class="cp5-item">
              <img class="cp5-item-img" src="../../assets/img/cp3.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">最佳成本模型</p>
                <p class="cp5-text2">结构优化，有效降低支付成本</p>
              </div>
            </div>
            <div class="cp5-item">
              <img class="cp5-item-img" src="../../assets/img/cp4.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">安全高效零误差</p>
                <p class="cp5-text2">全流程在线操作，资金转账安全便捷</p>
              </div>
            </div>
          </div>

          <div class="cp5-content-one">
            <div class="cp5-item cp5-item-top">
              <img class="cp5-item-img" src="../../assets/img/cp5.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">流程定制化</p>
                <p class="cp5-text2">一键智能上传代发数据</p>
              </div>
            </div>

            <div class="cp5-item">
              <img class="cp5-item-img" src="../../assets/img/cp6.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">资金安全保障</p>
                <p class="cp5-text2">银联专属同道无缝对接</p>
              </div>
            </div>
            <div class="cp5-item">
              <img class="cp5-item-img" src="../../assets/img/cp7.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">多重数据加密</p>
                <p class="cp5-text2">佣金数据双节点四重加密处理</p>
              </div>
            </div>
            <div class="cp5-item">
              <img class="cp5-item-img" src="../../assets/img/cp8.png" alt />
              <div class="cp5-text-wrap">
                <p class="cp5-text1">简化操作流程</p>
                <p class="cp5-text2">专户管理，批量代发秒到账</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexItem1"
};
</script>
<style scoped lang="less">
.cp5-index-intro5 {
  // padding-top: 60px;
  background-color: #fff;
  padding-bottom: 140px;
  .cp5-content-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .cp5-content-one-wrap {
      .cp5-content-one {
        display: inline-block;
      }
    }
  }
  .cp5-index-intro-title {
    width: 100%;
    padding: 60px 0 16px 0;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight:600;
  }
  .cp5-index-intro-titles {
    width: 100%;
    height: 16px;
    padding-bottom: 70px;
    color: #999;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cp5-item {
    width: 430px;
    height: 99px;
    display: flex;
    margin-top: 47px;
    margin-left: 30px;
    // .cp5-item-img{
    //   width: 89px;
    //   height: 99px;
    // }
    .cp5-text-wrap {
      padding: 7px 0 7px 30px;
      
      .cp5-text1 {
        color: #333;
        font-size: 16px;
        margin-bottom: 14px;
      }
      .cp5-text2 {
        width:329px;
        color: #999;
        font-size: 14px;
        padding-top: 16px;
        border-top: 1px solid rgba(245,245,245,1);
        line-height: 25px;
      }
    }
  }
  // .cp5-item:hover {
  //   box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
  // }
  .cp5-item-top {
    margin-top: 0;
  }
}
</style>