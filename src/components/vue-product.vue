<template>
  <div>
    <el-row>
      <el-col :span="24" class="cp-content">
        <img src="../assets/img/cp-1.png" alt />
        <div class="cp-content-text-wrap">
          <div class="cp-content-text2">我们的产品</div>
          <div class="cp-content-text3">掌税通 &nbsp/&nbsp 掌钱进 &nbsp/&nbsp 掌掌财</div>
          <div class="cp-content-btn">
            <span>申请试用</span>
          </div>
        </div>
      </el-col>
    </el-row>
	<productItem1></productItem1>
	<productItem2></productItem2>
	<productItem3></productItem3>
	<productItem4></productItem4>
	<productItem5></productItem5>
  </div>
</template>

<script>
import productItem1 from "./product/productItem1.vue";
import productItem2 from "./product/productItem2.vue";
import productItem3 from "./product/productItem3.vue";
import productItem4 from "./product/productItem4.vue";
import productItem5 from "./product/productItem5.vue";
export default {
  name: "vue-index",
  components: {
	productItem1,
	productItem2,
	productItem3,
	productItem4,
	productItem5
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1480px) {
  .cp-content {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 643px;
    height: 313px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -321px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .cp-content-text2 {
      color: #fff;
      font-size: 45px;
	  line-height: 80px;
	  letter-spacing: 25px;
	  transform: translateY(50px);
    }
    .cp-content-text3 {
      color: #FFFFFF;
      font-size: 20px;
	  margin-top: 60px;
	  line-height: 49px;
    }
    .cp-content-btn {
      color: #fff;
      font-size: 16px;
      width: 140px;
      height: 40px;
      text-align: center;
	  line-height: 40px;
	  border: 1px solid #fff;
      border-radius: 20px;
      margin-top: 40px !important;
      cursor:pointer;
    }
  }
}
}
@media (max-width: 1024px) {
  .cp-content {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 643px;
    height: 313px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -321px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .cp-content-text2 {
      color: #fff;
      font-size: 25px !important;
	  line-height: 80px;
	  letter-spacing: 25px;
	  transform: translateY(50px);
    }
    .cp-content-text3 {
      color: #FFFFFF;
      font-size: 10px !important;
	  margin-top: 30px !important;
	  line-height: 49px;
    }
    .cp-content-btn {
      color: #fff;
      font-size: 16px;
      width: 140px;
      height: 40px;
      text-align: center;
	  line-height: 40px;
	  border: 1px solid #fff;
      border-radius: 20px;
      margin-top: 20px !important;
      cursor:pointer;
    }
  }
}
}
@media (max-width: 768px) {
  .cp-content {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 643px;
    height: 313px;
    position: absolute;
    top: 70% !important;
    left: 50%;
    margin-left: -321px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .cp-content-text2 {
      color: #fff;
      font-size: 18px !important;
	  line-height: 80px;
	  letter-spacing: 15px !important;
	  transform: translateY(80px) !important;
    }
    .cp-content-text3 {
      color: #FFFFFF;
      font-size: 10px !important;
	  margin-top: 40px !important;
	  line-height: 49px;
    }
    .cp-content-btn {
      color: #fff;
      font-size: 13px !important;
      width: 80px !important;
      height: 20px !important;
      text-align: center;
	  line-height: 20px !important;
	  border: 1px solid #fff;
      border-radius: 10px !important;
      margin-top: -3px !important;
      cursor:pointer;
    }
  }
}
}
.cp-content {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 643px;
    height: 313px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -321px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .cp-content-text2 {
      color: #fff;
      font-size: 45px;
	  line-height: 80px;
	  letter-spacing: 25px;
	  transform: translateY(50px);
    }
    .cp-content-text3 {
      color: #FFFFFF;
      font-size: 20px;
	  margin-top: 60px;
	  line-height: 49px;
    }
    .cp-content-btn {
      color: #fff;
      font-size: 16px;
      width: 140px;
      height: 40px;
      text-align: center;
	  line-height: 40px;
	  border: 1px solid #fff;
      border-radius: 20px;
      margin-top: 90px;
      cursor:pointer;
    }
  }
}

</style>