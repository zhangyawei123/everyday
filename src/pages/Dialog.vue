<template>
    <div>
      <el-button @click="changeMsg('list_user')">传值1</el-button>
      <el-button @click="changeMsg('del_user')">传值2</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <Alert ref="alertPanel" :url="url" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible=false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
        </span>
      </el-dialog>
    </div>

</template>

<script>
  import Alert from '../components/Alert'
  export default {
    data() {
      return {
        dialogVisible: false,
        alertMsg: '',
        url: ''
      };
    },
    methods: {
      changeMsg(url) {
        this.dialogVisible = true;
        this.url = url;
        setTimeout(_=>{
          this.$refs.alertPanel.getData();
        },10)
      },
    },
    components: {
      Alert
    }
  };
</script>

<style scoped>

</style>
