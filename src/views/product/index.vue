<template>
  <div class="dashboard-container">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="dashboard-text">库存信息管理</span>
        <!-- 新增产品 -->
        <el-button style="float: right;" type="success" @click="dialogFormVisible = true">新增产品</el-button>
        <!-- 新增产品对话框 -->
        <el-dialog title="新增产品" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="产品名称" :label-width="formLabelWidth">
              <el-col :span="15">
                <el-input v-model="form.name" autocomplete="off" />
              </el-col>
            </el-form-item>
            <el-form-item label="产品规格" :label-width="formLabelWidth">
              <el-col :span="15">
                <el-input v-model="form.specification" autocomplete="off" />
              </el-col>
            </el-form-item>
            <el-form-item label="产品总数" :label-width="formLabelWidth">
              <el-col :span="15">
                <el-input v-model="form.totalQuantity" autocomplete="off" />
              </el-col>
            </el-form-item>
            <el-form-item label="数量单位" :label-width="formLabelWidth">
              <el-col :span="15">
                <el-input type="number" v-model="form.unit" autocomplete="off" />
              </el-col>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="warning" @click="add()">添 加</el-button>
          </div>
        </el-dialog>
      </div>
      <!-- 操作栏 -->
      <action-bar />
      <!-- 产品列表 -->
      <products-table />
    </el-card>

  </div>
</template>

<script>
import { addProduct } from '@/api/product'
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
      dialogFormVisible: false,
      formLabelWidth: '120px',
      form: {
        name: '',
        specification: '',
        totalQuantity: '',
        unit: ''
      }
    }
  },
  computed: {
    ...mapGetters(['name'])
  },

  methods: {
    add() {
      console.log(this.form)
      addProduct(this.form).then(Response => {
        this.dialogFormVisible = false
        this.$message({
          type: 'success',
          message: '产品添加成功'
        })
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
