<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="gy-index-intro1">
      <div class="gy-content1-wrap">
        <div class="gy-content1-text">
          <div class="gy-content1-text1">厦云创科</div>
          <div
            class="gy-content1-text2"
          >杭州厦云创科信息技术有限公司，系厦门大学师兄弟创立，旨在响应政府号召，链接并赋能分享经济平台和自由职业者的集大数据分析及应用，云计算技术开发、创业孵化于一体的科技企业。 团队聚集来自人力资源、互联网、IT技术等行业的精英，团队高管曾任职于平安银行、腾讯、阿里、顺丰等公司重要岗位，采用“互联网+税收优化”解决方案，与政府深圳合作，结合大数据、AI等先进技术实现厦云云生态网络，通过科技打造更专业的人财税一体化商业服务。</div>
        </div>
        <div class="gy-img-wrap gy-img-wrap2">
          <img src="../../assets/img/gy1.png" alt />
        </div>
      </div>

      <div class="gy-content1-wrap">
        <div class="gy-img-wrap">
          <img src="../../assets/img/gy2.png" alt />
        </div>
        <div class="gy-content1-text gy-content1-texts">
          <div class="gy-content1-text1">我们的使命</div>
          <div
            class="gy-content1-text2"
          >随着未来企业与社会用工形式的不断呈现多元的模式转变，加上中国税务政策的不断完善，解决当下应对未来充满挑战的企业及自由职业者的人财税问题，将成为厦云创科为之奋斗的使命。</div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "articleItem1"
};
</script>
<style lang="less">

.gy-index-intro1 {
  background-color: #fff;
  padding-top: 70px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .gy-content1-wrap {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    .gy-content1-text {
      width: 450px;
        height: 260px;
        padding-bottom: 38px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      .gy-content1-text1 {
        color: #333;
        font-size: 24px;
      }
      .gy-content1-text2 {
        width: 397px;
        line-height: 22px;
        margin-top: 28px;
        color: #666;
        font-size: 14px;
      }
    }
    .gy-content1-texts {
      padding: 0 0 0 30px;
      margin-left: 50px;
      float: right;
    }
    .gy-img-wrap {
      display: inline-block;
        width: 450px;
        height: 260px;
        padding-bottom: 40px;
      img {
        display: inline-block;
          width: 450px;
          height: 260px;
      }
    }
    .gy-img-wrap2{
      margin-left: 50px;
    }
  }
}
</style>