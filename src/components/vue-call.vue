<template>
  <div>
    <div id="call-header-back"></div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="call-content">
          <div class="call-content-top">
            <div class="call-content-return" @click="goback">
              <img
                class="call-content-return-img call-content-return-imgs"
                src="../assets/img/return1.png"
                alt
              />
              <span>返回</span>
            </div>
            <div class="call-content-return" @click="goback">
              <img
                class="call-content-return-img call-content-return-img2"
                src="../assets/img/return2.png"
                alt
              />
              <span>返回</span>
            </div>
          </div>
          <div class="call-content-text1">联系客服</div>
          <div class="call-content-text2">留下您的联系方式，我们的客服将与您联系，并向您提供免费税务筹划方案。</div>
          <div class="call-content-text3">
            <img src="../assets/img/call1.png" alt />
            <input class="call-content-input1" v-model="date.contact" type="text" placeholder="姓名" />
          </div>
          <div class="call-content-text4">
            <img src="../assets/img/call2.png" alt />
            <input class="call-content-input2" v-model="date.phone" type="text" placeholder="电话号码" />
          </div>
          <div class="call-content-text5">
            <img src="../assets/img/call3.png" alt />
            <input
              class="call-content-input3"
              v-model="date.companyName"
              type="text"
              placeholder="企业名称"
            />
          </div>
          <div class="call-content-text6" @click="selectCommit">提交</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "../api/index";
export default {
  name: "vue-index",
  data() {
    return {
      date: {
        contact: "",
        phone: "",
        companyName: ""
      }
    };
  },
  methods: {
    goback() {
      this.$router.back(-1);
    },
    async selectCommit() {
      if (this.date.contact && this.date.phone && this.date.companyName) {
        const parameter = this.date;
        console.log(parameter);
        const result = await getData(parameter);
        console.log(result);
        if (result.code == 0) {
          this.$alert(
            "您的信息我们已收到，稍后会有客服人员联系您，请注意接听来电，谢谢！",
            "提示",
            {
              confirmButtonText: "确定",
              callback: action => {
                this.date.contact = "";
                this.date.phone = "";
                this.date.companyName = "";
                this.$router.back(-1);
              }
            }
          );
        } else {
          this.$alert(
            "您的信息我们已收到，稍后会有客服人员联系您，请注意接听来电，谢谢！",
            "提示",
            {
              confirmButtonText: "确定",
              callback: action => {
                this.date.contact = "";
                this.date.phone = "";
                this.date.companyName = "";
                this.$router.back(-1);
              }
            }
          );
        }
      } else {
        // alert("输入不能为空");
        this.$alert("输入不能为空，请输入完整！", "提示", {
          confirmButtonText: "确定"
        });
      }
    }
  },
  mounted() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      console.log(222);
      location.href = "https://h5.xyck.com/index";
    } else {
      console.log(333);
    }
    var dis = document.getElementById("call-header-back");
    dis.scrollIntoView();
  }
};
</script>
<style scoped lang="less">
@import url("../assets/css/reset.css");
#call-header-back {
  width: 100%;
  height: 60px;
  background-color: #1a334d;
}
.call-content {
  .call-content-top {
    width: 100%;
    height: 80px;
    position: relative;
    .call-content-return {
      position: absolute;
      top: 26px;
      right: 25px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .call-content-return-img {
        margin-right: 4px;
      }
      .call-content-return-img1 {
        z-index: 100;
      }
      .call-content-return-img2 {
        z-index: -1;
      }
    }
    .call-content-return:hover {
      color: rgba(21, 171, 254, 1);
    }
    .call-content-return:hover > .call-content-return-img1 {
      z-index: -1;
    }
    .call-content-return:hover > .call-content-return-img2 {
      z-index: 100;
    }
  }
  height: 600px;
  margin: 40px 0 80px 0;
  box-shadow: 0px 0px 20px 0px rgba(32, 148, 235, 0.15);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .call-content-text1 {
    font-size: 24px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    margin-top: 100px;
  }
  .call-content-text2 {
    width: 387px;
    height: 37px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(102, 102, 102, 1);
    margin-top: 28px;
  }
  .call-content-text3 {
    margin-top: 24px;
    position: relative;
    img {
      position: absolute;
      top: 10px;
      left: 20px;
    }
    .call-content-input1 {
      width: 250px;
      height: 40px;
      background-color: #fafafa;
      border: 1px solid #fafafa;
      border-radius: 5px;
      font-size: 14px;
      padding-left: 50px;
    }
  }
  // .call-content-text3:hover >.call-content-input1{
  //   background-color: #ccc;
  // }
  .call-content-text3:hover {
    border: 2px solid #15abfe;
  }
  .call-content-text4 {
    margin-top: 15px;
    position: relative;
    img {
      position: absolute;
      top: 10px;
      left: 20px;
    }
    .call-content-input2 {
      width: 250px;
      height: 40px;
      background-color: #fafafa;
      border: 1px solid #fafafa;
      border-radius: 5px;
      font-size: 14px;
      padding-left: 50px;
    }
  }
  // .call-content-text4:hover >.call-content-input2{
  //   background-color: #ccc;
  // }
  .call-content-text4:hover {
    border: 2px solid #15abfe;
  }
  .call-content-text5 {
    margin-top: 15px;
    position: relative;
    img {
      position: absolute;
      top: 10px;
      left: 20px;
    }
    .call-content-input3 {
      width: 250px;
      height: 40px;
      background-color: #fafafa;
      border: 1px solid #fafafa;
      border-radius: 5px;
      font-size: 14px;
      padding-left: 50px;
    }
  }
  // .call-content-text5:hover >.call-content-input3{
  //   background-color: #ccc;
  // }
  .call-content-text5:hover {
    border: 2px solid #15abfe;
  }
  .call-content-text6 {
    width: 100px;
    height: 40px;
    background: rgba(21, 171, 254, 1);
    border-radius: 4px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    margin-top: 40px;
    cursor: pointer;
  }
  .call-content-text6:hover {
    background-color: #0183d2;
  }
}
</style>