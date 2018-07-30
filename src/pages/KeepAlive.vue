 <template>
    <div>
      <div>可以配置router里面的meta字段，也可以直接包在router-view上面，用keep-alive的属性，include、exclude</div>
        <el-pagination
          layout="prev, pager, next"
          :current-page.sync="currentPage"
          :total="50">
        </el-pagination>
      <el-input v-model="inputValue"></el-input>
      <li><router-link to="/slot">slot</router-link></li>
        <!--<li><router-link to="/store">状态管理相关</router-link></li>-->
        <div class="dmeo" @click="active=!active">
          <div class="inner" :class="active?'active':''"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "KeepAlive",
      data() {
          return {
            currentPage: 1,
            inputValue: '',
            active: false,
          }
      }
    }
</script>

<style scoped>
  .dmeo {
    position: relative;
    width: 100px;
    height: 80px;
    background: #f8f8f8;
  }
  .inner {
    position: absolute;
    top: 0;
    left: 50%;
    width: 0px;
    border-top: 3px solid #00f;
    transform-origin: 0 50%;
    transition: all .3s;
  }
  .active {
    left: 0;
    width: 100px;
  }
</style>
