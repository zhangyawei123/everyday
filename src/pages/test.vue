<template>
  <div class="contianer">
    <span>文字</span>
    <a href="">hahah大萨达</a>
    <span>dswqd</span>
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
 .contianer {
   width: 10rem;
   height: 3rem;
   background: #f0f;
 }
 div {
   font-size: 12px;
 }
 [data-dpr="2"] div {
   font-size: 24px;
 }
 [data-dpr="3"] div {
   font-size: 36px;
 }
</style>
