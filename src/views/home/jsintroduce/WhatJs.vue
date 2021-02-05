<template>
  <div class="whatjs">
    <div class="page page1">
      <h2 class="h2">什么是JavaScript</h2>
      <p class="p">
        JavaScript（简称“JS”）
        是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中(如node.js)，JavaScript
        基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
      </p>
    </div>
    <div class="page page2">
      <h2 class="h2">JavaScript特点</h2>
      <p class="p">
        JavaScript是一种属于网络的高级脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。
      </p>
      <div class="txt_msg">
        <p class="p" style="font-size:17px;line-height:30px;margin:0">
          1.是一种解释性脚本语言（代码不进行预编译）。
          <br />
          2.主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。
          <br />
          3.可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。
          <br />
          4.跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）。
          <br />
          5.JavaScript脚本语言同其他语言一样，有它自身的基本数据类型，表达式和算术运算符及程序的基本程序框架。JavaScript提供了基本的数据类型和特殊数据类型用来处理数据和文字。而变量提供存放信息的地方，表达式则可以完成较复杂的信息处理。
          <br />
          6.可以实现web页面的人机交互。
        </p>
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">JavaScript诞生</h2>
      <p class="p">
        JavaScript诞生于1995年。最开始的JavaScript只是负责处理一些以前由服务器端语言负责的一些输入验证操作，JavaScript的问世在那个拨号上网的时代带来的改变是巨大的。
        当网上冲浪越来越流行时，对于开发客户端脚本的需求也逐渐增大。此时，大部分因特网用户还仅仅通过28.8
        kbit/s的调制解调器("猫")连接到网络，即便这时网页已经不断地变得更大和更复杂。
        <br />
        而更加加剧用户痛苦的是，仅仅为了简单的表单有效性验证，就要与服务器进行多次地往返交互。
        想象一下，用户填完一个表单，点击"提交"按钮，等待了30秒的处理后，看到的却是一条告诉你忘记填写一个必要的字段。那时正处于技术革新最前沿的Netscape，
        开始认真考虑开发一种客户端脚本语言来解决简单的处理问题。当时工作于Netscape的Brendan
        Eich，开始着手为即将在 1995 年发行的 NetscapeNavigator 2.0
        开发一个称之为LiveScript的脚本语言，
        当时的目的是在浏览器和服务器端使用它。
        <br />
        Netscape与Sun及时完成LiveScript 实现。就在Netscape Navigator 2.0
        即将正式发布前，Netscape将其更名为JavaScript，目的是为了利用 Java
        这个因特网时髦词汇。 Netscape的赌注最终得到回报，JavaScript
        从此变成了因特网的必备组件。
      </p>
    </div>
    <div class="page page4">
      <h2 class="h2">JavaScript实现</h2>
      <p class="p">
        一个完整的JavaScript由
        <router-link to="/home/jsintroduce/ecmascirpt" class="a">
          ECMAscript(核心)
        </router-link>
        ,
        <router-link to="/home/jsintroduce/dom" class="a">
          DOM(文档对象模型)
        </router-link>
        ,
        <router-link to="/home/jsintroduce/bom" class="a">
          BOM(浏览器对象模型)
        </router-link>
        组成，如图1.1所示。
      </p>
      <div class="bor">
        <div class="box">
          <div>JavaScript</div>
          <router-link to="/home/jsintroduce/ecmascirpt" class="a">
            <div class="es">ECMAscript</div>
          </router-link>
          <router-link to="/home/jsintroduce/dom" class="a">
            <div class="dom">DOM</div>
          </router-link>
          <router-link to="/home/jsintroduce/bom" class="a">
            <div class="bom">BOM</div>
          </router-link>
        </div>
        图1.1
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatJs",
};
</script>
<style scoped>
.page4 .bor {
  max-width: 100%;
  width: 600px;
  text-align: center;
  font-size: 13px;
}
.page4 .bor .box {
  position: relative;
  width: 100%;
  text-align: center;
  background: #fafafa;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 14px;
  padding: 18px 24px;
  box-sizing: border-box;
  margin-bottom: 12px;
}
.page4 .bor .box .es,
.page4 .bor .box .dom,
.page4 .bor .box .bom {
  display: inline-block;
  width: 30%;
  padding: 8px 16px;
  background-color: #50bfff;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 10px;
  margin-top: 10px;
  color: #000;
  font-weight: 400;
}
.page4 .bor .box .bom {
  margin-right: 0;
}
</style>