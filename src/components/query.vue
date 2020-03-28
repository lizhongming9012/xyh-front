<template>
  <div>
    <div>
      <a-input-search
        placeholder="请输入要查询的配件名称"
        @search="onSearch"
        enterButton="Search"
        size="large"
      />
    </div>
    <div style="margin-top:10px">
      <a-table
        sorter="true"
        rowKey="id"
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
  },
  {
    title: "修改时间",
    dataIndex: "xgsj",
    sorter: (a, b) => new Date(a.xgsj) - new Date(b.xgsj),
    sortDirections: ["descend", "ascend"]
  }
];

const data = [];

export default {
  data() {
    return {
      data,
      columns
    };
  },
  components: {},
  mounted() {},
  methods: {
    onSearch() {
      this.data = [
        {
          id: 1,
          name: "金士顿",
          xgsj: "",
          xh: "abc",
          jg: 500
        },
        {
          id: 2,
          name: "金士顿1121",
          xgsj: "",
          xh: "abc5fds",
          jg: 1500
        },
        {
          id: 3,
          name: "金士顿233332",
          xgsj: "",
          xh: "abc2313",
          jg: 5000
        }
      ];
      // this.$axios.get("api/v1/medicine/py?py=" + value).then(res => {
      //   if (res.data.data) this.data = res.data.data;
      // });
    }
  }
};
</script>
