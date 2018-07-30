<template>
    <div>
      <p>下面是弹窗的name</p>
      <p>{{name}}</p>
      <p>{{msg}}</p>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        props: ['name','url'],
        name: "Alert",
        data() {
          return {
            msg: ''
          }
        },
        mounted() {
          // this.getData()
        },
        methods: {
          getData() {
            axios({
              method:'get',
              url:'http://127.0.0.1:8081/' + this.url,
            })
              .then(res=> {
                console.log(res.data);
                this.msg = res.data;
              })
          }
        }
    }
</script>

<style scoped>

</style>
