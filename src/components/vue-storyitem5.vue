<template>
  <div>
    <div id="call-header-back2"></div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="item-wrap">
          <div class="item-title">
            活动资讯 >
            <p>活动资讯</p>
          </div>
          <div class="item-content-wrap">
            <div class="item-content-text1">重磅利好第二弹——小微企业标准将放宽！</div>
            <div class="item-content-text2">2019-10-10</div>
            <div class="item-content-text3">
              在今天举行的国新办的新闻发布会上，财政部部长助理许宏才介绍，要加大减税降费力度和加大支出力度。许助理特别强调要放宽小型微利企业标准并加大优惠力度，放宽小型微利企业标准就是放宽认定条件，放宽后标准为，企业资产总额5000万元以下、从业人数300人以下、应纳税所得额300万元以下。
              <br />企业所得税法实施条例第九十二条，规定：企业所得税法第二十八条第一款所称符合条件的小型微利企业，是指从事国家非限制和禁止行业，并符合下列条件的企业：（一）工业企业，年度应纳税所得额不超过30万元，从业人数不超过100人，资产总额不超过3000万元；（二）其他企业，年度应纳税所得额不超过30万元，从业人数不超过80人，资产总额不超过1000万元。
              <br />2018年已经放宽到100万元。但是对资产总额和从业人数这两项指标一直沿用实施条例的规定没有放宽。2019年1月9日的国务院常务会议已经明确提出要放宽标准。从许助理的表述来看，这一次资产总额、从业人数标准也有了很大调高。
            </div>
            <div class="item-img-wrap">
              <img class="item-img" src="../assets/img/item5.png" alt />
            </div>
            <div class="item-content-text4">
              2019年1月2日，央行决定扩大定向降准优惠政策的覆盖面：从2019年起，将普惠金融定向降准小型和微型企业贷款考核标准由“单户授信小于500万元”调整为“单户授信小于1000万元”。<br />这一变化，将使普惠金融定向降准的优惠政策覆盖全部大中型商业银行、约90%的城商行和非县域农商行，释放大约4500亿元的流动性。<br />
核心就是一点，引导金融机构更好地满足小微企业的贷款需求，使更多的小微企业受益。<br />
未来，央行还将继续运用各种政策工具，从债券、信贷、股权等方面引导金融机构加大对民营企业小微企业支持力度。民营企业和小微企业融资难融资贵问题也将得到进一步缓解。<br />
2019年带来的可真是真金白银的减税好消息。1月9日，国务院常务会宣布推出一批针对小微企业的普惠性减税措施。小爱算了一笔账，一下子算出了“大礼包”的含金量： “这次小微企业的减税降费，涉及1798万家企业，占全国纳税企业总数的95%以上，里面98%是民营企业，也就是说，我国大部分的企业主体都能够通过这个政策受惠。”
2019年，更多的减税降费举措在路上。
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "vue-storyitem5",
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