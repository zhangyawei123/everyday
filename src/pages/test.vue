<template>
  <div class="contianer">
    <!--<span>文字文字文字文字文字文字文字文字文字文字11</span>-->
    <!--<a href="">hahah大萨达</a>-->
    <!--<span>{{md5msg}}</span>-->
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
    <ul style="position: absolute;left: 0;top: 0;">
      <li v-for="item in list1">{{item}}</li>
    </ul>
    <ul class="num-box">
      <li v-for="item in numlist" @click="pushvalue(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
  import md5 from 'md5'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        list: ['','','',''],
        list1: [],
        numlist: [1,2,3,4,5,6,7,8,9,0]
      };
    },
    computed: {
      md5msg() {
        return md5('hha')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      pushvalue(value) {
        if(this.list1.length < 4) {
          this.list1.push(value)
        }else {
          return
        }
      }
    }
  }
</script>
<style>
 .contianer {
   width: 7.5rem;
   height: 3rem;
   /*background: #f0f;*/
   font-size: .36rem;
   border-bottom: 1px solid #00f;
 }
  li {
    margin: 10px;
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
  }
  .num-box {
    width: 400px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
