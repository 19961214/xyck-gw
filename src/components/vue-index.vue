<template>
  <div id="index-content1">
    <div class="index-item1-wrap">
      <!-- <img  class="index-item1-img" src="../assets/img/index-1.png" alt /> -->
      <div class="index-item1-text-wrap">
        <div class="index-item1-text1">用科技打造更专业的人财税一体化商业服务</div>
        <div class="index-item1-text2-wrap">
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>佣 金 结 算</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>税 收 优 惠</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>人 力 资 源</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>产 业 运 营</span>
          </div>
        </div>
      </div>
    </div>
    <div class="phone-fiexd-wrap">
      <div class="phone-fiexd2" v-show="isPhoneShow">
        <img class="phone-fiexd2-img" src="../assets/img/back-one.png" alt />
        <div class="phone-fiexd2-content1">
          <img src="../assets/img/phone1.png" alt />
          <span>0571-87299551</span>
        </div>
        <div class="phone-fiexd2-content2">
          <img src="../assets/img/phone2.png" alt />
          <span>136-7243-6880</span>
        </div>
      </div>
      <div class="phone-fiexd1" @click="isPhone">
        <img src="../assets/img/phone.png" alt />
        <span>电话咨询</span>
      </div>
    </div>
    <indexItem1></indexItem1>
    <indexItem2></indexItem2>
    <indexItem3></indexItem3>
    <indexItem4></indexItem4>
    <indexItem5></indexItem5>
    <indexItem6></indexItem6>
  </div>
</template>

<script>
import indexItem1 from "./indexList/indexItem1.vue";
import indexItem2 from "./indexList/indexItem2.vue";
import indexItem3 from "./indexList/indexItem3.vue";
import indexItem4 from "./indexList/indexItem4.vue";
import indexItem5 from "./indexList/indexItem5.vue";
import indexItem6 from "./indexList/indexItem6.vue";
export default {
  name: "vue-index",
  data() {
    return {
      isPhoneShow:false
    };
  },
  methods: {
    isPhone(){
      this.isPhoneShow = !this.isPhoneShow;
    }
  },
  mounted() {
    var dis = document.getElementById("index-content1");
    dis.scrollIntoView();
  },
  components: {
    indexItem1,
    indexItem2,
    indexItem3,
    indexItem4,
    indexItem5,
    indexItem6
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1024px) {
}
.phone-fiexd-wrap {
  z-index: 2000;
  height: 90px;
  position: fixed;
  right: 0;
  bottom: 270px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .phone-fiexd2 {
    position: relative;
    box-shadow: 0px 0px 30px 0px rgba(1, 119, 255, 0.15);
    .phone-fiexd2-img{
      width: 198px;
      height: 90px;
    }
    .phone-fiexd2-content1 {
      width: 158px;
      height: 30px;
      background: rgba(248, 248, 248, 1);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 10px;
      left: 15px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
      img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
    .phone-fiexd2-content2 {
      width: 158px;
      height: 30px;
      background: rgba(248, 248, 248, 1);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50px;
      left: 15px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 22px;
      img {
        width: 12px;
        height: 16px;
        margin-right: 5px;
      }
    }
  }
  .phone-fiexd1 {
    width: 70px;
    height: 70px;
    background: rgba(21, 171, 254, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-left: 12px;
    img {
      width: 26px;
      height: 26px;
      margin-bottom: 10px;
    }
  }
}
.index-item1-wrap {
  width: 100%;
  height: 500px;
  margin-top: 59px;
  background: url("../assets/img/index-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .index-item1-text-wrap {
    .index-item1-text1 {
      font-size: 34px;
      color: #fff;
    }
    .index-item1-text2-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .index-item1-text2 {
        margin-top: 32px;
        display: inline-block;
        img {
          margin-left: 20px;
          width: 16px;
          height: 14px;
        }
        span {
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: 9px;
        }
      }
    }
  }
}
</style>