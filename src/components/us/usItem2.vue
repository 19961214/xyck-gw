<template>
  <div>
    <el-row class="lx-index-intro3">
      <div class="lx-intro-title">公司地址</div>
      <div class="map-wraps">
        <div class="map-wrap">
          <img class="map-img" src="../../assets/img/map.png" alt />
          <div class="map-text">浙江省杭州市西湖区桃岭路桃源坞基金小镇16幢3A</div>
        </div>
        <div id="allmap"></div>
      </div>
        
    </el-row>
  </div>
</template>

<script>
export default {
  name: "usItem2",
  mounted() {
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    // map.centerAndZoom(point,12);
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(
      "浙江省杭州市西湖区桃岭路桃源坞基金小镇16幢3A",
      function(point) {
        if (point) {
          map.centerAndZoom(point, 15);
          map.addOverlay(new BMap.Marker(point));
        } else {
          alert("您选择地址没有解析到结果!");
        }
      },
      "杭州市"
    );
  }
};
</script>
<style scoped lang="less">
.lx-index-intro3 {
  background-color: #f4fafe;
  padding-bottom: 87px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .lx-intro-title {
    width: 100%;
    height: 143px;
    color: #333;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .map-wraps{
    width: 1000px;
  }
  .map-wrap {
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 1000;
    line-height: 50px;
    display: flex;
    align-items: center;
    .map-img {
      margin: 15px 20px;
    }
    .map-text {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 90px;
    }
  }
  #allmap {
    width: 100%;
    height: 351px;
  }
}
</style>