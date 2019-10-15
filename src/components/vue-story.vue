<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content3">
        <img src="../assets/img/hd-1.png" alt />
        <div class="cp-content-text-wrap">
          <div class="hd-content-text2">用科技打造更专业的人财税一体化商业服务</div>
          <div class="cp-content-text3">人力资源 &nbsp|&nbsp 佣金结算 &nbsp|&nbsp 税收优惠</div>
          <!-- <div class="cp-content-btn">
            <span>申请试用</span>
          </div> -->
        </div>
      </el-col>
    </el-row>
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
      var dis = document.getElementById("cp-content3");
      dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1480px) {
  #cp-content3 {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 776px;
    height: 313px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -388px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .hd-content-text2 {
      color: #fff;
      font-size: 45px;
	  line-height: 80px;
	//   letter-spacing: 25px;
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
  #cp-content3 {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 776px;
    height: 313px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -388px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .hd-content-text2 {
      color: #fff;
      font-size: 25px !important;
	  line-height: 80px;
	//   letter-spacing: 25px;
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
  #cp-content3 {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 776px;
    height: 313px;
    position: absolute;
    top: 70% !important;
    left: 50%;
    margin-left: -388px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .hd-content-text2 {
      color: #fff;
      font-size: 18px !important;
	  line-height: 80px;
	//   letter-spacing: 15px !important;
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
#cp-content3 {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
  .cp-content-text-wrap {
    width: 776px;
    height: 313px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -388px;
    margin-top: -156px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .hd-content-text2 {
      color: #fff;
      font-size: 40px;
	  line-height: 80px;
	//   letter-spacing: 25px;
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