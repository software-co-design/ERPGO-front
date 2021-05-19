<template>
  <div class="dashboard-container">
    <el-card style="height:80vh;">
      <div slot="header" class="clearfix">
        <span class="dashboard-text">销售订单管理</span>
        <!-- 添加订单 -->
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">新增订单</el-button>

      </div>

      <!-- 订单列表 -->
      <orders-table />
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrdersTable from './components/OrdersTable'

export default {
  name: 'Dashboard',
  components: {
    OrdersTable
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
