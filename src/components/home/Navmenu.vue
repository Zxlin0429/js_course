<template>
  <div class="nav_menu">
    <el-row>
      <el-col :span="24">
        <el-menu :default-active="$route.path" class="nav_demo" router>
          <NavItem v-for="item in nav_list" :key="item.url" :item="item" />
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import NavItem from "./NavItem";
export default {
  name: "nav_menu",
  components: { NavItem },
  data() {
    return {
      nav_list: [
        {
          name: "JavaScript简介",
          url: "/home/jsintroduce",
          child: [
            {
              name: "什么是JavaScript",
              url: "/home/jsintroduce/whatjs",
            },
            {
              name: "ECMAscirpt",
              url: "/home/jsintroduce/ecmascirpt",
            },
            {
              name: "DOM",
              url: "/home/jsintroduce/dom",
            },
            {
              name: "BOM",
              url: "/home/jsintroduce/bom",
            }
          ],
        },
        {
          name: "起步",
          url: "/home/start",
          child: [
            {
              name: "<script>元素",
              url: "/home/start/script",
            },
            {
              name: "语法",
              url: "/home/start/grammar",
            },
            {
              name: "数据类型",
              url: "/home/start/typeof",
            },
            {
              name: "操作符",
              url: "/home/start/operator"
            }
          ],
        }
      ],
    };
  },
};
</script>
<style scoped>
.nav_demo {
  border-right: none;
}
</style>