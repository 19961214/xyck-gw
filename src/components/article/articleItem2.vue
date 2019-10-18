<template>
  <div>
    <el-row class="gy-index-intro2">
      <div class="gy-intro-title2">创始人团队</div>
      <div class="gy-content2-wrap">
        <div class="gy-content-item">
          <div class="item-header-photo">
            <img src="../../assets/img/chenliqiang.png" alt />
          </div>
          <div class="item-content-bottom">
            <div class="item-bottom-line"></div>
            <p class="gy-name">陈利强</p>
            <p class="gy-text2">董事长</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />主管公司宏观战略发展，并分管公共关系工作。
              <br />曾任职达芙妮、宾度等知名品牌运营负责人。2013年至今作为独立投资人，投资了多个重要品牌和项目。
            </p>
          </div>
        </div>
        <div class="gy-content-item">
          <div class="item-header-photo">
            <img src="../../assets/img/yubenjin.png" alt />
          </div>
          <div class="item-content-bottom">
            <div class="item-bottom-line"></div>
            <p class="gy-name">于本金</p>
            <p class="gy-text2">董事、CEO</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />香港大学组织与人力资源管理研究生
              <br />曾任华夏邓白氏中国商业信息咨询顾问；中智关爱通华南大区负责人。具有超过10年的销售及市场、公共关系管理经验。曾带领团队服务过广汽丰田、周大福、HSBC、平安银行、迅雷、医联、固生堂等重要项目。
            </p>
          </div>
        </div>
        <div class="gy-content-item">
          <div class="item-header-photo">
            <img src="../../assets/img/jiangyaqiu.png" alt />
          </div>
          <div class="item-content-bottom">
            <div class="item-bottom-line"></div>
            <p class="gy-name">姜亚球</p>
            <p class="gy-text2">董事、CTO</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />国防科技大学计算机专业，10 年以上软件研发、架构、管理经验。曾就职于微软、林洋电子知名上市企业，并先后担任任 Q 房网技术总监及小科金融 CTO 等职位，负责房产平台及房产金融平台的搭建。对互联网平台建设、互联网金融运作等有深刻的认识及丰富的管理经验。
            </p>
          </div>
        </div>
        <div class="gy-content-item">
          <div class="item-header-photo">
            <img src="../../assets/img/linwei.png" alt />
          </div>
          <div class="item-content-bottom">
            <div class="item-bottom-line"></div>
            <p class="gy-name">林玮</p>
            <p class="gy-text2">董事、投资公司总经理</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />浙江大学生创业联盟创业导师，中国青年互联网创业大赛评委，浙江省优秀投资人。曾任银江集团资金管理部总经理；银江资本首席执行官。其投资的优秀企业代表有：京颐科技，趣医网，爱股票，天铁股份，每日互动等。
            </p>
          </div>
        </div>
        <div class="gy-content-item">
          <div class="item-header-photo">
            <img src="../../assets/img/zhanyouyi.png" alt />
          </div>
          <div class="item-content-bottom">
            <div class="item-bottom-line"></div>
            <p class="gy-name">詹有义</p>
            <p class="gy-text2">董事、总会计师</p>
            <p class="gy-text3">
              厦门大学EMBA。
              <br />中国财政部内部控制标准委员会咨询专家，资深中国注册会计师。厦门大学管理学院“鸿雁计划”优秀导师。
              <br />为多家企业集团、国有企业提供了企业架构重组、内部控制制度设计审计、纳税筹划、财务规划等服务。
            </p>
          </div>
        </div>
        
      </div>
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
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 30px;
      .item-header-photo {
        width: 216px;
        height: 200px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(238, 238, 238, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .item-content-bottom {
        width: 216px;
        height: 300px;
        background: rgba(255, 255, 255, 1);
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        .item-bottom-line {
          width: 216px;
          height: 4px;
          background: rgba(71, 181, 255, 1);
          transform: translateX(-216px);
        }
        .gy-name {
          padding-top: 49px;
          color: #333;
          font-size: 14px;
        }
        .gy-text2 {
          margin-top: 17px;
          color: #666;
          font-size: 14px;
        }
        .gy-text3 {
          opacity: 0;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
          padding: 29px 21px 0 19px;
        }
      }
    }
    .gy-content-item:hover > .item-content-bottom > .gy-name {
      transform: translateY(-100px);
      opacity: 0;
      transition: all 0.8s;
    }
    .gy-content-item:hover > .item-content-bottom > .gy-text2 {
      transform: translateY(-100px);
      opacity: 0;
      transition: all 0.8s;
    }
    .gy-content-item:hover > .item-content-bottom > .gy-text3 {
      opacity: 1;
      transform: translateY(-100px);
      transition: all 0.8s;
    }
    .gy-content-item:hover > .item-content-bottom > .item-bottom-line {
      transform: translateX(0px);
      transition: all 0.8s;
    }
    .gy-content-item:hover > .item-content-bottom {
      background: rgba(108, 119, 127, 1);
      transition: all 0.8s;
    }
  }
}
</style>