<template>
  <div class="home">
    <el-container>
      <!-- 导航 -->
      <el-aside class="home_nav">
        <Navmenu />
      </el-aside>

      <el-container>
        <!-- 面包屑 -->
        <el-header class="home_bread">
          <Breadcumb />
        </el-header>
        <!-- 页面 -->
        <el-main class="home_view">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navmenu from "@/components/home/Navmenu.vue";
import Breadcumb from "@/components/home/Breadcumb.vue";
export default {
  name: "Home",
  components: {
    Navmenu,
    Breadcumb,
  },
  mounted() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.isMode = true;
    }
  },
  watch: {
    //监听
    $route() {
      document.querySelector(".home_view").scrollTop = 0;
    },
  },
  data() {
    return {
      //是否是移动端
      isMode: false,
    };
  },
};
</script>
<style>
.home,
.el-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.home_nav {
  height: 100%;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.home_bread {
  position: relative;
  padding: 0 100px 0 100px;
}
.home_view {
  padding: 0 100px 0 100px;
  overflow-x: hidden;
}
.page {
  margin-bottom: 60px;
}
.page:nth-last-child(1) {
  margin-bottom: 30px;
}
pre {
  margin: 0;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  *word-wrap: break-word;
  *white-space: normal;
}
.tag {
  color: #2973b7;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.key {
  color: #d63200;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.string {
  color: #42b983;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.code {
  color: #d63200;
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  background-color: #f8f8f8;
}
.h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
.p {
  line-height: 40px;
  font-size: 20px;
}
.a {
  text-decoration: none;
  color: #409eff;
}
.txt_msg {
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
  padding: 30px;
  color: #5e6d82;
  font-size: 17px;
  line-height: 30px;
}
.txt_error {
  position: relative;
  background-color: #f8f8f8;
  border-radius: 4px;
  border-left: 5px solid #f66;
  margin: 20px 0;
  padding: 30px;
  color: #5e6d82;
  font-size: 17px;
  line-height: 30px;
}
.txt_error .i {
  position: absolute;
  top: 20px;
  left: -2.5px;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: #f66;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  z-index: 1;
  font-size: 17px;
  font-weight: bold;
}
.txt_code {
  position: relative;
  background-color: #f8f8f8;
  border-radius: 4px;
  margin: 20px 0;
  padding: 15px 20px;
  color: #525252;
  font-size: 17px;
  line-height: 26px;
}
.txt_code .html {
  position: absolute;
  right: 10px;
  top: 5px;
  color: #ccc;
  font-size: 15px;
  font-weight: bold;
  line-height: 15px;
}
</style>