<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="index-intro1">
      <div class="index-intro-title">活动资讯</div>
      <div class="index-intro1-hd-wrap">
        <div class="hd2-content-wrap" @click="gotoitem5">
          <img src="../../assets/img/item5.png" alt />
          <div class="hd2-content2">
            <p class="hd2-content2-text1">重磅利好第二弹——小微企业标准将放宽</p>
            <p
              class="hd2-content2-text2"
            >在今天举行的国新办的新闻发布会上，财政部部长助理许宏才介绍，要加大减税降费力度和加大支出力度。许助理特别强调要放宽小型微利企业标准并加大...</p>
            <p class="hd2-content2-text3">发布日期：2019.09.10</p>
          </div>
        </div>
        <div class="hd2-content-wrap" @click="gotoitem6">
          <img src="../../assets/img/item4.png" alt />
          <div class="hd2-content2">
            <p class="hd2-content2-text1">工薪阶层如何做税务筹划 工薪阶层税务筹划解析</p>
            <p
              class="hd2-content2-text2"
            >个税一直都是工薪阶层非常在意的事情。辛辛苦苦赚来的钱，却要拿出一大截交个税，谁都不会乐意。所以下面厦云创科小编给大家说工薪阶层如何通过税...</p>
            <p class="hd2-content2-text3">发布日期：2019.10.09</p>
          </div>
        </div>
      </div>
        
      <!-- <el-col :span="16" :offset="4">
        <div class="hd2-content-wrap">
          <img src="../../assets/img/hd2.png" alt />
          <div class="hd2-content2">
            <p class="hd2-content2-text1">创新，诠释为民服务的税务情怀</p>
            <p
              class="hd2-content2-text2"
            >第一次感受5G网络的速度，竟然是在办税服务大厅，对成都万华新城发展股份有限公司财务工作人员余娅来说，这是意想不到的体验，也是她和税务部门的...</p>
            <p class="hd2-content2-text3">发布日期：2019.09.09</p>
          </div>
        </div>
      </el-col>
      <el-col :span="16" :offset="4">
        <div class="hd2-content-wrap">
          <img src="../../assets/img/hd2.png" alt />
          <div class="hd2-content2">
            <p class="hd2-content2-text1">创新，诠释为民服务的税务情怀</p>
            <p
              class="hd2-content2-text2"
            >第一次感受5G网络的速度，竟然是在办税服务大厅，对成都万华新城发展股份有限公司财务工作人员余娅来说，这是意想不到的体验，也是她和税务部门的...</p>
            <p class="hd2-content2-text3">发布日期：2019.09.09</p>
          </div>
        </div>
      </el-col>
      <el-col :span="16" :offset="4">
        <div class="hd2-content-wrap">
          <img src="../../assets/img/hd2.png" alt />
          <div class="hd2-content2">
            <p class="hd2-content2-text1">创新，诠释为民服务的税务情怀</p>
            <p
              class="hd2-content2-text2"
            >第一次感受5G网络的速度，竟然是在办税服务大厅，对成都万华新城发展股份有限公司财务工作人员余娅来说，这是意想不到的体验，也是她和税务部门的...</p>
            <p class="hd2-content2-text3">发布日期：2019.09.09</p>
          </div>
        </div>
      </el-col>-->
    </el-row>
  </div>
</template>

<script>
export default {
  name: "storyItem2",
  methods: {
    gotoitem5() {
      this.$router.push({ path: "/story/item5" });
    },
    gotoitem6() {
      this.$router.push({ path: "/story/item6" });
    }
  }
};
</script>
<style lang="less">
.index-intro1 {
  background-color: #fff;
  padding-bottom: 60px;
  .index-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .index-intro1-hd-wrap{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hd2-content-wrap {
    width: 1000px;
    height: 130px;
    background-color: #fafafa;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    position: relative;
    cursor: pointer;
    img {
      width: 120px;
      height: 91px;
      margin: 19px 0 20px 20px;
    }
    .hd2-content2 {
      margin: 19px 0 20px 30px;
      
      .hd2-content2-text1 {
        font-size: 16px;
        font-weight: 400;
        color: rgba(21, 171, 254, 1);
        line-height: 26px;
      }
      .hd2-content2-text2 {
        font-size: 14px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 26px;
      }
      .hd2-content2-text3 {
        font-size: 14px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 26px;
        position: absolute;
        right: 18px;
        bottom: 19px;
      }
    }
  }
  .hd2-content-wrap:hover {
    box-shadow: 0px 0px 30px 0px rgba(3, 49, 83, 0.15);
  }
}
</style>