<template>
  <div>
    <!-- 产品介绍 -->
    <div class="index-intro1" style="background-color: #fff;">
      <div class="index-intro-title">产品介绍</div>
      <div class="index1-content-wrap">
        <div class="index1-content-wraps">
          <div class="img-wrap">
            <img src="../../assets/img/index-item2.png" alt />
          </div>
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌税通</div>
            <div class="img-wrap-text-wrap">
              <div class="img-wrap-quan"></div>
              <span class="img-wrap-text2">SaaS服务平台，专注于“互联网+税收优化”</span>
            </div>
            <div class="img-wrap-text-wrap">
              <div class="img-wrap-quan"></div>
              <span class="img-wrap-text3">解决企业服务端与自由职业者之间的佣金结算发放、代征税收等服务</span>
            </div>

            <div class="img-wrap-text4" @click="gotoProduct">了解更多<img src="../../assets/img/icon_get into.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>

    <div class="index-intro1s">
      <div class="index1-content-wrap">
        <div class="index1-content-wraps">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌钱进</div>
            <div class="img-wrap-text-wrap">
              <div class="img-wrap-quan"></div>
              <span class="img-wrap-text2">为中高收入自由职业者、创客、合伙人提供专属定制的个人税务筹划方案</span>
            </div>
            <div class="img-wrap-text-wrap">
              <div class="img-wrap-quan"></div>
              <span class="img-wrap-text3">综合成本可降至0.5%-6.45%</span>
            </div>
            <div class="img-wrap-text-wrap">
              <div class="img-wrap-quan"></div>
              <span class="img-wrap-text3">实现客户税负最小化、收益最大化</span>
            </div>

            <div class="img-wrap-text4" @click="gotoProduct">了解更多<img src="../../assets/img/icon_get into.png" alt=""></div>
          </div>
          <div class="img-wrap">
            <img src="../../assets/img/index-item1.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexItem1",
  data() {
    return {};
  },
  methods: {
    gotoProduct() {
      this.$router.push({ path: "/product" });
    },
  },
  mounted() {}
};
</script>
<style lang="less">
@media (max-width: 1024px) {
}

.index-intro1 {
  width: 100%;
  background-color: #f9fcff;
  padding-bottom: 72px;
  .index-intro-title {
    font-size: 24px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .index1-content-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .index1-content-wraps {
      overflow: hidden;
      .img-wrap {
        width: 550px;
        height: 372px;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .img-wrap2 {
        width: 430px;
        height: 372px;
        float: left;
        .img-wrap-text1 {
          font-size: 30px;
          font-weight: 500;
          color: rgba(21, 171, 254, 1);
          line-height: 90px;
        }
        .img-wrap-text-wrap {
          font-size: 16px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          .img-wrap-quan {
            width: 11px;
            height: 11px;
            border: 2px solid rgba(21, 171, 254, 1);
            border-radius: 50%;
            margin-right: 10px;
            display: inline-block;
          }
        }
        .img-wrap-text4 {
          width: 160px;
          height: 40px;
          margin-top: 60px;
          background: rgba(21, 171, 254, 1);
          box-shadow: 0px 6px 10px 0px rgba(0, 153, 255, 0.34);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          position: relative;
          cursor:pointer;
          img{
            width: 30px;
            height: 30px;
            position: absolute;
            right: 5px;
            top: 5px;
          }
        }
      }
    }
  }
}
.index-intro1s {
  width: 100%;
  background-color: #f9fcff;
  padding-top: 92px;
  .index-intro-title {
    font-size: 24px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .index1-content-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .index1-content-wraps {
      overflow: hidden;
      .img-wrap {
        width: 550px;
        height: 372px;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .img-wrap2 {
        width: 430px;
        height: 372px;
        float: left;
        .img-wrap-text1 {
          font-size: 30px;
          font-weight: 500;
          color: #FBA013;
          line-height: 90px;
        }
        .img-wrap-text-wrap {
          font-size: 16px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          .img-wrap-quan {
            width: 11px;
            height: 11px;
            border: 2px solid #FBA013;
            border-radius: 50%;
            margin-right: 10px;
            display: inline-block;
          }
        }
        .img-wrap-text4 {
          width: 160px;
          height: 40px;
          margin-top: 60px;
          background: #FBA013;
          box-shadow: 0px 6px 10px 0px rgba(251,160,19,0.34);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          position: relative;
          cursor:pointer;
          img{
            width: 30px;
            height: 30px;
            position: absolute;
            right: 5px;
            top: 5px;
          }
        }
      }
    }
  }
}
</style>