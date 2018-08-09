<template>
  <div class="container">
    <div id="main"></div>
  </div>
</template>

<script>
  import zrender from 'zrender'
  export default {
    name: "Zrender",
    data() {
      return {
        zr: '',
        circle: ''
      }
    },
    mounted() {
      this.zrInit();
      this.circle.shape.r = 100;
      console.log(this.circle.shape.r)
    },
    methods: {
      zrInit() {
        this.zr = zrender.init(document.getElementById('main'));
        this.circle = new zrender.Circle({
          shape: {
            cx: 150,
            cy: 50,
            r: 40
          },
          style: {
            fill: 'none',
            stroke: '#F00'
          }
        });
        this.zr.add(this.circle);
      }
    }
  }
</script>

<style scoped>
  #main {
    height: 100vh;
  }
</style>
