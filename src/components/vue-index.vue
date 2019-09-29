<template>
  <div>
    <el-row>
      <el-col :span="24" class="content">
        <img src="../assets/img/back-img1.png" alt />
        <div class="content-text-wrap">
          <div class="content-text1">用科技打造</div>
          <div class="content-text2">更专业的人财税一体化商业服务</div>
          <div class="content-text3">人 力 资 源 / 佣 金 结 算 / 税 收 优 惠</div>
          <div class="content-btn"><span>立即体验</span></div>
        </div>
		<div class="content-back-img2"><img src="../assets/img/back-img2.png" alt /></div>
      </el-col>
	  
    </el-row>
    <el-row class="index-intro">
      <el-col :span="18" :offset="3">
        <p>哥特创办于1999年2月美国奥斯汀，创办者Gladius，毕业于耶鲁大学，教育学和经济学双硕士，辅修心理学。至今18年的风雨历程，哥特创始人Gladius把美式教育从美国奥斯汀带到纽约，芝加哥，洛杉矶，继而走进中国。2010年，哥特中国兰州分公司成立，这意味着美式教育在中国开始生根发芽，历经7年野蛮成长后，哥特打造的我的专属美式教育在杭州正式拉开帷幕。</p>
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
  .content .content-text-wrap{
	  width: 341px !important;
	  height: 156px!important;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin-left: -170px !important;
	  margin-top: -50px !important;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  .content-text1{
		  color: #fff;
		  font-size: 24px !important;
		  line-height: 45px !important;
		  letter-spacing:5px !important;
	  }
	  .content-text2{
		  color: #fff;
		  font-size: 24px !important;
		  line-height: 45px !important;
	  }
	  .content-text3{
		  color: #8A9AB6;
		  font-size: 10px !important;
		  margin-top: 30px !important;
	  }
	  .content-btn{
		  color: #fff;
		  font-size: 8px !important;
		  width: 70px !important;
		  height: 20px !important;
		  background-color: #15ABFE;
		  text-align: center;
		  line-height: 20px !important;
		  border-radius: 2px !important;
		  margin-top: 30px !important;
	  }
  }
}
@media (max-width: 768px) {
  .content .content-text-wrap{
	  width: 260px !important;
	  height: 120px!important;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin-left: -130px !important;
	  margin-top: -10px !important;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  .content-text1{
		  color: #fff;
		  font-size: 15px !important;
		  line-height: 20px !important;
		  letter-spacing:3px !important;
	  }
	  .content-text2{
		  color: #fff;
		  font-size: 15px !important;
		  line-height: 20px !important;
		  letter-spacing:3px !important;
	  }
	  .content-text3{
		  color: #8A9AB6;
		  font-size: 8px !important;
		  margin-top: 15px !important;
	  }
	  .content-btn{
		  color: #fff;
		  font-size: 8px !important;
		  width: 70px !important;
		  height: 20px !important;
		  background-color: #15ABFE;
		  text-align: center;
		  line-height: 20px !important;
		  border-radius: 2px !important;
		  margin-top: 15px !important;
	  }
  }
}
.content {
  margin: 0 auto;
  transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .content-text-wrap{
	  width: 643px;
	  height: 313px;
	  position: absolute;
	  top: 48%;
	  left: 50%;
	  margin-left: -321px;
	  margin-top: -156px;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  .content-text1{
		  color: #fff;
		  font-size: 45px;
		  line-height: 90px;
		  letter-spacing:10px;
	  }
	  .content-text2{
		  color: #fff;
		  font-size: 45px;
		  line-height: 90px;
	  }
	  .content-text3{
		  color: #8A9AB6;
		  font-size: 20px;
		  margin-top: 61px;
	  }
	  .content-btn{
		  color: #fff;
		  font-size: 16px;
		  width: 140px;
		  height: 40px;
		  background-color: #15ABFE;
		  text-align: center;
		  line-height: 40px;
		  border-radius: 5px;
		  margin-top: 61px;
	  }
  }
  .content-back-img2{
	  margin-top: -358px;
	  background-color: rgb(28, 54, 111)
  }
}
.index-intro {
  margin-top: -5px;
  background-color: #d2d3d5;
  p {
    padding: 50px 0;
    line-height: 30px;
  }
}
</style>