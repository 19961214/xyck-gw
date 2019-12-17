<template>
  <div id="call-header-back2">
    <div class="hd-item1-wrap">
      <!-- <img  class="index-item1-img" src="../assets/img/index-1.png" alt /> -->
      <div class="index-item1-text-wrap">
        <div class="index-item1-text1">用科技打造更专业的人财税一体化商业服务</div>
        <div class="index-item1-text2-wrap">
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>佣 金 结 算</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>税 收 优 惠</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>人 力 资 源</span>
          </div>
          <div class="index-item1-text2">
            <img src="../assets/img/icon.png" alt />
            <span>产 业 运 营</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item-wraps">
      <div class="item-wrap">
          <div class="item-title">
            活动资讯 >
            <p>活动资讯</p>
          </div>
          <div class="item-content-wrap">
            <div class="item-content-text1">工薪阶层如何做税务筹划 工薪阶层税务筹划解析</div>
            <div class="item-content-text2">2019-10-09</div>
            <div class="item-content-text3">
              个税一直都是工薪阶层非常在意的事情。辛辛苦苦赚来的钱，却要拿出一大截交个税，谁都不会乐意。所以下面厦云创科小编给大家说说工薪阶层如何通过税务筹划给自己的收入增收。
              <br />工薪阶层为什么要做税务筹划
              <br />个人所得税是与工薪阶层密切相关的一个税种，工资越高，需要缴纳的个人所得税也越来越多。中国工薪阶层税收占个税总税负的50%；而美国将近50%的工薪阶层只承担了联邦所得税的5%，10%的最高收入者承担了个人所得税的超过60%比重。
              <br />目前工薪阶层的个人所得税是由企业代扣代缴的，对于个人来说，被扣的钱多了，心里难免不舒服，而对于企业来说，一方面不得不提员工代扣代缴个税，另一方面，如果想要留住一些高质量的人才，就不得不提高薪资，或者承担员工的个税，那么企业的人力成本就大大提高了。无论是哪一种办法，都是一种吃力不讨好的活儿。所以说税务筹划非常重要。
            </div>
            <div class="item-img-wrap">
              <img class="item-img" src="../assets/img/item4.png" alt />
            </div>
            <div class="item-content-text4">
              合理选择存货计价方法
              <br />税务筹划，一方面可以帮助员工提高收入，另一方也能够帮助企业降低人力成本，留住人才。是一种双赢的决定。
              <br />工薪阶层如何做税务筹划
              <br />那么工薪阶层该如何做税务筹划呢？
              <br />
              <br />据了解，目前很多公司为为了让员工少交个税。就会员工找发票来换提成，员工为了拿提成，凑发票，就会到各种电线杆上去找，各种渠道去买。其实这是一种非常不明智的做法。随着金税三期的越渐成熟，这种做法也显得越来越危险，无异于走钢丝。这也不是小编要说的税务筹划。
              <br />一定要记住，税务筹划，一定是合法合规的。税务筹划的方式有很多种，老板和会计不要只盯着眼前工资表的几种违规手段，被稽查到了得不偿失。会计需要了解更多的收税优惠政策并合理加以利用。如果企业会计不够专业，建议老板们找专业的机构委托办理，比如厦云创科
              以上就是关于工薪阶层如何做税务筹划的内容，仅供参考。
            </div>
          </div>
        </div>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  .hd-item1-wrap {
    width: 100%;
    height: 500px;
    margin-top: 58px;
    background: url("../assets/img/zx-1.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .index-item1-text-wrap {
      .index-item1-text1 {
        font-size: 34px;
        color: #fff;
      }
      .index-item1-text2-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .index-item1-text2 {
          margin-top: 32px;
          display: inline-block;
          img {
            margin-left: 20px;
            width: 16px;
            height: 14px;
          }
          span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            margin-left: 9px;
          }
        }
      }
    }
  }
  .item-wraps {
    margin-top: 30px;
    width: 1000px;
    .item-wrap {
      // margin-top: 40px;
      margin-bottom: 60px;
      padding: 39px 0 0 31px; 
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
        
        padding-left: 31px;
        // padding-right: 59px;
        // padding-bottom: 66px;
        padding-top: 39px;
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
  }
}
</style>