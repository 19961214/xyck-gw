<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro">
      <div class="jj-intro-title">典型应用行业</div>
      <div class="jj-content1-wrap">
        <div class="jj-content1-wraps">
          <div class="jj-content1-item" style="margin-left: 0;">
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
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem1"
};
</script>
<style scoped lang="less">
.jj-index-intro {
  margin-top: 40px;
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
    font-weight: 600;
  }
  .jj-content1-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .jj-content1-wraps {
      width: 1000px;
      display: flex;
    }
    .jj-content1-item {
      width: 231.8px;
      height: 300.7px;
      margin-left: 25px;
      position: relative;
      transition: all 0.4s ease-in-out;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .content1-item-div11 {
        font-size: 20px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 75px;
        position: absolute;
        top: 120px;
        left: 55px;
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
          font-size: 14px;
          padding: 0 60px 0 30px;
          // margin-top: 27px;
        }
        .item-div21-p1 {
          padding: 34px 49px 0 49px;
          font-size: 22px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 75px;
        }
      }
      .content1-item-div12 {
        font-size: 20px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 75px;
        position: absolute;
        top: 120px;
        left: 75px;
      }
      .content1-item-div13 {
        font-size: 20px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 75px;
        position: absolute;
        top: 120px;
        left: 65px;
      }
      .content1-item-div14 {
        font-size: 20px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 75px;
        position: absolute;
        top: 120px;
        left: 75px;
      }
    }
    // .jj-content1-item:hover {
    //   transform: translateY(-50px);
    //   transition: all 0.4s ease-in-out;
    // }
    .jj-content1-item:hover > .content1-item-div21 {
      transform: translateY(-302.7px);
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