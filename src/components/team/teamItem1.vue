<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro">
      <div class="jj-intro-title">典型应用行业</div>
      <el-col :span="16" :offset="4">
        <div class="jj-content1-wrap">
          <div class="jj-content1-item1">
            <div class="jj-content1-text">
              <p class="jj-content1-p1">直播与短视频</p>
              <p class="jj-content1-p2">短视频即短片视频，是一种互联网内容传播方式，一般是在互联网新媒体上传播的时长在5分钟以内的视频。</p>
            </div>
          </div>

          <div class="jj-content1-item1 jj-back2">
            <div class="jj-content1-text">
              <p class="jj-content1-p1">互联网医疗</p>
              <p
                class="jj-content1-p2"
              >互联网医疗，是互联网在医疗行业的新应用，其包括了以互联网为载体和技术手段的健康教育、医疗信息查询、电子健康档案、疾病风险评估、在线疾病咨询、电子处方、远程会诊、及远程治疗和康复等多种形式的健康医疗服务。互联网医疗代表了医疗行业新的发展方向，有利于解决中国医疗资源不平衡和人们日益增加的健康医疗需求之间的矛盾，是卫生部积极引导和支持的医疗发展模式。</p>
            </div>
          </div>

          <div class="jj-content1-item1 jj-back3">
            <div class="jj-content1-text">
              <p class="jj-content1-p1">在线教育</p>
              <p
                class="jj-content1-p2"
              >在线教育平台即在线网络的教育平台。是面向全国的零距离资源共享，是一种全新交流方式，一种新型工具平台，一种新教育学习平台。在线教育平台利用一切工具进行教育活动皆以提高效率为前提。利用网络先进的技术改变师生的交流方式上课，进一步提高学生掌握知识的效率、进一步培养能力是网络教育研究的实质。</p>
            </div>
          </div>

          <div class="jj-content1-item1 jj-back4">
            <div class="jj-content1-text">
              <p class="jj-content1-p1">生活服务</p>
              <p
                class="jj-content1-p2"
              >生活服务平台是基于生活服务行业并为之服务的一种比较完善的电子商务形式。主要连接消费者和生活服务行业，使之间能更好的进行沟通，能使服务行业及时高效地为消费者服务,比如装修服务、出行服务等。</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem1"
};
</script>
<style lang="less">
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
      overflow: hidden;
    .jj-content1-item1 {
      width: 590px;
      height: 200px;
      display: inline-block;
      background: url("../../assets/img/jj1.png") center center no-repeat;
      color: #fff;
      float: left;
      margin: 20px;
      .jj-content1-text {
        padding: 31px 44px 0 30px;
        .jj-content1-p1 {
          font-size: 20px;
        }
        .jj-content1-p2 {
          font-size: 14px;
          margin-top: 17px;
        }
      }
    }
    .jj-back2 {
      background: url("../../assets/img/jj2.png") center center no-repeat;
    }
    .jj-back3 {
      background: url("../../assets/img/jj3.png") center center no-repeat;
    }
    .jj-back4 {
      background: url("../../assets/img/jj4.png") center center no-repeat;
    }
  }
}
</style>