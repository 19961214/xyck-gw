<template>
  <div>
    <el-row class="index-intro3">
      <div class="index-intro-title">合作方式</div>
      <div class="index-intro3-item6">
        <div class="content">
          <div class="content-item">
            <img src="../../assets/img/back5-2.png" alt />
            <div>1.商务洽谈</div>
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
            <div>4.发放佣金</div>
          </div>
          <div class="content-item content-item5">
            <img src="../../assets/img/back5-6.png" alt />
            <div>5.开票报税</div>
          </div>
        </div>
        <div class="content2">
          <div class="content2-btn" @click="gotoCall">申请合作</div>
        </div>
      </div>
        
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
<style scoped lang="less">
.index-intro3 {
  padding-bottom: 35px;
  height: 500px;
  background: url("../../assets/img/index5-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .index-intro-title {
    width: 100%;
    margin: 60px 0;
    color: #fff;
    font-size: 24px;
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .index-intro3-item6{
    width: 1000px;
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
      background-color: #15abfe;
      color: #fff;
      border: 1px solid #15abfe;
    }
  }
}
</style>