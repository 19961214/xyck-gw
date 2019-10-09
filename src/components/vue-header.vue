<template>
  <el-row>
    <el-col :span="24" class>
      <div class="bg-black">
        <el-row class="nav">
          <el-col :span="2" :offset="2">
            <img src="../assets/img/logo.png" alt />
          </el-col>
          <router-link to="/index">
            <el-col :span="2" :offset="1">首页</el-col>
          </router-link>
          <router-link to="/product">
            <el-col :span="2" :offset="0">产品介绍</el-col>
          </router-link>
          <router-link to="/team">
            <el-col :span="2" :offset="0">解决方案</el-col>
          </router-link>
          <router-link to="/story">
            <el-col :span="2" :offset="0">活动咨询</el-col>
          </router-link>
          <router-link to="/article">
            <el-col :span="2" :offset="0">关于厦云</el-col>
          </router-link>
          <router-link to="/us">
            <el-col :span="2" :offset="0">联系我们</el-col>
          </router-link>
          <router-link to="/gous">
            <el-col :span="2" :offset="0">加入我们</el-col>
          </router-link>
          <el-col class="phone" :span="4" :offset="1"><img class="phone-img" src="../assets/img/tel.png" alt="">0755-25888852</el-col>
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
        { label: "产品介绍", value: "product" },
        { label: "解决方案", value: "team" },
        { label: "活动咨询", value: "story" },
        { label: "关于厦云", value: "article" },
        { label: "联系我们", value: "us" },
        { label: "加入我们", value: "gous" }
      ],
      option: "index"
    };
  },
  methods: {
    link: function() {
      this.$router.push({ path: "/" + this.option });
    }
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
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  width: 100%;
  height: 60px;
  line-height: 60px;
  .nav {
    font-size: 14px;
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
      color: #666666;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      .phone-img{
        width: 21px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
}
</style>