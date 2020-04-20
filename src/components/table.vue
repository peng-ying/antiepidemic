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
      <div class="tablehead flex-row">
        <div class="flex-cell" v-for="(item, index) in tableInfo.head" :key="index">{{item}}</div>
      </div>
      <div class="tablecontent"  :style="tableInfo.styleContent" v-if="tableInfo.type === 'city'">
        <vue-seamless-scroll :data="tableInfo.tableData" :class-option="classOption">
          <div class="flex-row" v-for="(item, index) in tableInfo.tableData" :key="index">
            <div class="flex-cell">{{index + 1}}</div>
            <div class="city flex-cell"  :title="item.city">{{item.city}}</div>
            <div class="flex-cell">{{item.checkTotal}}</div>
            <div class="flex-cell">{{item.bayonetTotal}}</div>
            <div class="flex-cell">{{item.bayonetPerson}}</div>
            <div class="flex-cell">{{item.bayonetCar}}</div>
            <!-- <div class="flex-cell">{{item.bayonetPassRatio}}%</div> -->
          </div>
        </vue-seamless-scroll>
      </div>
      <div class="tablecontent" :style="tableInfo.styleContent" v-else-if="tableInfo.type === 'code'">
        <vue-seamless-scroll :data="tableInfo.tableData" :class-option="classOption">
          <div class="flex-row" v-for="(item, index) in tableInfo.tableData" :key="index">
            <div class="flex-cell">{{index + 1}}</div>
            <div class="city flex-cell"  :title="item.city">{{item.city}}</div>
            <!-- <div class="flex-cell">{{item.applyTotal}}</div> -->
            <div class="flex-cell">{{item.redTotal}}</div>
            <div class="flex-cell">{{item.yellowTotal}}</div>
            <div class="flex-cell">{{item.greenTotal}}</div>
            <div class="flex-cell">{{item.grantRatio}}%</div>
          </div>
        </vue-seamless-scroll>
      </div>
      <div class="tablecontent" :style="tableInfo.styleContent" v-else-if="tableInfo.type === 'entrance'">
        <vue-seamless-scroll :data="tableInfo.tableData" :class-option="classOption">
          <div class="flex-row" v-for="(item, index) in tableInfo.tableData" :key="index">
            <div class="flex-cell">{{index + 1}}</div>
            <div class="flex-cell">{{item.bayonetName}}</div>
            <div class="flex-cell">{{item.checkTotal}}</div>
            <!-- <div class="city flex-cell"  :title="item.city">{{item.city}}</div> -->
            <!-- <div class="flex-cell flex-row">{{item.applyTotal}}</div> -->
            <!-- <div class="flex-cell flex-row">{{item.redTotal}}</div> -->
            <!-- <div class="flex-cell">{{item.bayonetPerson}}</div> -->
            <!-- <div class="flex-cell">{{item.bayonetCar}}</div> -->
            <!-- <div class="flex-cell">{{item.bayonetPassRatio}}%</div> -->
          </div>
        </vue-seamless-scroll>
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
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 20
    }
  },
  props: ['tableInfo'],
  components: {
    vueSeamlessScroll
  },
  computed: {
    classOption: function() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  methods: {
    currentChange() {

    }
  },
}
</script>

<style lang="less" scoped>
.table-box {
  // max-height: 165px;
  // height: 100%;
  width: 100%;
  // overflow: hidden;
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
      color: #FFFFFF;
      opacity:0.7;
      font-family: SourceHanSansCN-Medium;
    }
    .tablecontent {
      font-family: SourceHanSansCN-Medium;
      color:rgba(128,197,255,1);
      opacity:0.65;
      height: calc(100% - 16px);
      overflow: hidden;
    }
    .flex-row{
      display: flex;
      /*垂直方向布局*/
      // flex-direction: column;
    }
    .flex-column{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: stretch;
    }

    .flex-cell{
      width: 0;
      height: 100%;
      flex-grow: 1;
      flex-shrink:0;
      display: flex;
      overflow: hidden;
      /*水平居中、垂直居中*/
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
