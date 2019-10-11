<template>
  <el-row class="footer">
    <el-col :span="10" :offset="4">
      <div class="content">
        <div class="content-top">杭州厦云创科信息技术有限公司</div>
        <div class="content-bottom">
          <div class="item-wrap">
            <img src="../assets/img/icon_phone.png" alt />
            <div class="text1">0755-8288 5278</div>
          </div>
          <div class="item-wrap">
            <img src="../assets/img/icon_address.png" alt />
            <div class="text2">深圳市南山区高新园科技南十二路朗诗大厦1209室</div>
          </div>
          <div class="item-wrap item-wrap3">
            <div class="text3">掌掌财服务平台入口 ></div>
          </div>
        </div>

        <router-link to="/call" tag="div">
          <div class="text4">联系客服 ></div>
        </router-link>
      </div>
    </el-col>
    <el-col :span="8" :offset="2">
      <div class="tel content">
        <img src="../assets/img/code.png" alt />
        <div class="img-text">关注掌掌财小程序</div>
      </div>
    </el-col>
    <div class="bottom">2019 杭州厦云创科信息技术有限公司 粤ICP备17126097号-2</div>
  </el-row>
</template>

<script>
export default {
  name: "vue-footer",
  methods: {}
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
.footer {
  background-color: #223a53;
  height: 360px;
  color: white;
  font-size: 14px;
  // padding: 50px 0 50px 0;
  position: relative;
  .content {
    margin-top: 76px;
    .content-top {
      font-size: 20px;
      color: #fff;
    }
    .content-bottom {
      margin-top: 24px;
      padding-top: 5px;
      font-size: 14px;
      color: #617e9a;
      border-top: 1px solid #37516b;
      display: flex;
      // flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .item-wrap {
        // display: inline-block;
        margin-top: 10px;
        display: flex;
      }
      .item-wrap3 {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      img {
        // display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-top: -3px;
      }
      // .text1 {
      //   // padding-right: 60px;
      //   // display: inline-block;
      // }
      // .text2 {
      //   // padding-right: 90px;
      //   // display: inline-block;
      // }
      .text3 {
        color: #ffffff;
        // display: inline-block;
        cursor: pointer;
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
    margin-top: 39px;
    img {
      padding: 10px 0 0 10px;
      width: 100px;
      height: 100px;
    }
    .img-text {
      color: #6986a3;
      font-size: 14px;
      padding: 10px 0 0 6px;
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