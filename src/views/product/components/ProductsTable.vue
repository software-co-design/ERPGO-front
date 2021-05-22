<template>
  <div>
    <el-table ref="multipleTable" v-loading="listLoading" element-loading-text="Loading" :data="productList"
              style="width: 100%;height: 55vh;" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="产品编号" />
      <el-table-column prop="clientName" label="产品名称" />
      <el-table-column prop="createTime" label="产品规格" />
      <el-table-column prop="totalMoney" label="锁定数量" />
      <el-table-column prop="salesman" label="可用数量" />
      <el-table-column prop="operator" label="总数量" />
      <el-table-column prop="status" label="单位" />
      <!-- 操作列 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" style="color:blue;" @click="updateProduct(scope.row)">修改</el-button>
          <el-button type="text" size="small" style="color:red;" @click="delProduct(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'ProductsTable',
  data() {
    return {
      listLoading: false,
      pageNum: 1,
      pageSize: 5,
      multipleSelection: [],
      productList: []
    }
  },

  created() {

  },

  methods: {
    updateProduct() {

    },
    delProduct() {

    },
    // 处理选中状态的改变
    handleSelectionChange(val) {
      this.multipleSelection = val
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
