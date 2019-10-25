<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro">
      <div class="jj-intro-title">典型应用行业</div>
      <div class="jj-content1-wrap">
        <div class="jj-content1-item">
          <img src="../../assets/img/jj1.png" alt />
          <div class="content1-item-div11">直播与短视频</div>
          <div class="content1-item-div21">
            <p class="item-div21-p1">直播与短视频</p>
            <p class="item-div21-p2">短视频即短片视频，是一种互联网内容传播方式，一般是在互联网新媒体上传播的时长在5分钟以内的视频。</p>
          </div>
        </div>
        <div class="jj-content1-item">
          <img src="../../assets/img/jj2.png" alt />
          <div class="content1-item-div12">在线教育</div>
          <div class="content1-item-div21">
            <p class="item-div21-p1">在线教育</p>
            <p
              class="item-div21-p2"
            >在线教育平台即在线网络的教育平台。是面向全国的零距离资源共享，是一种全新交流方式的教育学习平台。利用网络先进的技术改变师生的交流教育方式，是互联网+时代的重要组成领域。</p>
          </div>
        </div>
        <div class="jj-content1-item">
          <img src="../../assets/img/jj3.png" alt />
          <div class="content1-item-div13">互联网医疗</div>
          <div class="content1-item-div21">
            <p class="item-div21-p1">互联网医疗</p>
            <p
              class="item-div21-p2"
            >互联网医疗，是互联网在医疗行业的新应用，其包括了以互联网为载体和技术手段的健康教育、医疗咨询、疾病评估、远程会诊等形式的健康医疗服务。互联网医疗代表了医疗行业未来的发展方向。</p>
          </div>
        </div>
        <div class="jj-content1-item">
          <img src="../../assets/img/jj4.png" alt />
          <div class="content1-item-div14">生活服务</div>
          <div class="content1-item-div21">
            <p class="item-div21-p1">生活服务</p>
            <p
              class="item-div21-p2"
            >生活服务平台是基于生活服务行业并为之服务的一种比较完善的电子商务形式。紧密连接消费者和服务行业，能使服务行业及时高效地为消费者服务,比如装修服务、出行服务等。</p>
          </div>
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
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
        .content1-item-div11 {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 169px !important;
          left: 32px !important;
        }
        .content1-item-div21 {
          width: 210px !important;
          height: 360px;
          background-color: rgba(0, 0, 0, 0.4);
          font-size: 14px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          .item-div21-p2 {
            padding: 0 36px 0 33px;
            margin-top: 5px !important;
          }
          .item-div21-p1 {
            padding: 20px 50px 0 50px !important;
            font-size: 18px !important;
            font-weight: 300;
            color: rgba(255, 255, 255, 1);
            line-height: 90px;
          }
        }
        .content1-item-div12 {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 169px !important;
          left: 57px !important;
        }
        .content1-item-div13 {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 170px !important;
          left: 45px !important;
        }
        .content1-item-div14 {
          font-size: 24px !important;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
          position: absolute;
          top: 170px !important;
          left: 57px !important;
        }
      }
      .jj-content1-item:hover > .content1-item-div21 {
        transform: translateY(-360px);
        transition: all 0.4s ease-in-out;
      }
      .jj-content1-item:hover > .content1-item-div11 {
        display: none;
      }
      .jj-content1-item:hover > .content1-item-div12 {
        display: none;
      }
      .jj-content1-item:hover > .content1-item-div13 {
        display: none;
      }
      .jj-content1-item:hover > .content1-item-div14 {
        display: none;
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
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .content1-item-div11 {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 167px;
        left: 60px;
      }
      .content1-item-div21 {
        width: 277.5px;
        height: 360px;
        background-color: rgba(0, 0, 0, 0.4);
        font-size: 14px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        .item-div21-p2 {
          padding: 0 36px 0 33px;
          margin-top: 27px;
        }
        .item-div21-p1 {
          padding: 50px 60px 0 60px;
          font-size: 26px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 90px;
        }
      }
      .content1-item-div12 {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 167px;
        left: 87px;
      }
      .content1-item-div13 {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 168px;
        left: 74px;
      }
      .content1-item-div14 {
        font-size: 26px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 90px;
        position: absolute;
        top: 168px;
        left: 87px;
      }
    }
    // .jj-content1-item:hover {
    //   transform: translateY(-50px);
    //   transition: all 0.4s ease-in-out;
    // }
    .jj-content1-item:hover > .content1-item-div21 {
      transform: translateY(-360px);
      transition: all 0.4s ease-in-out;
    }
    .jj-content1-item:hover > .content1-item-div11 {
      display: none;
    }
    .jj-content1-item:hover > .content1-item-div12 {
      display: none;
    }
    .jj-content1-item:hover > .content1-item-div13 {
      display: none;
    }
    .jj-content1-item:hover > .content1-item-div14 {
      display: none;
    }
  }
}
</style>