<template>
  <div>
    <div id="call-header-back"></div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="call-content">
          <div class="call-content-text1">联系我们</div>
          <div class="call-content-text2">留下您的联系方式，我们的客服将与您联系，并向您提供免费税务筹划方案。</div>
          <div class="call-content-text3">
            <img src="../assets/img/call1.png" alt />
            <input class="call-content-input1" v-model="input1" type="text" placeholder="姓名" />
          </div>
          <div class="call-content-text4">
            <img src="../assets/img/call2.png" alt />
            <input class="call-content-input2" v-model="input2" type="text" placeholder="电话号码" />
          </div>
          <div class="call-content-text5">
            <img src="../assets/img/call3.png" alt />
            <input class="call-content-input3" v-model="input3" type="text" placeholder="企业名称" />
          </div>
          <div class="call-content-text6" @click="selectCommit">提交</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "vue-index",
  data() {
    return {
      input1: "",
      input2: "",
      input3: ""
    };
  },
  methods: {
    selectCommit() {
      // var FileSaver = require("file-saver");
      if (this.input1 && this.input2 && this.input3) {
        this.input1 = "";
        this.input2 = "";
        this.input3 = "";
        // let data = {
        //   name: "hanmeimei",
        //   age: 88
        // };
        // var content = JSON.stringify(data);
        // var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        // FileSaver.saveAs(blob, "user.txt");
        alert("您的信息我们已收到，稍后会有客服人员联系您，请注意接听来电，谢谢！");
      } else {
        alert("输入不能为空");
      }
    }
  },
  mounted() {
    var dis = document.getElementById("call-header-back");
    dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#call-header-back {
  width: 100%;
  height: 60px;
  background-color: #1a334d;
}
.call-content {
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
}
</style>