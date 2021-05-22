<template>
  <div class="dashboard-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="dashboard-text">销售订单管理</span>
        <!-- 添加订单 -->
        <el-button style="float: right;" type="success" @click="dialogFormVisible = true">新增订单</el-button>
      </div>
      <!-- 操作栏 -->
      <action-bar />
      <!-- 订单列表 -->
      <orders-table />
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrdersTable from './components/OrdersTable'
import ActionBar from './components/ActionBar'

export default {
  name: 'Dashboard',
  components: {
    OrdersTable,
    ActionBar
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['name'])
  },

  methods: {
  }
}
</script>

<style lang='scss' scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
