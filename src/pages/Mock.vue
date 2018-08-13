<template>
    <div class="demo">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <ul>
        <li v-for="item in list">
          <span>{{item.author_name}}</span>
          <!--<img :src="item.thumbnail_pic_s" alt="">-->
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'Mock',
    data () {
      return {
        list: [],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    created () {
      // this.getData();
    },
    methods: {
      getData () {
        this.axios.get('http://127.0.0.1:9428/warn_info')
          .then(res => {
            console.log(res.data)
          })
        // this.axios.get('/news/index')
        //   .then(res=> {
        //     console.log(res.data);
        //     this.list = [...res.data.articles]
        //   })
      },
      handleDelete (index, row) {
        console.log(row.address)
        this.tableData.splice(index, 1)
      },
      handleClick (row) {
        console.log(row)
      }
    }
  }
</script>

<style>
  .has-gutter {
    /*background: #e8e8e8;*/
  }
  .el-table th, .el-table tr {
    background: transparent;
  }
</style>

