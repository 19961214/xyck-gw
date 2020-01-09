<template>
  <div>
    <div class="index2-intro2">
      <div class="index-intro-title">云生态网络—全方位服务</div>
      <div class="index2-intro2-content-wrap">
        <div class="index2-intro2-content">
          <el-carousel :interval="4000" type="card" width="440px" height="440px">
            <el-carousel-item>
              <div class="index2-intro2-content-item">
                <img src="../../assets/img/index2-3.png" alt />
                <div class="index2-intro2-content-title">掌掌财APP</div>
                <div class="index2-intro2-content-text">
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">自由职业者APP一键签约，一键收款，一键理财</span>
                  </div>
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">企业服务端APP一键结算，一键打款，一键开票</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="index2-intro2-content-item">
                <img src="../../assets/img/index2-2.png" alt />
                <div class="index2-intro2-content-title">掌掌财云端管理系统</div>
                <div class="index2-intro2-content-text">
                  <div class="img-wrap-text-wrap">
                    <!-- <div class="img-wrap-quan"></div> -->
                    <span class="img-wrap-text3">一站式佣金结算、发票开具、个税申报管理系统</span>
                  </div>
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">提供云端应用技术，7X24 贴心服务</span>
                  </div>
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">专业运营管理团队、技术研发团队</span>
                  </div>
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">打造人财税一体化云生态网络</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="index2-intro2-content-item">
                <img src="../../assets/img/index2-1.png" alt />
                <div class="index2-intro2-content-title">掌掌财小程序</div>
                <div class="index2-intro2-content-text">
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">轻量级应用，无需登录APP也可一步实现电子合同签约</span>
                  </div>
                  <div class="img-wrap-text-wrap">
                    <div class="img-wrap-quan"></div>
                    <span class="img-wrap-text3">收款记录实时查询，便捷高效</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
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
    gotoProduct3() {
      window.localStorage.setItem("a", "3");
      this.$router.push({ path: "/product" });
    },
    gotoProduct4() {
      window.localStorage.setItem("a", "4");
      this.$router.push({ path: "/product" });
    }
  }
};
</script>
<style scoped lang="less">
@media (max-width: 1024px) {
}

.index2-intro2 {
  width: 100%;
  height: 530px;
  background-color: #fff;
  .index-intro-title {
    font-size: 24px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    margin: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .index2-intro2-content-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .index2-intro2-content {
      // display: flex;
      // justify-content: center;
      // align-items: center;
      width: 1000px;
      margin-left: 100px;
      .index2-intro2-content-item {
        width: 400px;
        height: 400px;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border: 1px solid rgba(51,51,51,0.1);
        box-shadow:0px 0px 25px 0px rgba(51,51,51,0.1);
        .index2-intro2-content-title {
          font-size: 20px;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          line-height: 90px;
        }
        .index2-intro2-content-text {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 30px;
          .img-wrap-text-wrap {
            .img-wrap-quan {
              width: 6px;
              height: 6px;
              border: 2px solid rgba(21, 171, 254, 1);
              border-radius: 50%;
              margin-right: 10px;
              display: inline-block;
            }
            .img-wrap-text3{
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>