<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="订单编号">
      <el-input v-model="formInline.user" placeholder="订单编号"></el-input>
    </el-form-item>
    <el-form-item label="客户名称">
      <el-input v-model="formInline.user" placeholder="客户名称"></el-input>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="10">
        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col style="text-align: center;" :span="1">-</el-col>
      <el-col :span="10">
        <el-time-picker placeholder="选择时间" v-model="formInline.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="warning" @click="onSubmit">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
        date1: '',
        date2: ''
      }
    }
  },

}
</script>

<style>
</style>