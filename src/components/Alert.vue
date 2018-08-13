<template>
    <div>
      <p>下面是弹窗的name</p>
      <p>{{name}}</p>
      <p>{{msg}}</p>
    </div>
</template>

<script>
  export default {
    props: ['name'],
    name: 'Alert',
    data () {
      return {
        msg: ''
      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
