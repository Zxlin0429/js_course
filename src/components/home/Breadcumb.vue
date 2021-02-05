<template>
  <!-- 面包屑 -->
  <div class="breadcumb">
     <el-breadcrumb separator="/">
      <el-breadcrumb-item  v-for="(item,index) in breadList" :key="index">
        <router-link :to="item.path">
          {{item.meta.title}}
        </router-link >
      </el-breadcrumb-item>
    </el-breadcrumb>  
  </div>
</template>

<script>

export default {
  data(){
    return {
       breadList: []
    }
  },
  created(){
    this.breadList = this.$route.matched;
  },
  watch:{  //监听
    $route(to){
      this.breadList = to.matched;
    }
  }
}
</script>
<style scoped>
.breadcumb{
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
.breadcumb>div{
  line-height: 60px;
}
</style>