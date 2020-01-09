<template>
  <div id="story-content5">
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
	<storyItem1></storyItem1>
	<storyItem2></storyItem2>
  </div>
</template>

<script>
import storyItem1 from "./story/storyItem1.vue";
import storyItem2 from "./story/storyItem2.vue";
export default {
  name: "vue-index",
  components: {
	storyItem1,
	storyItem2
  },
  mounted() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      console.log(222);
      location.href = "https://h5.xyck.com/story";
    } else {
      console.log(333);
    }
    var dis = document.getElementById("story-content5");
    dis.scrollIntoView();
  }
};
</script>
<style scoped lang="less">
@import url("../assets/css/reset.css");
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

</style>