<template>
  <button class="qui-btn" @click="btnClickEvent">
    <slot name="icon"></slot>
    <!--重点在这里-->
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: "下载"
    }
  },
  methods: {
    //绑定事件的关键代码
    btnClickEvent: function() {
      alert("先弹出默认的文案");
      this.$emit("btnClickEvent");
    }
  }
};
</script>
<style scoped>
@import "./css/reset.import.css";
@import "./css/qui-btn.import.css";
</style>