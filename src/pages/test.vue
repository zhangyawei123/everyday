<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><span class="line"></span>处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <template slot="title"><span class="line"></span></template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><span class="line"></span>消息中心</el-menu-item>
      <el-menu-item index="4"><span class="line"></span><a href="javascript:void(0)" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .el-menu-item, .el-submenu__title {
    position: relative;
  }
  .line {
    position: absolute;
    width: 0;
    height: 3px;
    top: 0;left: 50%;
    background-color: #fff;
    transition: all .3s;
  }
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border: none;
  }
  .el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title,.el-menu--horizontal>.el-menu-item.is-active {
    border: none;
  }
  .el-menu--horizontal>.el-menu-item.is-active .line,.el-menu--horizontal>.el-submenu.is-active .line{
    background-color: #f00;
    width: 100%;
    left: 0;
  }
</style>
