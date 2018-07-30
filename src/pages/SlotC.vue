<template>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <div class="main">
        <slot>可以加入默认显示内容</slot>
      </div>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "SlotC"
    }
</script>

<style scoped>
  header {
    background: #f7f7f7;
  }
  .main {
    background: #d5d5d5;
  }
  footer {
    background-color: #f1f2f3;
  }
</style>
