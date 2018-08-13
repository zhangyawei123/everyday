<template>
    <div>
      <el-button @click="changeMsg('11')">传值1</el-button>
      <el-button @click="changeMsg('22')">传值2</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <Alert ref="alertPanel" :name="alertMsg" />
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
    data () {
      return {
        dialogVisible: false,
        alertMsg: '',
        url: ''
      }
    },
    methods: {
      changeMsg (name) {
        this.dialogVisible = true
        this.alertMsg = name
      }
    },
    components: {
      Alert
    }
  }
</script>

<style scoped>

</style>
