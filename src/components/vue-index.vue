<template>
  <div>
    <el-row>
      <el-col :span="24" class="content">
        <img src="../assets/img/back-img1.png" alt />
        <div class="content-text-wrap">
          <div class="content-text1">用科技打造</div>
          <div class="content-text2">更专业的人财税一体化商业服务</div>
          <div class="content-text3">人 力 资 源 &nbsp/&nbsp 佣 金 结 算 &nbsp/&nbsp 税 收 优 惠</div>
          <div class="content-btn">
            <span>立即体验</span>
          </div>
        </div>
        <div class="content-back-img2">
          <img src="../assets/img/back-img2.png" alt />
        </div>
      </el-col>
    </el-row>

    <el-row class="index-intro">
      <div class="index-intro-title">产品介绍</div>
      <el-col :span="16" :offset="4">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../assets/img/back-img3.png" alt />
          </div>
        </el-col>
		<el-col :span="12" :offset="0">
          <div class="img-wrap">
            <div>掌税通</div>
			<div>SaaS服务平台，专注于“互联网+税收优化”</div>
			<div>解决企业服务端与自由职业者之间的佣金结算发放、代征税收等服务</div>
			<div>了解更多 ></div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "vue-index"
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
    }
  }
}
.content {
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
    }
  }
  .content-back-img2 {
    margin-top: -453px;
    background-color: rgb(28, 54, 111);
  }
}
.index-intro {
  background-color: #fff;
  .index-intro-title {
    width: 100%;
    height: 143px;
	color: #333;
	font-size: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
  }
  .img-wrap {
    background-color: red;
    img {
      width: 600px;
      height: 350px;
    }
  }
}
</style>