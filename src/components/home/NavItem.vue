<template>
  <div class="navitem">
    <!-- 无子集 -->
    <el-menu-item v-if="!item.child" :index="item.url">
      <i v-if="item.icon" :class="item.icon"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>
    <!-- 有子集 -->
    <el-submenu v-else :index="item.url">
      <template slot="title">
        <i v-if="item.icon" :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
      <NavItem
        v-for="child in item.child"
        :key="child.url"
        :item="child"
      />
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "NavItem",
  props: ["item"],
};
</script>