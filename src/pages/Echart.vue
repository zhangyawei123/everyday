<template>
    <div>
      <div class="demo" id="main"></div>
    </div>
</template>

<script>
  let echarts = require('echarts')
  export default {
    data () {
        return {
          option: {
              title: {
                text: '异步数据加载示例'
              },
              tooltip: {},
              legend: {
                type: 'scroll',
                top: 'top',
                data: [{
                  name: '销量',
                  icon: 'circle'
                }],
                // itemWidth: 10,
                // itemHeight: 10,
                // padding: 0,
                formatter: function (name) {
                  return echarts.format.truncateText(name, 40, '14px Microsoft Yahei')
                },
                tooltip: {
                  show: true
                }
              },
              grid: {
                containLabel: true
              },
              xAxis: {
                data: [],
                nameLocation: 'start',
                inverse: false,
                min: 0,
                axisLine: {
                  lineStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                      }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    }
                  }
                },
                axisTick: {
                  show: true,
                  alignWithLabel: true,
                  inside: false,
                  length: 10
                },
                axisLabel: {
                  rotate: 0,
                  margin: 10,
                  formatter: '{value} kg'
                },
                splitLine: {
                  show: false
                },
                splitArea: {
                  show: false
                }
              },
              yAxis: {},
              series: [{
                name: '销量',
                type: 'bar',
                data: []
              }]
            }
        }
      },
    mounted () {
        this.$nextTick(function () {
          this.createChart()
        })
      },
    methods: {
        createChart () {
            // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('main'))
            // 绘制图表
          myChart.setOption(this.option)
          this.fetchData(function (data) {
              myChart.setOption({
                xAxis: {
                  data: data.categories
                },
                series: [{
                  // 根据名字对应到相应的系列
                  name: '销量',
                  data: data.data
                }]
              })
            })
        },
        fetchData (cb) {
            // 通过 setTimeout 模拟异步加载
          setTimeout(function () {
              cb({
                categories: [{
                  value: '咋子',
                  textStyle: {
                    fontSize: 20
                  }
                }, '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                data: [5, 20, 36, 10, 10, 20]
              })
            }, 10)
        }
      }
  }
</script>

<style scoped>
  .demo {
    height: 400px;
  }
</style>
