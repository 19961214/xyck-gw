<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jj-index-intro2">
      <div class="jj-intro-title">行业痛点</div>
      <div class="jj2-wrap">
        <div class="jj-content2-wrap">
          <div class="jj-content2-item1"></div>
          <div class="jj-content2-item2">
            <img src="../../assets/img/jj6.png" alt />
            <p class="jj-content2-p">结算复杂</p>
            <p class="jj-content2-text">互联网平台佣金发放结构复杂</p>
            <p class="jj-content2-text jj-content2-text2">耗费大量人力物力</p>
          </div>

          <div class="jj-content2-item2">
            <img src="../../assets/img/jj7.png" alt />
            <p class="jj-content2-p">成本居高</p>
            <p class="jj-content2-text">企业佣金结算复杂，人力成本</p>
            <p class="jj-content2-text jj-content2-text2">居高不下</p>
          </div>
          <div class="jj-content2-item2">
            <img src="../../assets/img/jj8.png" alt />
            <p class="jj-content2-p">风险增加</p>
            <p class="jj-content2-text">金税三期国地税合并，企业</p>
            <p class="jj-content2-text jj-content2-text2">缴税流程繁琐</p>
          </div>
          <div class="jj-content2-item2">
            <img src="../../assets/img/jj9.png" alt />
            <p class="jj-content2-p">三流不合一</p>
            <p class="jj-content2-text">私对私转账，私下开票，虚开</p>
            <p class="jj-content2-text jj-content2-text2">发票风险</p>
          </div>
          <div class="jj-content2-item2">
            <img src="../../assets/img/jj10.png" alt />
            <p class="jj-content2-p">无法提供发票</p>
            <p class="jj-content2-text jj-content2-text2s">开票流程繁杂，影响效率，甚至无法提供发票</p>
            <p class="jj-content2-text jj-content2-text2"></p>
          </div>
          <div class="jj-content2-item2">
            <img src="../../assets/img/jj11.png" alt />
            <p class="jj-content2-p">成本高风险大</p>
            <br />
            <p class="jj-content2-text jj-content2-text2s">成本居高不下。难以合规报税，经营有风险</p>
            <p class="jj-content2-text jj-content2-text2"></p>
          </div>
          <div class="jj-content2-item3"></div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "teamItem2"
};
</script>
<style lang="less">
@media (max-width: 1859px) {
  .jj-index-intro2 {
    background-color: #f7fcff;
    padding-bottom: 49px !important;
    .jj-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .jj2-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .jj-content2-wrap {
        overflow: hidden;
        margin: 0 300px;
        .jj-content2-item1 {
          width: 260px !important;
          height: 210px !important;
          background: url("../../assets/img/jj5.png") center center no-repeat;
          float: left;
          margin-right: 21px !important;
          margin-bottom: 28px !important;
        }
        .jj-content2-item3 {
          width: 260px !important;
          height: 210px !important;
          background: url("../../assets/img/jj12.png") center center no-repeat;
          float: left;
          margin-right: 20px;
          margin-bottom: 49px !important;
        }
        .jj-content2-item2 {
          width: 193px !important;
          height: 210px !important;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(238, 238, 238, 1);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          float: left;
          margin-right: 20px;
          margin-bottom: 28px !important;
          img {
            margin-top: 21px !important;
          }
          .jj-content2-p {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-top: 19px !important;
          }
          .jj-content2-text {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-top: 20px !important;
            line-height: 22px;
          }
          .jj-content2-text2s {
            width: 143px;
            height: 37px;
            margin-top: 10px !important;
          }
          .jj-content2-text2 {
            margin-top: 0 !important;
          }
        }
        .jj-content2-item2:hover {
          box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
        }
      }
    }
  }
}
@media (max-width: 1550px) {
  .jj-index-intro2 {
    background-color: #f7fcff;
    padding-bottom: 49px !important;
    .jj-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .jj2-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .jj-content2-wrap {
        overflow: hidden;
        margin: 0 100px !important;
        .jj-content2-item1 {
          width: 260px !important;
          height: 210px !important;
          background: url("../../assets/img/jj5.png") center center no-repeat;
          float: left;
          margin-right: 21px !important;
          margin-bottom: 28px !important;
        }
        .jj-content2-item3 {
          width: 260px !important;
          height: 210px !important;
          background: url("../../assets/img/jj12.png") center center no-repeat;
          float: left;
          margin-right: 20px;
          margin-bottom: 49px !important;
        }
        .jj-content2-item2 {
          width: 193px !important;
          height: 210px !important;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(238, 238, 238, 1);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          float: left;
          margin-right: 20px;
          margin-bottom: 28px !important;
          img {
            margin-top: 21px !important;
          }
          .jj-content2-p {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-top: 19px !important;
          }
          .jj-content2-text {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-top: 20px !important;
            line-height: 22px;
          }
          .jj-content2-text2s {
            width: 143px;
            height: 37px;
            margin-top: 10px !important;
          }
          .jj-content2-text2 {
            margin-top: 0 !important;
          }
        }
        .jj-content2-item2:hover {
          box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
        }
      }
    }
  }
}

