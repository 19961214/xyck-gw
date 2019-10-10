<template>
  <div>
    <el-row class="gy-index-intro2">
      <div class="gy-intro-title2">新闻动态</div>
      <el-col :span="16" :offset="4">
        <div class="gy-content2-wrap">
          <div class="gy-content-item gy-content-item1">
            <p class="gy-name">陈利强</p>
            <p class="gy-text2">董事长</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />主管公司宏观战略发展，并分管公共关系工作。
              <br />曾任职达芙妮、宾度等知名品牌运营负责人。2013年至今作为独立投资人，投资了多个重要品牌和项目。
            </p>
          </div>
          <div class="gy-content-item gy-content-item2">
            <p class="gy-name">于本金</p>
            <p class="gy-text2">董事、CEO</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />香港大学组织与人力资源管理研究生
              <br />曾任华夏邓白氏中国商业信息咨询顾问；中智关爱通华南大区负责人。具有超过10年的销售及市场、公共关系管理经验。曾带领团队服务过广汽丰田、周大福、HSBC、平安银行、迅雷、医联、固生堂等重要项目。
            </p>
          </div>
          <div class="gy-content-item gy-content-item3">
            <p class="gy-name">姜亚球</p>
            <p class="gy-text2">董事、CTO</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />国防科技大学计算机专业，10 年以上软件研发、架构、管理经验。曾就职于微软、林洋电子知名上市企业，并先后担任任 Q 房网技术总监及小科金融 CTO 等职位，负责房产平台及房产金融平台的搭建。对互联网平台建设、互联网金融运作等有深刻的认识及丰富的管理经验。
            </p>
          </div>
          <div class="gy-content-item gy-content-item4">
            <p class="gy-name">林玮</p>
            <p class="gy-text2">董事、投资公司总经理</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />浙江大学生创业联盟创业导师，中国青年互联网创业大赛评委，浙江省优秀投资人。曾任银江集团资金管理部总经理；银江资本首席执行官。其投资的优秀企业代表有：京颐科技，趣医网，爱股票，天铁股份，每日互动等。
            </p>
          </div>
          <div class="gy-content-item gy-content-item5">
            <p class="gy-name">詹有义</p>
            <p class="gy-text2">董事、总会计师</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />中国财政部内部控制标准委员会咨询专家，资深中国注册会计师。厦门大学管理学院“鸿雁计划”优秀导师。<br>
              为多家企业集团、国有企业提供了企业架构重组、内部控制制度设计审计、纳税筹划、财务规划等服务。
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "articleItem2"
};
</script>
<style lang="less">
.gy-index-intro2 {
  background-color: #f7fcff;
  padding-bottom: 60px;
  .gy-intro-title2 {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gy-content2-wrap {
    display: flex;
    justify-content: center;
    .gy-content-item {
      width: 245px;
      height: 549px;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      .gy-name {
        padding-top: 184px;
        color: #333;
        font-size: 14px;
      }
      .gy-text2 {
        margin-top: 9px;
        color: #666;
        font-size: 14px;
      }
      .gy-text3 {
        color: #333;
        font-size: 14px;
        margin-top: 16px;
        line-height: 22px;
        padding: 0 35px 0 34px;
      }
    }
    .gy-content-item1{
background: url("../../assets/img/chenliqiang.png") center center
        no-repeat;
    }
    .gy-content-item2{
background: url("../../assets/img/yubenjin.png") center center
        no-repeat;
    }
    .gy-content-item3{
background: url("../../assets/img/jiangyaqiu.png") center center
        no-repeat;
    }
    .gy-content-item4{
background: url("../../assets/img/linwei.png") center center
        no-repeat;
    }
    .gy-content-item5{
background: url("../../assets/img/zhanyouyi.png") center center
        no-repeat;
    }
  }
}
</style>