<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro">
      <div class="jj-intro-title">典型应用行业</div>
      <div class="jj-content1-wrap">
        <div class="jj-content1-item">
          <img src="../../assets/img/jj1.png" alt />
          <div>直播与短视频</div>
        </div>
        <div class="jj-content1-item">
          <img src="../../assets/img/jj2.png" alt />
          <div>在线教育</div>
        </div>
        <div class="jj-content1-item">
          <img src="../../assets/img/jj3.png" alt />
          <div>互联网医疗</div>
        </div>
        <div class="jj-content1-item">
          <img src="../../assets/img/jj4.png" alt />
          <div>生活服务</div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem1"
};
</script>
<style lang="less">
@media (max-width: 1250px) {
  .jj-index-intro {
    background-color: #fff;
    padding-bottom: 87px;
    .jj-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .jj-content1-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .jj-content1-item {
        width: 210px !important;
        height: 360px !important;
        margin-left: 21px !important;
        position: relative;
        transition: all 0.4s ease-in-out;
        img {
          width: 100%;
          height: 100%;
        }
        div:nth-child(1) {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 169px !important;
          left: 32px !important;
        }
        div:nth-child(2) {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 169px !important;
          left: 57px !important;
        }
        div:nth-child(3) {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 170px !important;
          left: 45px !important;
        }
        div:nth-child(4) {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 170px !important;
          left: 57px !important;
        }
      }
      .jj-content1-item:hover {
        transform: translateY(-50px);
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
.jj-index-intro {
  background-color: #fff;
  padding-bottom: 87px;
  .jj-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jj-content1-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .jj-content1-item {
      width: 277.5px;
      height: 360px;
      margin-left: 30px;
      position: relative;
      transition: all 0.4s ease-in-out;
      img {
        width: 100%;
        height: 100%;
      }
      div:nth-child(1) {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 167px;
        left: 60px;
      }
      div:nth-child(2) {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 167px;
        left: 87px;
      }
      div:nth-child(3) {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 168px;
        left: 74px;
      }
      div:nth-child(4) {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 168px;
        left: 87px;
      }
    }
    .jj-content1-item:hover {
      transform: translateY(-50px);
      transition: all 0.4s ease-in-out;
    }
  }
}
</style>