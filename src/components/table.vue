<template>
  <div class="table-box">
    <!-- <table class="table">
      <thead class="table-head">
        <th   v-for="(item, index) in tableInfo.head" :key="index">{{item}}</th>
      </thead>
      <tbody class="table-body" :style="tableInfo.styleObject" v-if="tableInfo.type === 'city'">
        <tr v-for="(item, index) in tableInfo.tableData" :key="index">
          <td>{{index + 1}}</td>
          <td class="city" :title="item.city">{{item.city}}</td>
          <td>{{item.checkTotal}}</td>
          <td>{{item.bayonetTotal}}</td>
          <td>{{item.bayonetPerson}}</td>
          <td>{{item.bayonetCar}}</td>
          <td>{{item.bayonetPassRatio}}%</td>
        </tr>
      </tbody>
      <tbody class="table-body" :style="tableInfo.styleObject" v-if="tableInfo.type === 'code'">
        <tr v-for="(item, index) in tableInfo.tableData" :key="index">
          <td>{{index + 1}}</td>
          <td class="city" :title="item.city">{{item.city}}</td>
          <td>{{item.applyTotal}}</td>
          <td>{{item.redTotal}}</td>
          <td>{{item.yellowTotal}}</td>
          <td>{{item.greenTotal}}</td>
          <td>{{item.grantRatio}}%</td>
        </tr>
      </tbody>
      <tbody class="table-body" :style="tableInfo.styleObject" v-if="tableInfo.type === 'entrance'">
        <tr v-for="(item, index) in tableInfo.tableData" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.bayonetName}}</td>
          <td>{{item.checkTotal}}</td>
          <td class="city" :title="item.city">{{item.city}}</td>
          <td>{{item.bayonetPerson}}</td>
          <td>{{item.bayonetCar}}</td>
          <td>{{item.bayonetPassRatio}}%</td>
        </tr>
      </tbody>
    </table> -->
    <div class="table">
      <div class="tablehead flex-cell flex-row">
        <div class="flex-cell flex-row" v-for="(item, index) in tableInfo.head" :key="index">{{item}}</div>
      </div>
      <div class="tablecontent" v-if="tableInfo.type === 'city'">
        <div class="flex-cell flex-row" v-for="(item, index) in tableInfo.tableData" :key="index">
          <div class="flex-cell flex-row">{{index + 1}}</div>
          <div class="city flex-cell flex-row"  :title="item.city">{{item.city}}</div>
          <div class="flex-cell flex-row">{{item.checkTotal}}</div>
          <div class="flex-cell flex-row">{{item.bayonetTotal}}</div>
          <div class="flex-cell flex-row">{{item.bayonetPerson}}</div>
          <div class="flex-cell flex-row">{{item.bayonetCar}}</div>
          <div class="flex-cell flex-row">{{item.bayonetPassRatio}}%</div>
        </div>
      </div>
      <div class="tablecontent" v-else-if="tableInfo.type === 'code'">
        <div class="flex-cell flex-row" v-for="(item, index) in tableInfo.tableData" :key="index">
          <div class="flex-cell flex-row">{{index + 1}}</div>
          <div class="city flex-cell flex-row"  :title="item.city">{{item.city}}</div>
          <div class="flex-cell flex-row">{{item.applyTotal}}</div>
          <div class="flex-cell flex-row">{{item.redTotal}}</div>
          <div class="flex-cell flex-row">{{item.yellowTotal}}</div>
          <div class="flex-cell flex-row">{{item.greenTotal}}</div>
          <div class="flex-cell flex-row">{{item.grantRatio}}%</div>
        </div>
      </div>
      <div class="tablecontent" v-else-if="tableInfo.type === 'entrance'">
          <div class="flex-cell flex-row">{{index + 1}}</div>
          <div class="flex-cell flex-row">{{item.bayonetName}}</div>
          <div class="flex-cell flex-row">{{item.checkTotal}}</div>
          <div class="city flex-cell flex-row"  :title="item.city">{{item.city}}</div>
          <div class="flex-cell flex-row">{{item.applyTotal}}</div>
          <div class="flex-cell flex-row">{{item.redTotal}}</div>
          <div class="flex-cell flex-row">{{item.bayonetPerson}}</div>
          <div class="flex-cell flex-row">{{item.bayonetCar}}</div>
          <div class="flex-cell flex-row">{{item.bayonetPassRatio}}%</div>
      </div>
    </div>
    <div class="pager-box" v-if="tableInfo.pager">
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 20
    }
  },
  props: ['tableInfo'],
  methods: {
    currentChange() {

    }
  },
}
</script>

<style lang="less" scoped>
.table-box {
  // max-height: 165px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  table thead, table tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
  }
  .table {
    font-family:SourceHanSansCN-Medium;
    font-size: 14px;
    border-spacing: 0px;
    width: 100%;
    thead th, tbody td {
      height: 30px;
      width: 75px;
    }
    thead th:first-child, tbody td:first-child {
      width: 45px;
    }
    .table-head {
      background:linear-gradient(92deg,rgba(0,138,255,0.5) 0%,rgba(0,138,255,0) 100%);
      th {
        height: 34px;
        color: #FFFFFF;
        opacity:0.7;
      }
    }
    .table-body {
      width: 100%;
      // height: 110px;
      text-align: center;
      display: block;
      tr {
        color: #80C5FF;
        opacity:0.7;
      }
      .city {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .table-body::-webkit-scrollbar {
      width: 0;
    }
    // .table-body::-webkit-scrollbar-thumb {
    //   width: 0;
    // }
    // .table-body::-webkit-scrollbar-track {
    //   width: 0;
    // }
  }
}
.table-box {
  .table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    .tablehead {
      background:linear-gradient(92deg,rgba(0,138,255,0.5) 0%,rgba(0,138,255,0) 100%);

    }
    .tablecontent {

    }
    .flex-row{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .flex-column{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
    }

    .flex-cell{
      flex: 1;
    }
  }
}
</style>
<style>
  .pager-box .el-pagination {
    float: right;
    margin-top: 35px;
  }
  .pager-box .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: rgba(24,104,174,1);;
    color: #fff;
  }
  .pager-box .el-pagination.is-background .el-pager li:not(.disabled){
    background-color: transparent;
    color:rgba(129,135,145,1);
    border:1px solid rgba(24,104,174,1);
    font-weight: 200;
    border-radius: 4px;
  }
  .pager-box .el-pagination .btn-prev, .pager-box .el-pagination .btn-next{
    background: transparent;
    border:1px solid rgba(24,104,174,1);
    border-radius: 4px;
  }
  .el-pagination__jump, .el-input__inner {
    color:rgba(129,135,145,1);
  }
</style>
