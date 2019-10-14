<template>
  <div>
    <el-row>
      <el-col :span="24" id="content">
        <img src="../assets/img/back-img1.png" alt />
        <div class="content-text-wrap">
          <div class="content-text1">用科技打造</div>
          <div class="content-text2">更专业的人财税一体化商业服务</div>
          <div class="content-text3">人 力 资 源 &nbsp/&nbsp 佣 金 结 算 &nbsp/&nbsp 税 收 优 惠</div>
          <div class="content-btn" @click="experience">
            <span>立即体验</span>
          </div>
        </div>
        <div class="content-back-img2">
          <img src="../assets/img/back-img2.png" alt />
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
  methods: {
    experience() {
      // var dis = document.getElementById("content-back-img2");
      // dis.scrollIntoView()
      // console.log(dis)



      var dis = document.getElementById("content").getBoundingClientRect()
        .height;
      console.log(dis);

      var top = 0;
      var time1 = setInterval(function() {
        top = top + 10;
        document.documentElement.scrollTop = top;
        document.body.srcollTop = top;
        if (top >= dis-20) {
          clearTimeout(time1);
          return;
        }
      });
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
@media (max-width: 1535px) {
  .content-back-img2 {
    display: none !important;
  }
}
@media (max-width: 1024px) {
  .content .content-text-wrap {
    width: 341px !important;
    height: 156px !important;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -170px !important;
    margin-top: -50px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-text1 {
      color: #fff;
      font-size: 24px !important;
      line-height: 45px !important;
      letter-spacing: 5px !important;
    }
    .content-text2 {
      color: #fff;
      font-size: 24px !important;
      line-height: 45px !important;
    }
    .content-text3 {
      color: #8a9ab6;
      font-size: 10px !important;
      margin-top: 30px !important;
    }
    .content-btn {
      color: #fff;
      font-size: 8px !important;
      width: 70px !important;
      height: 20px !important;
      background-color: #15abfe;
      text-align: center;
      line-height: 20px !important;
      border-radius: 2px !important;
      margin-top: 30px !important;
      cursor: pointer;
    }
  }
}
@media (max-width: 768px) {
  .content .content-text-wrap {
    width: 260px !important;
    height: 120px !important;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -130px !important;
    margin-top: -10px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-text1 {
      color: #fff;
      font-size: 15px !important;
      line-height: 20px !important;
      letter-spacing: 3px !important;
    }
    .content-text2 {
      color: #fff;
      font-size: 15px !important;
      line-height: 20px !important;
      letter-spacing: 3px !important;
    }
    .content-text3 {
      color: #8a9ab6;
      font-size: 8px !important;
      margin-top: 15px !important;
    }
    .content-btn {
      color: #fff;
      font-size: 8px !important;
      width: 70px !important;
      height: 20px !important;
      background-color: #15abfe;
      text-align: center;
      line-height: 20px !important;
      border-radius: 2px !important;
      margin-top: 15px !important;
      cursor: pointer;
    }
  }
}
#content {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .content-text-wrap {
    width: 643px;
    height: 313px;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -321px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-text1 {
      color: #fff;
      font-size: 45px;
      line-height: 90px;
      letter-spacing: 10px;
    }
    .content-text2 {
      color: #fff;
      font-size: 45px;
      line-height: 90px;
    }
    .content-text3 {
      color: #8a9ab6;
      font-size: 20px;
      margin-top: 61px;
    }
    .content-btn {
      color: #fff;
      font-size: 16px;
      width: 140px;
      height: 40px;
      background-color: #15abfe;
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
      margin-top: 61px;
      cursor: pointer;
    }
  }
  .content-back-img2 {
    margin-top: -453px;
    background-color: rgb(28, 54, 111);
  }
}
</style>