//监听子组件的事件
<template>
  <div id="pageQuiButton">
    <qui-btn @btnClickEvent="doSth" msg="我可以点击">
      <img slot="icon" class="ico" src="xxx.png" />
    </qui-btn>
    <qui-btn v-on:btnClickEvent="doSth1" msg="确定"></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth2" msg="取消"></qui-btn>
  </div>
</template>
//页面中引用子组件并监听子组件的事件
<script>
import quiBtn from "../components/quiButton.vue";
export default {
  name: "pageQuiButton",
  components: {
    "qui-btn": quiBtn
  },
  methods: {
    doSth: function() {
      alert("你点击了组件的click:btnClickEvent");
    },
    doSth1: function() {
      alert("111");
    },
    doSth2: function() {
      alert("222");
    }
  }
};
</script>