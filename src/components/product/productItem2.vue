<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="cp2-index-intro1">
      <el-col :span="16" :offset="4">
        
        <el-col :span="12" :offset="0">
          <div class="img-wrap2">
            <div class="img-wrap-text1">掌钱进</div>
            <div
              class="cp-img-wrap-text2"
            >针对企业税负成本高、缺少进项发票、高收入个人税负压力大等高收入群体用户痛点，厦云创科提供出一套专属定制的“掌钱进”计划，为客户提供一站式税务筹划和代理服务，为客户在税优地注册个人独资企业/个人工作室，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而综合成本可降至0.5%-6.45%，为客户节省最大的成本，实现最大的收益。</div>
            <!-- <div class="cp-img-wrap-text3">客户在掌税通平台为自由职业者支付款项掌税通平台为自由职业者代缴税费</div> -->
            <div class="cp-img-wrap-text4">申请试用</div>
          </div>
        </el-col>
        <el-col :span="12" :offset="0">
          <div class="img-wrap">
            <img src="../../assets/img/back-img4.png" alt />
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "productItem2"
};
</script>
<style lang="less">
.cp2-index-intro1 {
  background-color: #F7FCFF;
//   padding-bottom: 60px;
  .img-wrap {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-wrap2 {
    padding: 59px 0 67px 60px;
    .img-wrap-text1 {
      color: #15abfe;
      font-size: 30px;
    }
    .cp-img-wrap-text2 {
      width: 430px;
      margin-top: 41px;
      color: #333333;
      font-size: 14px;
      line-height: 26px;
    }
    .cp-img-wrap-text3 {
      width: 258px;
      margin-top: 30px;
      color: #ff9900;
      font-size: 14px;
      line-height: 26px;
    }
    .cp-img-wrap-text4 {
        width: 120px;
        height: 40px;
        border: 1px solid #15ABFE;
        border-radius: 4px;
        text-align: center;
        line-height: 40px;
      color: #15abfe;
      font-size: 16px;
      margin-top: 27px;
      cursor: pointer;
    }
  }
}
</style>