<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jr-index-intro1">
      <div class="jr-intro-title">热招职位</div>
      <el-col :span="16" :offset="4">
        <div class="jr-content2-wrap">
          <div class="jr-content2-item1">
            <div>全部职位</div>
          </div>
          <div class="jr-content2-item2">
            <div class="jr-content2-item">
              <p class="jr-p1">UI设计师&nbsp &nbsp &nbsp</p>
              <p class="jr-p2">10-20K</p>
              <img src="../../assets/img/jiantou.png" alt />
            </div>
          </div>
          <div class="jr-content2-item3">
            <div class="jr-content2-item">
              <p class="jr-p1">JAVA工程师</p>
              <p class="jr-p2">15-25K</p>
              <img src="../../assets/img/jiantou.png" alt />
            </div>
          </div>

          <div class="jr-content2-item4">
            <div :class="{'jr-items':state}" class="jr-content2-item">
              <p class="jr-p1">行政专员&nbsp &nbsp &nbsp</p>
              <p class="jr-p2">8-15K</p>
              <img :class="{'img-items':state}" src="../../assets/img/jiantou.png" alt />
            </div>
          </div>
          <div class="jr-content2-item4s" v-if="false">
            <div class="jr-content2-item4s-wrap">
              <div class="content2-item4s-title">【岗位职责】</div>
              <p class="content2-item4s-text1">
                1、负责赎楼业务的具体操作，准备赎楼资料、查档确权，及时更新业务管理系统；
                <br />2、负责预约还款、公证委托手续的办理，打印原贷款还款清单或结清证明；
                <br />3、现场办理还款、取证、领取注销抵押资料；
                <br />4、到国土局办理赎楼物业的注销、过户、抵押登记等相关手续；
                <br />5、业务终结后客户证件退还和凭证资料的及时归档；
                <br />6、熟悉赎楼业务的签约、赎楼及国土局办文流程 。
              </p>
              <div class="content2-item4s-title">【任职要求】</div>
              <p class="content2-item4s-text2">
                1、全日制大专及以上学历，金融、经济、法律等相关专业优先;
                <br />2、要求有两年以上银行个贷或担保机构赎楼操作从业经验;
                <br />3、具备基本的银行信贷和财务结算的相关知识;
                <br />4、良好的沟通及表达能力，熟练的电脑操作技能;
                <br />5、工作责任心强，爱岗敬业，有良好的职业操守。
              </p>
            </div>
          </div>

          <div class="jr-content-bottom">
            <div class="jr-bottom-text">
              简历请投：
              <p>xiexiaoyu@xyck.com</p>
              
            </div>
            <div class="jr-bottom-text">
              联系电话：
              <p>0571-87299551 / 13672436880</p>
              
            </div>
            <p class="jr-bottom-text3">投递简历时请在邮件标题中注明您的姓名以及应聘职位</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "gousItem2",
  data() {
    return {
      state: false
    };
  },
  methods: {
    // select() {
    //   this.state = !this.state;
    // }
  }
};
</script>
<style lang="less">
.jr-index-intro1 {
  background-color: #fff;
  padding-bottom: 60px;
  .jr-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jr-content2-wrap {
    .jr-content2-item {
      padding: 0 21px 0 21px;
      background-color: #fff;
      height: 60px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .jr-p1 {
        color: #333;
        font-size: 16px;
      }
      .jr-p2 {
        color: #15abfe;
        font-size: 16px;
      }
      .img-items {
        transform: rotateZ(90deg);
        transition-duration: 0.3s;
      }
    }
    .jr-content2-item:hover{
      background-color: #f4fafe;
    }
    .jr-content2-item1 {
      color: #15abfe;
      div {
        text-align: center;
        width: 80px;
        padding-bottom: 10px;
        border-bottom: 1px solid #15abfe;
      }
    }
    .jr-content2-item2 {
      border-top: 1px solid #eee;
    }
    
    .jr-items {
      background-color: #f4fafe;
    }
    .jr-content2-item4s {
      background-color: #f4fafe;
      .jr-content2-item4s-wrap {
        padding: 29px 0 38px 30px;
        color: #666;
        font-size: 14px;
        line-height: 22px;
        .content2-item4s-title {
          margin-bottom: 20px;
        }
        .content2-item4s-text1 {
          margin-bottom: 40px;
        }
      }
    }
    .jr-content-bottom{
        margin-top: 50px;
        .jr-bottom-text{
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            p{
                display: inline-block;
                color: #15ABFE;
            }
        }
        .jr-bottom-text3{
            color: #666;
            font-size: 14px;
            margin-top: 20px;
        }
    }
  }
}
</style>