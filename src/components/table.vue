<template>
  <div class="table-box">
    <table class="table">
      <thead class="table-head">
        <th   v-for="(item, index) in tableInfo.head" :key="index">{{item}}</th>
      </thead>
      <tbody class="table-body" :style="tableInfo.styleObject">
        <tr v-for="item in tableInfo.tableData" :key="item.index">
          <td>{{item.index}}</td>
          <td v-if="tableInfo.type === 'city'">{{item.rank}}</td>
          <td v-if="tableInfo.type === 'entrance'">{{item.name}}</td>
          <td v-if="tableInfo.type !== 'code'">{{item.checkTimes}}</td>
          <td v-if="tableInfo.type !== 'city'">{{item.cityName}}</td>
          <td v-if="tableInfo.type === 'code'">{{item.applyPeople}}</td>
          <td v-if="tableInfo.type === 'code'">{{item.red}}</td>
          <td v-if="tableInfo.type === 'code'">{{item.yellow}}</td>
          <td v-if="tableInfo.type === 'code'">{{item.green}}</td>
          <td v-if="tableInfo.type === 'city'">{{item.entrances}}</td>
          <td v-if="tableInfo.type !== 'code'">{{item.passPerson}}</td>
          <td v-if="tableInfo.type !== 'code'">{{item.passCars}}</td>
          <td>{{item.passRate}}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['tableInfo']
}
</script>

<style lang="less" scoped>
.table-box {
  height: 100%;
  width: 100%;
  table thead, table tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
  }
  .table {
    font-family:SourceHanSansCN;
    font-size: 14px;
    border-spacing: 0px;
    width: 100%;
    thead th, tbody td {
      height: 30px;
      width: 67px;
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
      // overflow-y: scroll;
      tr {
        color: #80C5FF;
        opacity:0.7;
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
</style>