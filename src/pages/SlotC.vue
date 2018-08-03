<template>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <div class="main">
        <slot>{{this.msg}}</slot>
      </div>
      <footer>
        <slot name="footer"></slot>
      </footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next,slot, jumper"
        :total="1000">
        <span class="page-confirm" name="slot">确定</span>
      </el-pagination>
    </div>
</template>

<script>
    export default {
      name: "SlotC",
      props:['msg'],
      data() {
        return {
          msg: '子组件的内容'
        }
      },
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      },
      data() {
        return {
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4
        };
      }
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
  .page-confirm {
    padding: 0 10px;
    border: 1px solid #dcdfe6;
    text-align: center;
    margin-left: 15px;
    border-radius: 4px;
    color: #333;
  }
</style>
