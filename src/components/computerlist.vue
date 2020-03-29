<template>
  <div>
    <a-row>
      <a-col :span="12"
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
    countPrice(e) {
      this.zongjia = parseInt(this.neicuiPrice) + parseInt(this.xiankaPrice);
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

    // 为价格赋select vaule值
    setNeicuiPrice(event) {
      // console.log(event.target.value);
      return (this.neicuiPrice = event.target.value);
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
    // 为价格赋select vaule值
    setXiankaPrice(event) {
      // console.log(event.target.value);
      return (this.xiankaPrice = event.target.value);
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
