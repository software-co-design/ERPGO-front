<template>
  <div class="dashboard-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="dashboard-text">库存信息管理</span>
        <!-- 添加订单 -->
        <el-button style="float: right;" type="success" @click="dialogFormVisible = true">新增产品</el-button>
      </div>
      <!-- 操作栏 -->
      <action-bar />
      <!-- 产品列表 -->
      <products-table />
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsTable from './components/ProductsTable'
import ActionBar from './components/ActionBar'

export default {
  name: 'ProductInfo',
  components: {
    ProductsTable,
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
