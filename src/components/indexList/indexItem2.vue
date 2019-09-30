<template>
  <div>
    
    <el-row class="index-intro2">
      <div class="index-intro-title">云生态网络—全方位服务</div>
      <div class="index-intro-title2">
        <div class="div-one">掌掌财管理系统</div>
        <div>掌掌财APP</div>
        <div>掌掌财小程序</div>
      </div>
      <el-col :span="16" :offset="4">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back-img5.png" alt />
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌掌财云端管理系统</div>
            <div class="img-wrap-text2">一站式佣金结算、发票开具、个税申报管理系统</div>
            <div class="img-wrap-text3">提供云端应用技术，7X24 贴心服务</div>
            <div class="img-wrap-text4">专业运营管理团队、技术研发团队</div>
            <div class="img-wrap-text5">打造人财税一体化云生态网络</div>
          </div>
        </el-col>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  name: "indexItem2"
};
</script>
<style lang="less">
.index-intro2 {
  background-color: rgb(247, 252, 255);
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
  .index-intro-title2 {
    display: flex;
    justify-content: center;
    div {
      margin-left: 102px;
      padding-bottom: 11px;
      font-size: 16px;
      color: #333333;
    }
    .div-one {
      margin-left: 0;
      color: #15abfe;
      border-bottom: 3px solid #15abfe;
    }
  }
  .img-wrap {
    img{
      width: 100%;
      height: 100%;
    }
  }
  .img-wrap2 {
    padding: 95px 0 168px 61px;
    .img-wrap-text1{
      color: #15ABFE;
      font-size: 20px;
    }
    .img-wrap-text2{
      color: #333333;
      font-size: 14px;
      margin-top: 40px;
    }
    .img-wrap-text3{
      color: #333333;
      font-size: 14px;
      margin-top: 40px;
      line-height: 26px;
    }
    .img-wrap-text4{
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .img-wrap-text5{
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
  }
}
</style>