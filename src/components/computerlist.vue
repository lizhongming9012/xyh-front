<template>
  <a-form :form="form" :layout="formLayout" @submit="handleSubmit">
    <a-form-item label="  内存" style="width: 45%">
      <select v-model="neicui" v-on:change="indexNeicui">
        <option v-for="option in neicuis" :key="option.id" :value="option.jg">
          品牌：{{ option.name }} --型号： {{ option.xh }} --价格：
          {{ option.jg }}
        </option>
      </select>
    </a-form-item>
    <a-form-item label="显卡" style="width: 45%">
      <select v-model="xianka" v-on:change="indexXianka">
        <option v-for="option in xiankas" :key="option.id" :value="option.jg">
          品牌：{{ option.name }} --型号： {{ option.xh }} --价格：
          {{ option.jg }}
        </option>
      </select>
    </a-form-item>

    <a-form-item style="width: 100%"> </a-form-item>

    <a-form-item label="总价" style="width: 50%">
      <h2>{{ zongjia }}</h2>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">
        计算总价
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "inline",
      form: this.$form.createForm(this, { name: "coordinated" }),
      neicui: {},
      neicuis: [],
      neicuijiage: 0,
      xianka: {},
      xiankas: [],
      xiankajiage: 0,
      zongjia: 0
    };
  },
  computed: {},
  components: {},
  methods: {
    handleSubmit(e) {
      this.zongjia = parseInt(this.neicuijiage) + parseInt(this.xiankajiage);
      e.preventDefault();
    },
    getNeicui: function() {
      this.neicuis = [
        {
          id: 1,
          name: "金士顿",
          xgsj: "",
          xh: "abc",
          jg: 500
        },
        {
          id: 2,
          name: "金2131232131223士顿1121",
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
      //   if (res.data.data) this.options = res.data.data;
      // });
    },
    // 获取value值
    indexNeicui(event) {
      // console.log(event.target.value);
      return (this.neicuijiage = event.target.value);
    },
    getXianka: function() {
      this.xiankas = [
        {
          id: 1,
          name: "英伟达",
          xgsj: "",
          xh: "abc",
          jg: 500
        },
        {
          id: 2,
          name: "英伟达2131",
          xgsj: "",
          xh: "abc5fds",
          jg: 1500
        },
        {
          id: 3,
          name: "英伟达21",
          xgsj: "",
          xh: "abc2313",
          jg: 5000
        }
      ];
      // this.$axios.get("api/v1/medicine/py?py=" + value).then(res => {
      //   if (res.data.data) this.options = res.data.data;
      // });
    },
    indexXianka(event) {
      // console.log(event.target.value);
      return (this.xiankajiage = event.target.value);
    }
  },
  created: function() {
    this.getNeicui();
    this.getXianka();
  }
};
</script>

<style></style>
