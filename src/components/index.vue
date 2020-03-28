<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      collapsedWidth="0"
      width="240"
      :trigger="null"
      collapsible
      v-model="collapsed"
      breakpoint="lg"
      style="background-color:#2196F3;height:100vh;;box-shadow:2px 2px 5px 2px rgba(0,0,0,0.3);"
    >
      <div class="logo">
        <div
          style=" 
    height: 32px; 
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    font-size:19px;
      "
        >
          <span style="font-weight: 550 "> {{ mc }}</span>
        </div>
      </div>

      <a-menu
        :defaultOpenKeys="openKeys"
        mode="inline"
        style="background-color:#2196F3;width:100%;"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><span>功能菜单</span></span>
          <a-menu-item @click="computerlist" key="1">
            <a-icon type="home" />
            <span>电脑配置清单</span>
          </a-menu-item>
          <a-menu-item @click="query" key="2">
            <a-icon type="pie-chart" />
            <span>配件查询</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="display:flex;justify-content: space-between; background: #2196F3; padding: 0;box-shadow:2px 2px 10px 2px rgba(0,0,0,0.7);"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view v-if="true" :key="$route.path"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      mc: "电脑配置清单",
      openKeys: ["sub1"]
    };
  },
  components: {},
  methods: {
    computerlist() {
      // this.collapsed = true;
      this.$router.push("/computerlist");
    },
    query() {
      // this.collapsed = true;
      this.$router.push("/query");
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-menu-submenu > .ant-menu {
  background-color: #2196f3 !important;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: skyblue !important;
}
.ant-menu-item span {
  color: #fff;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
