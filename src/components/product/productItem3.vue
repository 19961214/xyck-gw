<template>
  <div>
    <!-- 产品介绍 -->
    <el-row id="cp-index-intro3">
      <el-col :span="16" :offset="4">
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back2-2.png" alt />
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌掌财APP</div>
            <div
              class="cp-img-wrap-text2"
            >掌掌财APP，是厦云创科推出的一款企业服务者及自由职业者均可使用的移动端应用程序，企业可使用企业账号登录在APP上进行合同管理、佣金管理、佣金代发、一键开票等业务，自由职业者可使用个人账号登录在APP上进行合同签约、佣金收款、明细查询等业务。随时随地使用、操作安全便捷。</div>
            <div class="cp3-img-wrap-text3">自由职业者APP一键签约，一键收款，一键理财</div>
            <div class="cp3-img-wrap-texts">企业服务端APP一键结算，一键打款，一键开票</div>
            <div class="cp-img-wrap-text4" @click="gotoCall">申请试用</div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "productItem3",
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  },
  mounted() {
    setTimeout(() => {
      const a = window.localStorage.getItem("a");
      if (a == 3) {
        var dis = document.getElementById("cp-index-intro3");
        dis.scrollIntoView();
        window.localStorage.clear();
      }
    }, 0);
  }
};
</script>
<style lang="less">
#cp-index-intro3 {
  background-color: #fff;
  //   padding-bottom: 60px;
  .img-wrap {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-wrap2 {
    padding: 59px 0 67px 60px;
    .img-wrap-text1 {
      color: #15abfe;
      font-size: 30px;
    }
    .cp-img-wrap-text2 {
      width: 430px;
      margin-top: 41px;
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .cp3-img-wrap-text3 {
      width: 300px;
      margin-top: 28px;
      color: #ff9900;
      font-size: 14px;
      line-height: 26px;
    }
    .cp3-img-wrap-texts {
      width: 300px;
      margin-top: 15px;
      color: #ff9900;
      font-size: 14px;
      line-height: 26px;
    }
    .cp-img-wrap-text4 {
      width: 120px;
      height: 40px;
      border: 1px solid #15abfe;
      border-radius: 4px;
      text-align: center;
      line-height: 40px;
      color: #15abfe;
      font-size: 16px;
      margin-top: 27px;
      cursor: pointer;
    }
  }
}
</style>