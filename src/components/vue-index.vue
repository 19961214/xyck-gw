<template>
  <div>
    <el-row>
      <el-col :span="24" id="content">
        <div class="index1-content-wrap">
          <img class="index1-content-img1" ref="cartoon2" src="../assets/img/index-1-img.png" alt />
          <img class="index1-content-img2" ref="cartoon3" src="../assets/img/index-1-text.png" alt />
          <div class="index1-content-text" ref="cartoon1">用科技打造更专业的</div>
        </div>

        <div class="index1-content-title" ref="cartoon4">
          <div class="index1-content-title1">
            <img src="../assets/img/index-1-xsj.png" alt />
            <div>人 力 资 源</div>
          </div>

          <div class="index1-content-title1 toleft">
            <img src="../assets/img/index-1-xsj.png" alt />
            <div>佣 金 结 算</div>
          </div>

          <div class="index1-content-title1 toleft">
            <img src="../assets/img/index-1-xsj.png" alt />
            <div>税 收 优 惠</div>
          </div>
        </div>

        <div class="index1-content-btn" @click="experience">
          <span>立即体验</span>
        </div>
      </el-col>
    </el-row>
    <indexItem1></indexItem1>
    <indexItem2></indexItem2>
    <indexItem3></indexItem3>
    <indexItem4></indexItem4>
    <indexItem5></indexItem5>
    <indexItem6></indexItem6>
  </div>
</template>

