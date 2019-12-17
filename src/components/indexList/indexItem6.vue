<template>
  <div>
    <el-row class="index-intro2">
      <div class="index-intro-title">合作伙伴</div>

      <div class="index-intro2-wrap">
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
      </div>
        
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
  background: url("../../assets/img/index6-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  padding-bottom: 122px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .index-intro-title {
    width: 100%;
    margin: 60px 0;
    color: #333;
    font-size: 24px;
    font-weight:600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .index-intro2-wrap{
    width: 1000px;
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
          box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.1);
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