<template>
    <div>
      <div class="section">
        <h2>state部分</h2>
        <el-input v-model="mes"></el-input>
        <div>{{mesRev}}</div>
        {{count}}
        <el-button type="primary" @click="add">增加</el-button>
      </div>
      <div class="section">
        <h2>getter部分</h2>
        <div>{{$store.getters.doneTodos}}</div>
        <div>{{$store.getters.doneTodosLength}}</div>
        <div>{{$store.getters.getTodoById(2)}}</div>
      </div>
      <div class="section">
        <h2>modules部分</h2>
        <div>{{$store.state.a.count}}</div>
      </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapGetters } from 'vuex'
    import {Input} from 'element-ui'
    export default {
      name: "Store",
      data() {
          return {
            mes: 'hello lal'
          }
      },
      computed: mapState({
        count: state=> state.count,
        mesRev() {
          return this.mes.split('').reverse().join('')
        }
      }),
      mounted() {

      },
      methods: {
        add() {
          this.$store.commit('increment',3)
        }
      }
    }
</script>

<style scoped>
  .section {
    padding: 10px;
    margin-bottom: 10px;
    background: #f1f2f4;
  }
</style>