<script>
import indexItem1 from "./indexList/indexItem1.vue";
import indexItem2 from "./indexList/indexItem2.vue";
import indexItem3 from "./indexList/indexItem3.vue";
import indexItem4 from "./indexList/indexItem4.vue";
import indexItem5 from "./indexList/indexItem5.vue";
import indexItem6 from "./indexList/indexItem6.vue";
export default {
  name: "vue-index",
  data() {
    return {
      cartoon: true
    };
  },
  methods: {
    experience() {
      // var dis = document.getElementById("content-back-img2");
      // dis.scrollIntoView()
      // console.log(dis)

      var dis = document.getElementById("content").getBoundingClientRect()
        .height;

      var top = 0;
      var time1 = setInterval(function() {
        top = top + 10;
        document.documentElement.scrollTop = top;
        document.body.srcollTop = top;

        if (top >= dis - 20) {
          clearTimeout(time1);
          return;
        }
      });
    }
  },
  mounted() {
    if (this.cartoon) {
      console.log(this.cartoon)
      this.cartoon = false;
      console.log(this.cartoon)
      this.$refs.cartoon1.classList.add("cartoon1");
      this.$refs.cartoon2.classList.add("cartoon2");
      this.$refs.cartoon3.classList.add("cartoon3");
      this.$refs.cartoon4.classList.add("cartoon4");
      setTimeout(() => {
        this.$refs.cartoon1.classList.remove("cartoon1");
        this.$refs.cartoon1.classList.add("cartoon1s");

        this.$refs.cartoon2.classList.remove("cartoon2");
        this.$refs.cartoon2.classList.add("cartoon2s");

        this.$refs.cartoon3.classList.remove("cartoon3");
        this.$refs.cartoon3.classList.add("cartoon3s");

        this.$refs.cartoon4.classList.remove("cartoon4");
        this.$refs.cartoon4.classList.add("cartoon4s");
      }, 2000);
    }
  },
  components: {
    indexItem1,
    indexItem2,
    indexItem3,
    indexItem4,
    indexItem5,
    indexItem6
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1024px) {
  #content {
  width: 100%;
  height: 876px !important;
  background: url("../assets/img/background.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  .index1-content-wrap {
    width: 228px !important;
    height: 240px !important;
    margin-top: 98px !important;
    position: relative;
    .index1-content-img1 {
      width: 100%;
      height: 100%;
      transform: translateX(-300px);
      opacity: 0;
    }
    .cartoon2 {
      animation: cartoons2 2s linear 1;
    }
    .cartoon2s {
      transform: translateX(0);
      opacity: 1;
    }
    @keyframes cartoons2 {
      0% {
        transform: translateX(-300px);
        opacity: 0.2;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .index1-content-img2 {
      width: 163px !important;
      height: 76px !important;
      position: absolute;
      left: 28px !important;
      bottom: 25px !important;
      transform: translateX(300px);
      opacity: 0;
    }
    .cartoon3 {
      animation: cartoons3 2s linear 1;
    }
    .cartoon3s {
      transform: translateX(0);
      opacity: 1;
    }
    @keyframes cartoons3 {
      0% {
        transform: translateX(300px);
        opacity: 0.2;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .index1-content-text {
      font-size: 22px !important;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 48px !important;
      position: absolute;
      left: 14px !important;
      top: 79px !important;
      transform: translateY(-200px);
      opacity: 0;
    }
    .cartoon1 {
      animation: cartoons1 2s linear 1;
    }
    .cartoon1s {
      transform: translateY(0);
      opacity: 1;
    }
    @keyframes cartoons1 {
      0% {
        transform: translateY(-200px);
        opacity: 0.2;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .index1-content-title {
    display: flex;
    margin-top: 19px !important;
    transform: translateY(200px);
    opacity: 0;
    .index1-content-title1 {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 7px !important;
        height: 12px !important;
      }
      div {
        font-size: 14px !important;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left: 16px !important;
      }
    }
    .toleft {
      margin-left: 23px !important;
    }
  }
  .cartoon4 {
    animation: cartoons4 2s linear 1;
  }
  .cartoon4s {
    transform: translateY(0);
    opacity: 1;
  }
  @keyframes cartoons4 {
    0% {
      transform: translateY(200px);
      opacity: 0.2;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .index1-content-btn {
    width: 100px !important;
    height: 40px !important;
    background: rgba(21, 171, 254, 1);
    border-radius: 4px;
    font-size: 14px !important;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 90px !important;
    margin-top: 41px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}

}


#content {
  width: 100%;
  height: 1080px;
  background: url("../assets/img/background.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  .index1-content-wrap {
    width: 396px;
    height: 417px;
    margin-top: 206px;
    position: relative;
    .index1-content-img1 {
      width: 100%;
      height: 100%;
      transform: translateX(-300px);
      opacity: 0;
    }
    .cartoon2 {
      animation: cartoons2 2s linear 1;
    }
    .cartoon2s {
      transform: translateX(0);
      opacity: 1;
    }
    @keyframes cartoons2 {
      0% {
        transform: translateX(-300px);
        opacity: 0.2;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .index1-content-img2 {
      width: 282px;
      height: 132px;
      position: absolute;
      left: 56px;
      bottom: 35px;
      transform: translateX(300px);
      opacity: 0;
    }
    .cartoon3 {
      animation: cartoons3 2s linear 1;
    }
    .cartoon3s {
      transform: translateX(0);
      opacity: 1;
    }
    @keyframes cartoons3 {
      0% {
        transform: translateX(300px);
        opacity: 0.2;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .index1-content-text {
      font-size: 40px;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 83px;
      position: absolute;
      left: 17px;
      top: 126px;
      transform: translateY(-200px);
      opacity: 0;
    }
    .cartoon1 {
      animation: cartoons1 2s linear 1;
    }
    .cartoon1s {
      transform: translateY(0);
      opacity: 1;
    }
    @keyframes cartoons1 {
      0% {
        transform: translateY(-200px);
        opacity: 0.2;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  .index1-content-title {
    display: flex;
    margin-top: 34px;
    transform: translateY(200px);
    opacity: 0;
    .index1-content-title1 {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 13px;
        height: 22px;
      }
      div {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-left: 16px;
      }
    }
    .toleft {
      margin-left: 40px;
    }
  }
  .cartoon4 {
    animation: cartoons4 2s linear 1;
  }
  .cartoon4s {
    transform: translateY(0);
    opacity: 1;
  }
  @keyframes cartoons4 {
    0% {
      transform: translateY(200px);
      opacity: 0.2;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .index1-content-btn {
    width: 173px;
    height: 69px;
    background: rgba(21, 171, 254, 1);
    border-radius: 4px;
    font-size: 24px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 156px;
    margin-top: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}


</style>