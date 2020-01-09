<template>
  <el-row class="footer">
    <div class="content-wrap">
      <div class="content">
        <div class="content-top">杭州厦云创科信息技术有限公司</div>
        <div class="footer-content-bottom">
          <div class="item-wrap">
            <img src="../assets/img/icon_phone.png" alt />
            <div class="text1">0571-87299551</div>
          </div>

          <div class="item-wrap item-wrap3">
            <!-- <div class="text3">掌掌财服务平台入口 </div> -->
            <div class="text3" @click="gotoCall">联系客服 ></div>
          </div>
        </div>
        <div class="footer-item-wraps">
          <img src="../assets/img/icon_address.png" alt />
          <div class="footer-text2">浙江省杭州市西湖区桃岭路桃源坞基金小镇16幢3A</div>
        </div>
      </div>
      <div class="tel">
        <img src="../assets/img/code.jpg" alt />
        <div class="img-text">关注掌掌财小程序</div>
      </div>
    </div>

    <div class="bottom">2019 杭州厦云创科信息技术有限公司 浙ICP备19033904号-1</div>
  </el-row>
</template>

<script>
export default {
  name: "vue-footer",
  methods: {
    gotoCall() {
      this.$router.push({ path: "/call" });
    }
  }
};
</script>
<style scoped lang="less">
@import url("../assets/css/reset.css");
.footer {
  width: 100%;
  background-color: #223a53;
  height: 360px;
  color: white;
  font-size: 14px;
  // padding: 50px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  position: relative;
  .content-wrap {
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    margin-top: 103px;
    .content-top {
      font-size: 24px;
      color: #fff;
    }
    .footer-content-bottom {
      width: 805px;
      margin-top: 39px;
      padding-top: 24px;
      font-size: 16px;
      color: #617e9a;
      border-top: 1px solid #37516b;
      display: flex;
      // flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .item-wrap {
        display: flex;
        margin-top: 10px;
      }
      .item-wrap3 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-top: -3px;
      }
      .text1 {
        color: #ffffff;
        cursor: pointer;
      }
      .text3 {
        color: #ffffff;
        cursor: pointer;
      }
    }
    .footer-item-wraps{
      display: flex;
      align-items: center;
      font-size: 16px;
      margin-top: 34px;
      img{
        margin-right: 10px;
        
      }
    }
    .text4 {
      margin-top: 19px;
      color: #ffffff;
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
    }
  }
  .tel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    margin-left: 80px;
    img {
      // margin: 10px 0 0 10px;
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
    .img-text {
      width: 114px;
      margin-top: 20px;
      color: #6986A3;
      font-size: 14px;
    }
  }
}
.bottom {
  width: 100%;
  height: 40px;
  background-color: #1a334d;
  font-size: 12px;
  color: #617e9a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>