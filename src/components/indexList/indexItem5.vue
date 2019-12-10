<template>
  <div>
    <el-row class="index-intro3">
      <div class="index-intro-title">合作方式</div>
      <el-col :span="16" :offset="4">
        <div class="content">
          <div class="content-item">
            <img src="../../assets/img/back5-2.png" alt />
            <div>1.商务谈判</div>
          </div>
          <div class="content-item">
            <img src="../../assets/img/back5-3.png" alt />
            <div>2.签约合作</div>
          </div>
          <div class="content-item">
            <img src="../../assets/img/back5-4.png" alt />
            <div>3.银行打款</div>
          </div>
          <div class="content-item">
            <img src="../../assets/img/back5-5.png" alt />
            <div>4.代理发放</div>
          </div>
          <div class="content-item content-item5">
            <img src="../../assets/img/back5-6.png" alt />
            <div>5.开票回执</div>
          </div>
        </div>
        <div class="content2">
          <div class="content2-btn" @click="gotoCall">申请合作</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem3",
  methods: {
    gotoCall(){
       this.$router.push({path:"/call"})
    }
  }
};
</script>
<style lang="less">
.index-intro3 {
  padding-bottom: 35px;
  height: 500px;
  background: url("../../assets/img/index5-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  .index-intro-title {
    width: 100%;
    height: 143px;
    color: #fff;
    font-size: 24px;
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .content-item {
      color: #fff;
      img {
        margin-bottom: 37px;
      }
    }
    .content-item5 {
      margin-right: 0px;
    }
  }
  .content2 {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .content2-btn {
      width: 140px;
      height: 40px;
      color: #fff;
      border: 1px solid #fff;
      border-radius:20px;
      text-align: center;
      line-height: 40px;
      cursor:pointer;
    }
    .content2-btn:hover{
      background-color: #fff;
      color: #15abfe;
      border: 1px solid #fff;
    }
  }
}
</style>