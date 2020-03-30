<template>
  <div>
    <a-row>
      <a-col :span="8"
        ><a-input size="large" placeholder="电脑配置清单总价计算" /> </a-col
    ></a-row>

    <br />

    <a-row>
      <a-col :span="12">
        <div class="selectbox">
          <label>
            <a-button type="primary" size="large">内存</a-button>
            <select v-model="neicui" v-on:change="setNeicuiPrice">
              <option
                v-for="option in neicuis"
                :key="option.id"
                :value="option.jg"
              >
                品牌：{{ option.name }} -- 型号： {{ option.xh }} -- 价格：
                {{ option.jg }}
              </option>
            </select>
          </label>
        </div></a-col
      >
      <a-col :span="12">
        <div class="selectbox">
          <label>
            <a-button type="primary" size="large">显卡</a-button>
            <select v-model="xianka" v-on:change="setXiankaPrice">
              <option
                v-for="option in xiankas"
                :key="option.id"
                :value="option.jg"
              >
                品牌：{{ option.name }} -- 型号： {{ option.xh }} -- 价格：
                {{ option.jg }}
              </option>
            </select>
          </label>
        </div></a-col
      >
    </a-row>

    <br />

    <a-row type="flex" justify="start">
      <a-col :span="2">
        <a-button type="primary" size="large" @click="countPrice">
          计算总价
        </a-button></a-col
      >
      <a-col :span="4">
        <a-button html-type="submit" size="large">
          ￥ {{ zongjia }} RMB
        </a-button></a-col
      >
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "inline",
      form: this.$form.createForm(this, { name: "coordinated" }),
      neicui: {},
      neicuis: [],
      neicuiPrice: 0,
      xianka: {},
      xiankas: [],
      xiankaPrice: 0,
      zongjia: 0
    };
  },
  computed: {},
  components: {},
  methods: {
    // 计算总价
    countPrice(e) {
      this.zongjia = parseInt(this.neicuiPrice) + parseInt(this.xiankaPrice);
      e.preventDefault();
    },

    // 为价格赋select的vaule(即价格)值
    setNeicuiPrice(event) {
      // console.log(event.target.value);
      return (this.neicuiPrice = event.target.value);
    },
    setXiankaPrice(event) {
      return (this.xiankaPrice = event.target.value);
    },

    // 从后台获取下拉选项
    getNeicui: function() {
      this.$axios.get("cname?name=内存").then(res => {
        if (res.data.data) this.neicuis = res.data.data;
      });
    },
    getXianka: function() {
      this.$axios.get("cname?name=显卡").then(res => {
        if (res.data.data) this.xiankas = res.data.data;
      });
    }
  },

  created: function() {
    this.getNeicui();
    this.getXianka();
  }
};
</script>

<style scoped>
@import "css/select.css";
</style>
