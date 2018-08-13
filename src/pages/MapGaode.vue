<template>
    <div>
      <div id="container"></div>
    </div>
</template>

<script>
    export default {
      name: 'MapGaode',
      mounted () {
        this.mapInit()
      },
      methods: {
        mapInit () {
          const map = new AMap.Map('container', {
            zoom: 11, // 级别
            center: [116.397428, 39.90923] // 中心点坐标
          })
          AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () { // 异步加载插件
            var toolbar = new AMap.ToolBar()
            map.addControl(toolbar)
            var driving = new AMap.Geolocation()// 驾车路线规划
            map.addControl(driving)
          })
        }
      }
    }
</script>

<style scoped>
  #container {width:100%; height: 600px; }
</style>
