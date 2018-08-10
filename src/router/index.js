import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Echart from '@/pages/Echart'
import Store from '@/pages/Store'
import KeepAlive from '@/pages/KeepAlive'
import SlotC from '@/pages/SlotC'
import Dialog from '@/pages/Dialog'
import MapGaode from '@/pages/MapGaode'
import Mock from '@/pages/Mock'
import Upload from '@/pages/Upload'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/echart',
      component: Echart,
      meta: {
        title: '图表'
      }
    },
    {
      path: '/store',
      component: Store,
      meta: {
        title: '状态管理'
      }
    },
    {
      path: '/keepalive',
      component: KeepAlive,
      meta: {
        title: 'keep-alive功能',
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/slot',
      component: SlotC,
      meta: {
        title: 'slot插槽'
      }
    },
    {
      path: '/dialog',
      component: Dialog,
      meta: {
        title: 'Dialog'
      }
    },
    {
      path: '/gaode',
      component: MapGaode,
      meta: {
        title: '高德地图'
      }
    },
    {
      path: '/mock',
      component: Mock,
      meta: {
        title: 'mock模拟数据'
      }
    },
    {
      path: '/upload',
      component: Upload,
      meta: {
        title: '上传'
      }
    },
    {
      path: '/test',
      component: () => import('@/pages/test'),
      meta: {
        title: '测试页面'
      }
    },
    {
      path: '/zrender',
      component: () => import('@/pages/Zrender'),
      meta: {
        title: 'zrender'
      }
    },
    {
      path: '/vuxindex',
      component: () => import('@/pages/vuxpages/index'),
      meta: {
        title: 'vux-demo'
      }
    },
  ]
})
