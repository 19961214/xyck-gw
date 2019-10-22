<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="index-intro1">
      <div class="index-intro-title">产品介绍</div>
      <div class="index1-content-wrap" ref="TEXT">
        <div class="img-wrap">
          <img src="../../assets/img/back-img3.png" alt />
        </div>
        <div class="img-wrap2">
          <div class="img-wrap-text1">掌税通</div>
          <div class="img-wrap-text2">SaaS服务平台，专注于“互联网+税收优化”</div>
          <div class="img-wrap-text3">解决企业服务端与自由职业者之间的佣金结算发放、代征税收等服务</div>
          <div class="img-wrap-text4" @click="gotoProduct1">了解更多 ></div>
        </div>
      </div>
    </el-row>

    <el-row class="index-intro1">
      <div class="index1-content-wrap" ref="TEXTS">
        <div class="img-wrap2">
          <div class="img-wrap-text1">掌钱进</div>
          <div class="img-wrap-text2">为中高收入自由职业者、创客、合伙人提供专属定制的个人税务筹划方案</div>
          <div class="img-wrap-text3">综合成本可降至0.5%-6.45%</div>
          <div class="img-wrap-text3">实现客户税负最小化、收益最大化</div>
          <div class="img-wrap-text4" @click="gotoProduct2">了解更多 ></div>
        </div>
        <div class="img-wrap">
          <img src="../../assets/img/back-img4.png" alt />
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem1",
  data() {
    return {
      state1: true,
      state2: true
    };
  },
  methods: {
    gotoProduct1() {
      window.localStorage.setItem("a", "1");
      this.$router.push({ path: "/product" });
    },
    gotoProduct2() {
      window.localStorage.setItem("a", "2");
      this.$router.push({ path: "/product" });
    },
    dynamic() {
      if (this.state1) {
        let topSize1 = this.$refs.TEXT.getBoundingClientRect().top;
        // console.log(topSize1);
        // var showId = document.getElementsByClassName("img-wrap");
        var clients1 =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        // console.log(clients1);
        if (topSize1 <= clients1 && this.state1) {
          this.state1 = false;
          this.$refs.TEXT.classList.add("dynamic1");
          setTimeout(() => {
            this.$refs.TEXT.classList.remove("dynamic1");
            this.$refs.TEXT.classList.add("dynamic1s");
          }, 2000);
        }
      }
      if (this.state2) {
        let topSize1 = this.$refs.TEXTS.getBoundingClientRect().top;
        // console.log(topSize1);
        // var showId = document.getElementsByClassName("img-wrap");
        var clients2 =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        if (topSize1 <= clients2 && this.state2) {
          this.state2 = false;
          this.$refs.TEXTS.classList.add("dynamic1");
          setTimeout(() => {
            this.$refs.TEXTS.classList.remove("dynamic1");
            this.$refs.TEXTS.classList.add("dynamic1s");
          }, 2000);
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.dynamic);
  }
};
</script>
<style lang="less">
@media (max-width: 1024px) {
  .index-intro1 {
    background-color: #fff;
    .index-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .index1-content-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(200px);
      opacity: 0;
      .img-wrap {
        width: 450px !important;
        height: 300px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .img-wrap2 {
        width: 450px !important;
        height: 300px !important;
        padding: 39px 0 77px 20px !important;
        .img-wrap-text1 {
          color: #15abfe;
          font-size: 30px !important;
        }
        .img-wrap-text2 {
          margin-top: 41px !important;
          color: #333333;
          font-size: 14px !important;
          line-height: 26px !important;
        }
        .img-wrap-text3 {
          color: #333333;
          font-size: 14px !important;
          line-height: 26px !important;
        }
        .img-wrap-text4 {
          color: #15abfe;
          font-size: 16px !important;
          margin-top: 58px !important;
          cursor: pointer;
        }
        .img-wrap-text4:hover {
          color: #018ddb;
        }
      }
    }
    .dynamic1 {
      animation: move1 2s ease 1;
    }
    .dynamic1s {
      transform: translateY(0);
      opacity: 1;
    }
    @keyframes move1 {
      0% {
        transform: translateY(200px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

.index-intro1 {
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
  .index1-content-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(200px);
    opacity: 0;
    .img-wrap {
      width: 600px;
      height: 350px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-wrap2 {
      width: 600px;
      height: 350px;
      padding: 59px 0 67px 60px;
      .img-wrap-text1 {
        color: #15abfe;
        font-size: 30px;
      }
      .img-wrap-text2 {
        margin-top: 41px;
        color: #333333;
        font-size: 14px;
        line-height: 26px;
      }
      .img-wrap-text3 {
        color: #333333;
        font-size: 14px;
        line-height: 26px;
      }
      .img-wrap-text4 {
        color: #15abfe;
        font-size: 16px;
        margin-top: 98px;
        cursor: pointer;
      }
      .img-wrap-text4:hover {
        color: #018ddb;
      }
    }
  }
  .dynamic1 {
    animation: move1 2s ease 1;
  }
  .dynamic1s {
    transform: translateY(0);
    opacity: 1;
  }
  @keyframes move1 {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>