@media (max-width: 1150px) {
  .jj-index-intro2 {
    background-color: #f7fcff;
    padding-bottom: 49px !important;
    .jj-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .jj2-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .jj-content2-wrap {
        overflow: hidden;
        margin: 0 30px !important;
        .jj-content2-item1 {
          width: 260px !important;
          height: 210px !important;
          background: url("../../assets/img/jj5.png") center center no-repeat;
          float: left;
          margin-right: 21px !important;
          margin-bottom: 28px !important;
        }
        .jj-content2-item3 {
          width: 260px !important;
          height: 210px !important;
          background: url("../../assets/img/jj12.png") center center no-repeat;
          float: left;
          margin-right: 20px;
          margin-bottom: 49px !important;
        }
        .jj-content2-item2 {
          width: 193px !important;
          height: 210px !important;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(238, 238, 238, 1);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          float: left;
          margin-right: 20px;
          margin-bottom: 28px !important;
          img {
            margin-top: 21px !important;
          }
          .jj-content2-p {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-top: 19px !important;
          }
          .jj-content2-text {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            margin-top: 20px !important;
            line-height: 22px;
          }
          .jj-content2-text2s {
            width: 143px;
            height: 37px;
            margin-top: 10px !important;
          }
          .jj-content2-text2 {
            margin-top: 0 !important;
          }
        }
        .jj-content2-item2:hover {
          box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
        }
      }
    }
  }
}

.jj-index-intro2 {
  background-color: #f7fcff;
  padding-bottom: 87px;
  .jj-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jj2-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .jj-content2-wrap {
      overflow: hidden;
      margin: 0 300px;
      .jj-content2-item1 {
        width: 420px;
        height: 260px;
        background: url("../../assets/img/jj5.png") center center no-repeat;
        float: left;
        margin-right: 20px;
        margin-bottom: 40px;
      }
      .jj-content2-item3 {
        width: 420px;
        height: 260px;
        background: url("../../assets/img/jj12.png") center center no-repeat;
        float: left;
        margin-right: 20px;
        margin-bottom: 40px;
      }
      .jj-content2-item2 {
        width: 240px;
        height: 260px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(238, 238, 238, 1);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
        margin-right: 20px;
        margin-bottom: 40px;
        img {
          margin-top: 31px;
        }
        .jj-content2-p {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-top: 21px;
        }
        .jj-content2-text {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-top: 20px;
          line-height: 22px;
        }
        .jj-content2-text2s {
          width: 143px;
          height: 37px;
        }
        .jj-content2-text2 {
          margin-top: 0;
        }
      }
      .jj-content2-item2:hover {
        box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
      }
    }
  }
}
</style>