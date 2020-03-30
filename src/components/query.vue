<template>
  <div>
    <div>
      <a-input-search
        placeholder="请输入要查询的配件名称"
        @search="onSearch"
        enterButton="Search"
        size="large"
        v-model="condition"
        style="width:30%"
      />
    </div>
    <div style="margin-top:10px">
      <a-table
        sorter="true"
        rowKey="ID" 
        :columns="columns"
        :dataSource="data"
      />
    </div>
  </div>
</template>
<script>
const columns = [
  // {
  //   title: "ID",
  //   dataIndex: "id",
  //   sorter: (a, b) => a.id - b.id,
  //   sortDirections: ["descend", "ascend"]
  // },
  {
    title: "价格",
    dataIndex: "jg",
    sorter: (a, b) => a.jg - b.jg,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "配件名称",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "配件型号",
    dataIndex: "xh",
    sorter: (a, b) => a.xh.length - b.xh.length,
    sortDirections: ["descend", "ascend"]
  }
];
const data = [];
const condition = "";

export default {
  data() {
    return {
      condition,
      data,
      columns
    };
  },
  components: {},
  mounted() {},
  methods: {
    onSearch() {
      this.$axios.get("cname?name=" + this.condition).then(res => {
        if (res.data.data) this.data = res.data.data;
      });
    }
  }
};
</script>
