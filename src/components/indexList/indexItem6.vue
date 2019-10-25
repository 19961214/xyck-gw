<template>
  <div>
    <el-row class="index-intro2">
      <div class="index-intro-title">合作伙伴</div>

      <el-col :span="16" :offset="4">
        <div class="hz-content-wrap">
          <div class="content-wrap">
            <div class="img-item-wrap">
              <div class="img-item img-items">
                <img src="../../assets/img/back6-1.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-2.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-3.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-4.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-5.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-6.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-7.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-8.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-9.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-10.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-11.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-12.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-13.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-14.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-15.png" alt />
              </div>
            </div>

            <div class="img-item-wrap">
              <div class="img-item img-items">
                <img src="../../assets/img/back6-1.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-2.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-3.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-4.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-5.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-6.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-7.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-8.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-9.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-10.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-11.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-12.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-13.png" alt />
              </div>
              <div class="img-item">
                <img src="../../assets/img/back6-14.png" alt />
              </div>
              <div class="img-item img-items">
                <img src="../../assets/img/back6-15.png" alt />
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexItem2"
};
</script>
<style lang="less">
.index-intro2 {
  background-color: rgb(247, 252, 255);
  padding-bottom: 122px;
  .index-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hz-content-wrap {
    width: 100%;
    height: 330px;
    overflow: hidden;
    .content-wrap {
      width: 2380px;
      height: 330px;
      animation: move 8s linear infinite;
      .img-item-wrap {
        width: 1190px;
        height: 330px;
        float: left;
        overflow: hidden;
        .img-item {
          display: inline-block;
          background-color: #fff;
          width: 208px;
          height: 80px;
          margin: 30px 0 0 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 0px 30px 0px rgba(32, 148, 235, 0.15);
          border-radius: 4px;
          float: left;
        }
        .img-items{
          margin: 30px 0 0 30px;
        }
      }
    }
    @keyframes move {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-1190px);
      }
    }
  }
}
</style>