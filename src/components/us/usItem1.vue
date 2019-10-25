<template>
  <div>
    <el-row class="lx-index-intro2">
      <div class="lx-intro-title">联系我们</div>
      <div class="lx-content-wrap">
        <div class="lx-content1-wrap">
          <div class="lx-content1-top">商务合作联系</div>
          <div class="lx-content1-bottom">
            <div class="lx-content1-girl">
              <img src="../../assets/img/girl.png" alt />
              <div class="lx-content1-text">
                <p class="lx-content1-text1">解小姐：</p>
                <p class="lx-content1-text2">0571-87299551 / 13672436880</p>
                <p class="lx-content1-text3">xiexiaoyu@xyck.com</p>
              </div>
            </div>

            <div class="lx-content1-girl">
              <img src="../../assets/img/boy.png" alt />
              <div class="lx-content1-text">
                <p class="lx-content1-text1">许先生：</p>
                <p class="lx-content1-text2">0571-87296889 / 15815814891</p>
                <p class="lx-content1-text3">xuyuhua@xyck.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lx-content2-wrap">
          <img src="../../assets/img/lx2.png" alt />
          <div class="lx-content2-text">
            <p class="lx-content2-text1">杭州总部</p>
            <p class="lx-content2-text2">浙江省杭州市西湖区桃岭路桃源坞基金小镇16幢3A</p>
          </div>
          <div class="lx-content2-texts">电话：0571-87299551</div>
        </div>
        <div class="lx-content2-wrap">
          <img src="../../assets/img/lx1.png" alt />
          <div class="lx-content2-text">
            <p class="lx-content2-text1">广州办事处</p>
            <p class="lx-content2-text2">广州市天河区科韵路12号之一801室</p>
          </div>
          <div class="lx-content2-texts">电话：15815814891</div>
        </div>
        <div class="lx-content2-wrap">
          <img src="../../assets/img/lx4.png" alt />
          <div class="lx-content2-text">
            <p class="lx-content2-text1">深圳分公司</p>
            <p class="lx-content2-text2">广东省深圳市南山区高新园科技南十二路朗诗大厦1209室</p>
          </div>
          <div class="lx-content2-texts">电话：13316807117</div>
        </div>
        <div class="lx-content2-wrap">
          <img src="../../assets/img/lx3.png" alt />
          <div class="lx-content2-text">
            <p class="lx-content2-text1">江西分公司</p>
            <p class="lx-content2-text2">江西省鹰潭市月湖区佳诚美丽园9栋3单元301</p>
          </div>
          <div class="lx-content2-texts">电话：18970187060</div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "usItem1"
};
</script>
<style lang="less">
@media (max-width: 1300px) {
  .lx-index-intro2 {
    background-color: #fff;
    padding-bottom: 87px;
    .lx-intro-title {
      width: 100%;
      height: 98px !important;
      color: #333;
      font-size: 22px !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .lx-content-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .lx-content1-wrap {
        width: 88% !important;
        height: 200px !important;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(32, 148, 235, 0.15);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .lx-content1-top {
          font-size: 16px !important;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 90px;
        }
        .lx-content1-bottom {
          display: flex;
          .lx-content1-girl {
            display: flex;
            padding: 0 65px;
            .lx-content1-text {
              margin-left: 19px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 600;
              color: rgba(102, 102, 102, 1);
              line-height: 22px;
              .lx-content1-text1 {
                color: #666;
              }
              .lx-content1-text2 {
                color: #666;
              }
              .lx-content1-text3 {
                color: #15abfe;
              }
            }
          }
        }
      }
      .lx-content2-wrap {
        width: 88% !important;
        height: 120px !important;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(32, 148, 235, 0.1);
        border-radius: 4px;
        margin-top: 20px !important;
        overflow: hidden;
        img {
          padding: 10px;
          float: left;
        }
        .lx-content2-text {
          float: left;
          .lx-content2-text1 {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 90px;
          }
          .lx-content2-text2 {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 22px;
          }
        }
        .lx-content2-texts {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(21, 171, 254, 1);
          margin-right: 19px !important;
          line-height: 140px;
          float: right;
        }
      }
      .lx-content2-wrap:hover {
        box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
      }
    }
  }
}
.lx-index-intro2 {
  background-color: #fff;
  padding-bottom: 87px;
  .lx-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lx-content-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .lx-content1-wrap {
      width: 63%;
      height: 240px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 20px 0px rgba(32, 148, 235, 0.15);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .lx-content1-top {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 90px;
      }
      .lx-content1-bottom {
        display: flex;
        .lx-content1-girl {
          display: flex;
          padding: 0 65px;
          .lx-content1-text {
            margin-left: 19px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 600;
            color: rgba(102, 102, 102, 1);
            line-height: 22px;
            .lx-content1-text1 {
              color: #666;
            }
            .lx-content1-text2 {
              color: #666;
            }
            .lx-content1-text3 {
              color: #15abfe;
            }
          }
        }
      }
    }
    .lx-content2-wrap {
      width: 63%;
      height: 140px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 20px 0px rgba(32, 148, 235, 0.1);
      border-radius: 4px;
      margin-top: 30px;
      overflow: hidden;
      img {
        padding: 10px;
        float: left;
      }
      .lx-content2-text {
        float: left;
        .lx-content2-text1 {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 90px;
        }
        .lx-content2-text2 {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 22px;
        }
      }
      .lx-content2-texts {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(21, 171, 254, 1);
        margin-right: 31px;
        line-height: 140px;
        float: right;
      }
    }
    .lx-content2-wrap:hover {
      box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
    }
  }
}
</style>