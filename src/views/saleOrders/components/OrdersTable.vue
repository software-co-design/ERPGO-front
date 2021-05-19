<template>
  <el-table ref="multipleTable" v-loading="listLoading" element-loading-text="Loading" :data="tableData"
            style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="订单编号" />
    <el-table-column prop="clientName" label="客户姓名" />
    <el-table-column prop="createTime" label="单据日期" />
    <!-- <el-table-column prop="goodsNum" label="商品数量" /> -->
    <el-table-column prop="totalMoney" label="金额合计" />
    <el-table-column prop="salesman" label="订单创建者" />
    <el-table-column prop="operator" label="订单审核者" />
    <el-table-column prop="status" label="订单状态" />
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- 审核功能对话框 -->
        <el-dialog title="订单审核" :visible.sync="dialogCheckOrder">
          <el-form :model="salesOrderInfo" style="margin-bottom:20px;">
            <el-row :gutter="0">
              <el-col :span="6">订单编号：{{ salesOrderInfo.id }}</el-col>
              <el-col :span="6">单据日期：{{ salesOrderInfo.createTime }}</el-col>
              <el-col :span="6">销售人员：{{ salesOrderInfo.salesman }}</el-col>
              <el-col :span="6">客户名称：{{ salesOrderInfo.clientName }}</el-col>
              <el-col :span="6">订单金额：{{ salesOrderInfo.totalMoney }}</el-col>
              <el-col :span="6">订单状态：{{ salesOrderInfo.status }}</el-col>
            </el-row>
          </el-form>
          <!-- 对话框商品列表 -->
          <el-table :data="productList" border style="width: 100%;height:45vh;">
            <el-table-column prop="productId" label="产品编号" />
            <el-table-column prop="productName" label="产品名称" />
            <el-table-column prop="specification" label="产品规格" />
            <el-table-column prop="unitPrice" label="产品单价" />
            <el-table-column prop="quantity" label="产品数量" />
            <el-table-column prop="totalMoney" label="产品总价" />
          </el-table>
          <!-- 对话框底部按钮 -->
          <div slot="footer" class="dialog-footer">
            <el-button type="danger" @click="dialogCheckOrder = false">审核</el-button>
            <el-button type="primary" @click="dialogCheckOrder = false">确定</el-button>
          </div>
        </el-dialog>
        <el-button type="text" size="small" style="color:green;" @click="checkOrder(scope.row)">审核</el-button>
        <el-button type="text" size="small" style="color:red;" @click="delOrder(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
import { listSalesOrder } from '@/api/salesOrder'
export default {
  name: 'OrdersTable',
  data() {
    return {
      listLoading: true,
      multipleSelection: [],
      dialogCheckOrder: false,
      dialogDelOrder: false,
      formLabelWidth: '120px',
      salesOrderInfo: {},
      tableData: [],
      productList: [
        {
          productId: 1,
          productName: '产品1',
          specification: '产品规格',
          unitPrice: 200,
          quantity: 30,
          totalMoney: 6000
        }
      ]
    }
  },

  created() {
    this.getSOListByPage({
      'pageNum': 1,
      'pageSize': 5
    })
  },

  methods: {
    // 审核订单
    checkOrder(data) {
      this.salesOrderInfo = data
      this.dialogCheckOrder = true
    },
    // 删除订单
    delOrder(data) {
      this.dialogCheckOrder = true
      this.salesOrderInfo = data
    },
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

<style lang="scss" scoped>
// .panel-group {
//   margin-top: 18px;

//   .card-panel-col {
//     margin-bottom: 32px;
//   }

//   .card-panel {
//     height: 108px;
//     cursor: pointer;
//     font-size: 12px;
//     position: relative;
//     overflow: hidden;
//     color: #666;
//     background: #fff;
//     box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
//     border-color: rgba(0, 0, 0, 0.05);

//     &:hover {
//       .card-panel-icon-wrapper {
//         color: #fff;
//       }

//       .icon-people {
//         background: #40c9c6;
//       }

//       .icon-message {
//         background: #36a3f7;
//       }

//       .icon-money {
//         background: #f4516c;
//       }

//       .icon-shopping {
//         background: #34bfa3;
//       }
//     }

//     .icon-people {
//       color: #40c9c6;
//     }

//     .icon-message {
//       color: #36a3f7;
//     }

//     .icon-money {
//       color: #f4516c;
//     }

//     .icon-shopping {
//       color: #34bfa3;
//     }

//     .card-panel-icon-wrapper {
//       float: left;
//       margin: 14px 0 0 14px;
//       padding: 16px;
//       transition: all 0.38s ease-out;
//       border-radius: 6px;
//     }

//     .card-panel-icon {
//       float: left;
//       font-size: 48px;
//     }

//     .card-panel-description {
//       float: right;
//       font-weight: bold;
//       margin: 26px;
//       margin-left: 0px;

//       .card-panel-text {
//         line-height: 18px;
//         color: rgba(0, 0, 0, 0.45);
//         font-size: 16px;
//         margin-bottom: 12px;
//       }

//       .card-panel-num {
//         font-size: 20px;
//       }
//     }
//   }
// }

// @media (max-width: 550px) {
//   .card-panel-description {
//     display: none;
//   }

//   .card-panel-icon-wrapper {
//     float: none !important;
//     width: 100%;
//     height: 100%;
//     margin: 0 !important;

//     .svg-icon {
//       display: block;
//       margin: 14px auto !important;
//       float: none !important;
//     }
//   }
// }
</style>
