<template>
  <div class="dashboard-container">
    <el-card style="height:80vh;">
      <div slot="header" class="clearfix">
        <span class="dashboard-text">销售订单管理</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addOrder">新增订单</el-button>
      </div>
      <el-table ref="multipleTable" v-loading="listLoading" element-loading-text="Loading" :data="tableData"
        style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="订单编号" />
        <el-table-column prop="clientName" label="客户姓名" />
        <el-table-column prop="createTime" label="单据日期" />
        <el-table-column prop="goodsNum" label="商品数量" />
        <el-table-column prop="totalMoney" label="金额合计" />
        <el-table-column prop="salesman" label="订单创建者" />
        <el-table-column prop="operator" label="订单审核者" />
        <el-table-column prop="status" label="订单状态" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="color:green;" @click="handleClick(scope.row)">审核</el-button>
            <el-button type="text" size="small" style="color:blue;">查看</el-button>
            <el-button type="text" size="small" style="color:red;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { listSalesOrder } from '@/api/salesOrder'

export default {
  name: 'Dashboard',
  data() {
    return {
      listLoading: true,
      tableData: [
        // {
        //   id: 'XSDD123456789',
        //   clientName: '张三',
        //   createDate: '2021-05-15',
        //   goodsNum: 4,
        //   totalMoney: 12500,
        //   creator: '销售人员1',
        //   operator: '销售经理1',
        //   status: '未审核'
        // },
        // {
      ],
      multipleSelection: []
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  created() {
    this.getSOListByPage({
      'pageNum': 1,
      'pageSize': 5
    })
  },

  methods: {
    // 处理选中状态的改变
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 获取销售订单分页数据
    getSOListByPage(obj) {
      this.listLoading = true
      listSalesOrder(obj).then(response => {
        this.tableData = response.data.records
        this.listLoading = false
      })
    }
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
