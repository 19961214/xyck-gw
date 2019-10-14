<template>
  <div>
    <el-row class="index-intro2">
      <div class="index-intro-title">云生态网络—全方位服务</div>
      <div class="index-intro-title2">
        <div :class="{'div-one':state==1}" class="div-two" @click="cut1">厦云创科云端管理系统</div>
        <div :class="{'div-one':state==2}" @click="cut2">掌掌财APP</div>
        <div :class="{'div-one':state==3}" @click="cut3">掌掌财小程序</div>
      </div>
      <el-col :span="16" :offset="4" v-if="state==1">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back-img5.png" alt />
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">厦云创科云端管理系统</div>
            <div class="img-wrap-text2">一站式佣金结算、发票开具、个税申报管理系统</div>
            <div class="img-wrap-text3">提供云端应用技术，7X24 贴心服务</div>
            <div class="img-wrap-text4">专业运营管理团队、技术研发团队</div>
            <div class="img-wrap-text5">打造人财税一体化云生态网络</div>
          </div>
        </el-col>
      </el-col>

      <el-col :span="16" :offset="4" v-if="state==2">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back2-2.png" alt />
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌掌财APP</div>
            <div class="img-wrap-text3">自由职业者APP</div>
            <div class="img-wrap-text4">一键签约，一键收款，一键理财</div>
            <div class="img-wrap-text2">企业服务端APP</div>
            <div class="img-wrap-text5">一键结算，一键打款，一键开票</div>
            <div class="img-wrap-btn" @click="gotoProduct3">了解更多 ></div>
          </div>
        </el-col>
      </el-col>

      <el-col :span="16" :offset="4" v-if="state==3">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back2-3.png" alt />
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌掌财小程序</div>
            <div class="img-wrap-text2">轻量级应用，无需登录APP也可一步实现电子合同签约</div>
            <div class="img-wrap-text4">收款记录实时查询，便捷高效</div>
            <div class="img-wrap-btn" @click="gotoProduct4">了解更多 ></div>
            <!-- <div class="img-wrap-text4">专业运营管理团队、技术研发团队</div>
            <div class="img-wrap-text5">打造人财税一体化云生态网络</div>-->
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem2",
  data() {
    return {
      state: 1
    };
  },
  methods: {
    cut1() {
      this.state = 1;
    },
    cut2() {
      this.state = 2;
    },
    cut3() {
      this.state = 3;
    },
    gotoProduct3(){
      window.localStorage.setItem("a", "3");
       this.$router.push({path:"/product"})
    },
    gotoProduct4(){
      window.localStorage.setItem("a", "4");
       this.$router.push({path:"/product"})
    }
  }
};
</script>
<style lang="less">
.index-intro2 {
  background-color: #f7fcff;
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
      cursor:pointer;
    }
    .div-one {
      color: #15abfe;
      border-bottom: 3px solid #15abfe;
    }
    .div-two {
      margin-left: 0;
    }
  }
  .img-wrap {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-wrap2 {
    padding: 95px 0 168px 61px;
    .img-wrap-text1 {
      color: #15abfe;
      font-size: 20px;
    }
    .img-wrap-text2 {
      color: #333333;
      font-size: 14px;
      margin-top: 40px;
    }
    .img-wrap-text3 {
      color: #333333;
      font-size: 14px;
      margin-top: 40px;
      line-height: 26px;
    }
    .img-wrap-text4 {
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .img-wrap-text5 {
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .img-wrap-btn {
      font-size: 16px;
      color: #15abfe;
      line-height: 90px;
      cursor:pointer;
    }
  }
}
</style>