<template>
  <div>
    <!-- 产品介绍 -->
    <el-row class="jr-index-intro1">
      <div class="jr-intro-title">厦云创科愿与您携手并进，共创辉煌</div>
      <div class="jr-content-wrap">
        <div class="jr-content-text">
          <p class="jr-content-p1">你与我们的距离就只是一张简历的问题，厦云创科大家庭欢迎各位有志之士的加入，一起壮大厦云，笑傲江湖！</p>
          <p class="jr-content-p2">在厦云的每一天都是新奇与挑战，激情与冒险，每一天我们洒下的汗水都是为了浇灌希望的种子，使之长成参天大树！</p>
          <p class="jr-content-p3">让我们每个厦云人都可以在厦云大家庭中缔造自己的传奇，实现自己的事业目标和有意义的人生！</p>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "gousItem1"
};
</script>
<style scoped lang="less">
.jr-index-intro1 {
  background-color: #fff;
  padding-bottom: 60px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .jr-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jr-content-wrap {
    width: 1000px;
    display: flex;
    justify-content: center;
    .jr-content-text {
      width: 842px;
      font-size: 16px;
      color: #666;
      display: flex;
      flex-direction: column;
      align-items: center;
      .jr-content-p1 {
        line-height: 26px;
      }
      .jr-content-p2 {
        line-height: 26px;
        margin-top: 20px;
      }
      .jr-content-p3 {
        line-height: 26px;
        margin-top: 20px;
      }
    }
  }
}
</style>