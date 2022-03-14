<template>
  <div class="app-container">

    <el-button @click="handleDownload" type="primary">导出</el-button>
  </div>
</template>

<script>


export default {
  name: 'ExportExcel',
  components: { },
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: 'lwj',
      autoWidth: true,
      bookType: 'xlsx'
    };
  },
  created() {
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true;
      import('@/components/excel/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status'];
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status'];
        const list = [
          {
            timestamp: 1,
            title: 'lwj',
            type: 'a',
            importance: 'a1',
            status: 'a11'
          },
          {
            timestamp: 2,
            title: 'lwb',
            type: 'b',
            importance: 'b1',
            status: 'b11'
          },
        ];
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return v[j];
        } else {
          return v[j];
        }
      }));
    }
  }
};
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
