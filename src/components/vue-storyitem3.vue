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
            <div class="item-content-text1">两会提议：自由职业者要纳入正式社会职业体系？</div>
            <div class="item-content-text2">2019-08-07</div>
            <div class="item-content-text3">
              互联网时代进一步迈向人工智能时代，人人都是自媒体，服务产业，共享经济成为新潮流，自由职业在兴起，而高额的劳务报酬所得税，却成为自由职业者迈不过去的一道坎。<br>
              十三届全国人大二次会议上，2019政府工作报告提出，要“加强对灵活就业、新就业形态的支持”。对于这一点，有人大代表提出《关于关注自由职业者社会保障、完善社会治理的建议》，希望国家出台相关政策支持和保障自由职业者发展。
            </div>
            <div class="item-img-wrap">
              <img class="item-img" src="../assets/img/item2.png" alt />
            </div>
            <div class="item-content-text4">
              《建议》中提出了三点具体建议：<br>
              1、承认和提升自由职业者的社会定位，将自由职业者纳入正式的社会职业体系和就业统计中。<br>
              2、完善自由职业者的社会保障制度，实现自由职业者能够异地参保、便捷参保，消灭社会福利真空。<br>
              3、建议完善自由职业者的税务政策，降低自由职业者的税负等。
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
      padding: 39px 0 0 31px; 
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