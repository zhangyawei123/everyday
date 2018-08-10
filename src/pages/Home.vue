<template>
  <div class="hello">
    <ul>
      <li><router-link to="/echart">百度图表echarts</router-link></li>
      <li><router-link to="/store">状态管理相关</router-link></li>
      <li><router-link to="/keepalive">keepalive状态</router-link></li>
      <li><router-link to="/slot">slot</router-link></li>
      <li><router-link to="/dialog">dialog</router-link></li>
      <li><router-link to="/gaode">高德地图</router-link></li>
      <li><router-link to="/mock">mock数据</router-link></li>
      <li><router-link to="/upload">图片上传</router-link></li>
      <li><router-link to="/test">测试页面</router-link></li>
      <li><router-link to="/zrender">zrender</router-link></li>
      <li><router-link to="/vuxindex">vux样式页面</router-link></li>
    </ul>
    <!--<SlotC>-->
      <!--<template slot="header">-->
        <!--<h1>这是header的slot</h1>-->
        <!--<p>可以增加任何内容可以是父组件的data里面的额数据{{msg}}</p>-->
      <!--</template>-->
      <!--<p>这是没有指定name的内容插槽，会插入到默认插槽，如果这行注释会显示组件slot定义的默认内容</p>-->
      <!--<template slot="footer">-->
        <!--<p>这是插入到定义footer的slot里面的内容</p>-->
      <!--</template>-->
    <!--</SlotC>-->
  </div>
</template>

<script>
  import SlotC from './SlotC'
  import Echart from './Echart'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {

    },
    components: {
      SlotC,Echart
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li {
    padding: 10px;
    margin-bottom: 5px;
    background: #f7f7f7;
  }
  li a {
    display: block;
    color: #0ff;
  }
</style>
