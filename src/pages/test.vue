<template>
  <div>{{msg}}{{add.join(',')}}</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'haha',
        add: [ 2, 3, 3, 4, 5, 5, 66 ]
      }
    }
  }
</script>
