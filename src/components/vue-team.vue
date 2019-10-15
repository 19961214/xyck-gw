<template>
  <div>
    <el-row>
      <el-col :span="24" id="cp-content2">
        <img src="../assets/img/jj-1.png" alt />
      </el-col>
    </el-row>
    <teamItem1></teamItem1>
    <teamItem2></teamItem2>
    <teamItem3></teamItem3>
    <teamItem4></teamItem4>
    <teamItem5></teamItem5>
  </div>
</template>

<script>
import teamItem1 from "./team/teamItem1.vue";
import teamItem2 from "./team/teamItem2.vue";
import teamItem3 from "./team/teamItem3.vue";
import teamItem4 from "./team/teamItem4.vue";
import teamItem5 from "./team/teamItem5.vue";
export default {
  name: "vue-index",
  components: {
    teamItem1,
    teamItem2,
    teamItem3,
    teamItem4,
    teamItem5
  },
  mounted() {
      var dis = document.getElementById("cp-content2");
      dis.scrollIntoView();
  }
};
</script>
<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 1480px) {
  #cp-content2 {
    margin: 0 auto;
    //   transform: translate(0, -85px);
    position: relative;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1024px) {
  #cp-content2 {
    margin: 0 auto;
    //   transform: translate(0, -85px);
    position: relative;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  #cp-content2 {
    margin: 0 auto;
    //   transform: translate(0, -85px);
    position: relative;
    img {
      width: 100%;
    }
  }
}
#cp-content2 {
  margin: 0 auto;
  //   transform: translate(0, -85px);
  position: relative;
  img {
    width: 100%;
  }
}
</style>