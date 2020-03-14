<template>
  <div class="container">
    <div style="background: #FFFFFF;width: 100%;height: 100%;">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><span class="breadcrumb-active">一级导航</span></el-breadcrumb-item>
          <el-breadcrumb-item><span class="breadcrumb-active">二级导航</span></el-breadcrumb-item>
          <el-breadcrumb-item><span>用户管理</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="search">
        <div class="form">
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="用户名:">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="form.phonenumber" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="账号状态:">
              <el-select v-model="form.accountState" placeholder="请选择活动状态">
                <el-option label="正常" value="0"></el-option>
                <el-option label="已停用" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round @click="search">查询</el-button>
              <el-button plain round @click="reset">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="addUser">
          <el-button type="primary" round @click='addUser'>添加用户</el-button>
        </div>
      </div>
      <div class="table-container">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :default-sort = "{prop: 'number', order: 'descending'}"
          :row-class-name='rowClassName'
        >
          <el-table-column
            prop="number"
            label="序号"
            sortable
          >
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            sortable
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="真实姓名"
            sortable
          >
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            sortable
          >
          </el-table-column>
          <el-table-column
            prop="phonenumber"
            label="手机号"
            sortable
          >
          </el-table-column>
          <el-table-column
            
            label="账号状态"
            sortable
          >
          <template slot-scope="scope">
            <div :class="[scope.row.accountState === 0 ? 'success-state' : 'error-state']"></div>
            <span style="margin-left: 4px">{{ scope.row.accountState }}</span>
          </template>
          </el-table-column>
          <el-table-column
            prop="registerTime"
            label="注册时间"
            sortable
          >
          </el-table-column>
          <el-table-column label='操作'>
            <el-button
              size="mini"
              type="primary"
              plain
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              plain
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </el-table-column>
        </el-table>
        <div class="page-container">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="totalPage"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {},
        tableData: [
          {
            number: 1,
            username: 'admin',
            name: '张三',
            email: '153649@163.com',
            phonenumber: '18064286360',
            accountState: 0,
            registerTime: '2020-02-27'
          },
          {
            number: 2,
            username: 'admin',
            name: '李四',
            email: '153649@163.com',
            phonenumber: '18064286360',
            accountState: 1,
            registerTime: '2020-02-27'
          }
        ],
        isActive: true,
        currentPage: 1,
        pageSize: 1,
        totalPage: 2
      }
    },
    methods: {
      search() {
        // 查询操作
      },
      reset() {
        // 重置
      },
      rowClassName({row, rowIndex}) {
        if(rowIndex / 2 === 0) {
          return 'success-row'
        }
      },
      addUser() {
        // 添加用户
      },
      handleSizeChange(val) {
        // 页数改变
      },
      handleCurrentChange(val) {
        // 当前页改变
        this.currentPage = val
      }
    },
  }
</script>

<style lang="less" scoped>
.container{
  background-color: #EEF1F7;
  padding: 24px;
  width: 100%;
  height: 100%;
  .breadcrumb{
    height: 54px;
    width: 100%;
    padding-left: 50px;
    border-bottom: 1px solid #EEEFF2;
    
    .el-breadcrumb{
      line-height: 54px;
      background: none;

      .breadcrumb-active {
      color: #4287F4;
    }
    }
  }

  .search {
    padding: 0 50px 0 50px;
    text-align: left;
    height: 80px;
    display: flex;
    justify-content: space-between;
    .el-form {
      padding-top: 23px;
      .el-form-item {
          margin-bottom: 0;
          height: 34px;
          /* .el-button {
            width: 76px;
            height: 34px;
            line-height: 34px;
          } */
          .el-input__inner {
            height: 34px;
          }
          .el-button {
            width: 76px;
            height: 34px;
            line-height: 0;
          }
      }
    }

    .addUser {
      line-height: 80px;
      .el-button {
        margin-top: 23px;
        height: 34px;
        line-height: 0;
      }
    }
  }

  .table-container {
    padding: 0 50px 0 50px;
    /* border:1px solid rgba(224,226,229,1); */
    .success-state {
      width: 6px;
      height: 6px;
      display: inline-block;
      background: url('../../assets/imgs/状态点-有效.png') 0 0 no-repeat;
      vertical-align: middle;
    }
    .error-state {
      width: 6px;
      height: 6px;
      display: inline-block;
      background: url('../../assets/imgs/状态点-无效.png') 0 0 no-repeat;
      vertical-align: middle;
    }
  }

  .page-container {
    text-align: right;
    margin-top: 23px;
  }
}
</style>