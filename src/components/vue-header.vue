<template>
  <el-row>
    <el-col :span="24">
      <div :class="{'headerBack':headerColor}" class="bg-black">
        <el-row class="nav">
          <div class="nav-wrap">
            <div>
              <div class="header-img-wrap">
                <img src="../assets/img/logo1.png" alt />
              </div>
            </div>
            <router-link to="/index">
              <div>首页</div>
            </router-link>
            <router-link to="/article">
              <div>关于厦云</div>
            </router-link>
            <router-link to="/product">
              <div>产品介绍</div>
            </router-link>
            <router-link to="/team">
              <div>解决方案</div>
            </router-link>
            <router-link to="/story">
              <div>活动资讯</div>
            </router-link>

            <!-- <router-link to="/us">
              <div :span="2" :offset="0">联系我们</div>
            </router-link>
            <router-link to="/gous">
              <div :span="2" :offset="0">加入我们</div>
            </router-link> -->
            <div class="phone" :span="4" :offset="1">
              <img class="phone-img" src="../assets/img/tel1.png" alt />0571-87299551
            </div>
          </div>
        </el-row>
      </div>
      <div class="select">
        <el-select v-model="option" placeholder="请选择" @change="link">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "vue-header",
  data() {
    return {
      options: [
        { label: "首页", value: "index" },
        { label: "关于厦云", value: "article" },
        { label: "产品介绍", value: "product" },
        { label: "解决方案", value: "team" },
        { label: "活动资讯", value: "story" },
        // { label: "联系我们", value: "us" },
        // { label: "加入我们", value: "gous" }
      ],
      option: "index",
      headerColor: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  methods: {
    link: function() {
      this.$router.push({ path: "/" + this.option });
    }
    // menu() {
    //   // this.scroll =
    //   //   document.documentElement.scrollTop || document.body.srcollTop;
    //   //   console.log(this.scroll)
    //   var scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
    //   // console.log(scrollTop)
    //   var timer = null;
    //   clearTimeout(timer);
    //   timer = setTimeout(() => {
    //     if (scrollTop >= 100) {
    //       this.headerColor = true;
    //       // console.log(this.headerColor)
    //     } else {
    //       this.headerColor = false;
    //       // console.log(this.headerColor)
    //     }
    //   }, 200);
    // }
  }
};
</script>

<style lang="less">
@import url("../assets/css/reset.css");
@media (max-width: 768px) {
  .bg-black {
    display: none;
  }
  .select {
    display: block !important;
    position: absolute !important;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
  }
}
.select {
  display: none;
  div {
    width: 100%;
  }
}
.bg-black {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  width: 100%;
  height: 60px;
  line-height: 60px;
  .nav {
    display: flex;
    font-size: 14px;
    justify-content: center;
    .nav-wrap{
      width: 1000px;
      display: flex;
      justify-content: space-around;
    }
    .header-img-wrap {
      width: 136px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 136px;
        height: 58px;
      }
    }
    .router-link-active {
      color: red;
    }
    a {
      text-decoration: none;
      color: red;
      div {
        cursor: pointer;
        color: #fff;
        text-align: center;
      }
      div:hover {
        color: #15abfe;
      }
    }
    .router-link-active {
      div {
        border-bottom: 3px solid #15abfe;
        color: #15abfe;
      }
    }
    .phone {
      color: #ff9933;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 200px;
      .phone-img {
        width: 20px;
        height: 21px;
        margin-right: 5px;
      }
    }
  }
}
.headerBack {
  background-color: #1a334d;
}
</style>