<template>
  <div class="bom">
    <div class="page page1">
      <h2 class="h2">BOM</h2>
      <p class="p">
        浏览器对象模型（Browser Object
        Model）,开发者使用BOM可以控制浏览器显示页面以外的部分。
      </p>
      <div class="txt_error">
        <div class="i">!</div>
        BOM作为JavaScript实现的一部分却没有相关的标准。这个问题在HTML5中得到了解决，HTML5致力于把很多BOM功能写入正式规范。
      </div>
      <p class="p">
        从根本上来讲，BOM只处理浏览器窗口和框架，但人们习惯上把所有针对浏览器的JavaScript扩展算作BOM的一部分。下面就是一些这样的扩展：
      </p>
      <div class="txt_msg">
        1.弹出新浏览器窗口功能；<br />
        2.移动、缩放和关闭浏览器窗口的功能；<br />
        3.提供浏览器详细信息的navigator对象；<br />
        4.提供浏览器所加载页面的详细信息的location对象；<br />
        5.提供用户显示器分辨率详细信息的screem对象；<br />
        6.对cookies的支持；
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BOM",
};
</script>
<style scoped>
</style>