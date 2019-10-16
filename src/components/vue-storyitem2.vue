<template>
  <div>
    <div id="call-header-back2"></div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="item-wrap">
          <div class="item-title">
            活动资讯 >
            <p>新闻详情</p>
          </div>
          <div class="item-content-wrap">
            <div class="item-content-text1">明年1月1日社保入税 这10大变化财务要注意</div>
            <div class="item-content-text2">2019-06-05</div>
            <div class="item-content-text3">
              国地税合并，税局征收社保，国家的这一系列措施，你是否都弄明白了？明年1月1日社保入税，厦云创科小编提醒各位财务人员，下面这10大变化要注意。
            </div>
            <div class="item-img-wrap">
              <img class="item-img" src="../assets/img/item6.png" alt />
            </div>
            <div class="item-content-text4">
              1、社保明年划归税局征收，企业员工离职率、失业率会加大，公司辞退员工的现象将会有一定的增加！员工对失业金的政策关注度将会大大加大！
              <br />2、社保明年划归税局征收，企业在招聘人员的时候将会更挑剔和苛刻！对人员在劳动效率和价值创造方面的要求会更高！
              <br />3、社保明年划归税局征收，自由职业者越来越多，个体户、小规模公司、个人独资企业等小微企业将会有一定的增加！
              <br />4、社保明年划归税局征收，企业用工模式不再单一，传统的全日制合同制用工方式将被突破，部分企业结合自身情况将会转向非全日制用工模式！
              <br />5、社保明年划归税局征收，企业用工对象将会越来越广泛和灵活，兼职员工会越来越多，企业聘用退休人员、企业招募已经有社保的人员将会成为常态！
              <br />6、社保明年划归税局征收，AI技术将盛行，人工智能越来越普遍，电子人来到了我们的身边！
              <br />7、社保明年划归税局征收，人力资源外包服务将更受企业爱戴，企业越来越呈现出小微化、全国化、非核心业务外包化的趋势！
              <br />8、社保明年划归税局征收，劳动报酬支付的方式将会也发生一定变化，实物形式、期权激励、应该正常报销的费用直接报销不再纳入工资表、内部合伙人分红的模式逐渐来临！
              <br />9、社保明年划归税局征收，企业人工支出将会越来越规范合法，因为不合规的成本对企业来讲已经太高了，企业员工的个税、工资、社保将越发透明！
              <br />10、社保明年划归税局征收，伴随着政策变化越发日新月异，企业越来越重视专业型、政策型、实用型、技能型、管理型、价值型、业务型的复合型财务人员，传统会计逐渐被淘汰出局！
              <br />以上就是关于明年1月1日社保入税的10大变化，仅供参考。
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "vue-storyitem2",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var dis = document.getElementById("call-header-back2");
    dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
#call-header-back2 {
  width: 100%;
  height: 60px;
  background-color: #1a334d;
}
.item-wrap {
  margin-top: 40px;
  margin-bottom: 60px;
  .item-title {
    color: #999;
    font-size: 14px;
    display: inline-block;
    p {
      display: inline-block;
      color: #12b5fe;
    }
  }
  .item-content-wrap {
    width: 100%;
    background-color: #fafafa;
    margin-top: 29px;
    padding-left: 52px;
    padding-right: 59px;
    padding-bottom: 66px;
    padding-top: 50px;
    .item-content-text1 {
      color: #333;
      font-size: 26px;
    }
    .item-content-text2 {
      margin-top: 19px;
      color: #999;
      font-size: 14px;
    }
    .item-content-text3 {
      margin-top: 37px;
      color: #333;
      font-size: 14px;
      line-height: 22px;
    }
    .item-img-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 41px;
      .item-img {
        width: 416px;
        height: 338px;
      }
    }
    .item-content-text4 {
      margin-top: 28px;
      color: #333;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>