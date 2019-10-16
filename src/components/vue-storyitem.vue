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
            <div class="item-content-text1">中小企业怎么做税务筹划 中小企如何做好税务筹划</div>
            <div class="item-content-text2">2019-04-03</div>
            <div class="item-content-text3">
              对于中小企业来讲，税务管理是企业经营管理的一项非常重要的内容。那么，中小企业想要做好税务筹划有哪些方法可用呢？厦云创科小编给大家总结了5种。供大家参考。
              <br />合理选择企业组织形式
              <br />新《企业所得税法》实行的是法人所得税制，企业不同的组织形式对是否构成纳税人有着不同的结果。创业初期，有限的收入不足抵减大量支出的企业一般应设为分公司，而能够迅速实现盈利的企业一般应设为法人，另外，具有法人资格的子公司，在符合“小型微利企业”的条件下，还可以减按20%的税率缴纳企业所得税。
              <br />及时合理列支费用
              <br />及时合理列支费用支出主要表现在费用的列支标准、列支期间、列支数额、扣除限额等方面，具体来讲，进行费用列支时应注意以下几点：
              <br />一是发生商品购销行为要取得符合要求的发票。
              <br />二是费用支出要取得符合规定的发票。
              <br />三是费用发生及时入账。
              <br />四是适当缩短摊销期限。
              <br />五是对于限额列支的费用争取充分列支，减少企业的涉税风险。
            </div>
            <div class="item-img-wrap">
              <img class="item-img" src="../assets/img/item.png" alt />
            </div>
            <div class="item-content-text4">
              合理选择存货计价方法
              <br />各种存货计价方法，对于产品成本、企业利润及所得税都有较大的影响。
              <br />一般情况下，选择加权平均法对企业发出和领用存货进行计价，企业计入各期产品成本的材料等存货的价格比较均衡，不会忽高忽低。
              <br />恰当运用固定资产折旧
              <br />固定资产折旧是缴纳所得税前准予扣除的项目，在收入既定的情况下，折旧额越大，应纳税所得额就越少。具体可以从折旧方法的选择、折旧年限的估计和净残值的确定等方面进行筹划。
              <br />充分利用企业所得税优惠政策
              <br />新《企业所得税法》改变了原来的税收优惠格局，实行“以行业优惠为主，区域优惠为辅”的政策。企业如果充分利用税收优惠政策，就可享受节税效益。
              <br />以上就是关于中小企业怎么做税务筹划的内容，仅供参考。
              <br />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "vue-storyitem",
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