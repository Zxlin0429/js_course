<template>
  <div class="dom">
    <div class="page page1">
      <h2 class="h2">DOM</h2>
      <p class="p">
        文档对象模型（Document Object
        Model）是针对XML但经过扩展用于HTML的应用程序编程接口（API）。HTML或XML页面中每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。简单来讲，DOM就是一组API（接口）。它将一份结构化文档看做一棵树，这棵树由各种各样的节点构成，也即节点树。
      </p>
      <div class="txt_msg">
        首先必须清楚DOM不是专为HTML设计的，它是通用型的标准，为所有标记语言而设计。其次要清楚并不是只有javascript有DOM API，其他的程序设计语言如java也有对应的DOM API。
      </div>
      <div class="txt_code">
        <div class="html">html</div>
        <pre>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;title&gt;</span>这是一个title<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;div&gt;</span>这是一个div标签<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></pre>
      </div>
      <p class="p">
        上图所示页面，在DOM中通过下面所示树形结构体表示。通过DOM创建的树形图，开发人员获得了页面内容和结构的主动权，借助DOM提供的API，开发人员可以轻松自如地删除、添加、替换或修改任意节点。
      </p>
      <el-card class="box-card" shadow="hover">
        <el-tree :data="html_tree_list" default-expand-all></el-tree>
      </el-card>
    </div>
    <div class="page page2">
      <h2 class="h2">DOM级别</h2>
      <el-card class="box_card" shadow="hover">
        <el-divider content-position="left">DOM1级</el-divider>
      <p class="p">
        DOM1级的目标主要是映射文档的结构。<br />
        DOM1级由两个模块组成：① DOM 核心(DOM Core) ② DOM HTML。<br />
        DOM 核心: 规定如何映射基于 XML 的文档结构，以便简化对文档中任意部分的访问和操作<br />
        DOM HTML: 在 DOM 核心的基础上加以扩展，添加了针对 HTML 的对象和方法
      </p>
      </el-card>
      <el-card class="box_card" shadow="hover">
        <el-divider content-position="left">DOM2级</el-divider>
      <p class="p">
        DOM2 级在原来的 DOM 基础上扩充了鼠标和用户界面事件、范围、遍历（迭代 DOM 文档的方法）等细分模块，而且通过对象接口增加了对 CSS 的支持。<br />
        DOM2 引入的新模块：① DOM 视图(DOM Views) ② DOM 事件(DOM Events) ③ DOM 样式(DOM Style) ④ DOM 遍历和范围(DOM Traversal and Range)<br />
        DOM 视图：定义了跟踪不同文档（例如，应用 CSS 之前和之后的文档）视图的接口<br />
        DOM 事件：定义了事件和事件处理的接口<br />
        DOM 样式：定义了基于 CSS 为元素应用样式的接口<br />
        DOM 遍历跟范围：定义了遍历和操作文档树的接口
      </p>
      </el-card>
      <el-card class="box_card" shadow="hover">
        <el-divider content-position="left">DOM3级</el-divider>
      <p class="p">
        DOM3 进一步扩展了 DOM，引入了以统一方式加载和保存文档的方式（在 DOM 加载和保存（DOM Load and Save）模块中定义），新增了验证文档的方法（在 DOM 验证（DOM Validation）模块中定义），对 DOM 核心进行了扩展，开始支持 XML1.0 规范。
      </p>
      </el-card>
      <div class="txt_msg">
        DOM标准的目标是让“任何一种程序设计语言”能操控使用“任何一种标记语言”编写出的“任何一份文档”。“操控”具体含义为能通过DOM提供的API对文档的内容、结构、样式进行访问和修改。
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">DOM兼容</h2>
      <template>
        <el-table :data="tableData" style="width: 550px;" stripe>
          <el-table-column prop="name" label="浏览器版本" width="250">
          </el-table-column>
          <el-table-column prop="history" label="DOM兼容性" width="300">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "DOM",
  data() {
    return {
      html_tree_list: [
        //html树形结构
        {
          label: "html",
          children: [
            {
              label: "head",
              children: [
                {
                  label: "title",
                  children: [
                    {
                      label: "这是一个title",
                    },
                  ],
                },
              ],
            },
            {
              label: "body",
              children: [
                {
                  label: "div",
                  children: [
                    {
                      label: "这是一个div",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      tableData:[
        //DOM兼容性
        {
          name: "Netscape Navigator 1. ~ 4.x",
          history: "不支持"
        },
        {
          name: "Netscape 6+（Mozilla 0.6.0+）",
          history: "1级、2级（几乎全部）、3级（部分）"
        },
        {
          name: "IE2~IE4.x",
          history: "不支持"
        },
        {
          name: "IE5",
          history: "1级（最小限度）"
        },
        {
          name: "IE5.5~IE8",
          history: "1级（几乎全部）"
        },
        {
          name: "IE9+",
          history: "1级、2级、3级"
        },
        {
          name: "Opera1~6",
          history: "不支持"
        },
        {
          name: "Opera7~8.x",
          history: "1级（几乎全部）、2级（部分）"
        },
        {
          name: "Opera9~9.9",
          history: "1级、2级（几乎全部）、3级（部分）"
        },
        {
          name: "Opera10+",
          history: "1级、2级、3级（部分）"
        },
        {
          name: "Safari 1.0.x",
          history: "不支持"
        },
        {
          name: "Safari 2+",
          history: "1级、2级（部分）"
        },
        {
          name: "Chrome 1+",
          history: "1级、2级（部分）"
        },
        {
          name: "FireFox 1+",
          history: "1级、2级（几乎全部）、3级（部分）"
        },
      ]
    };
  },
};
</script>
<style scoped>
.box_card{
  margin-bottom: 20px;
}
.box_card:nth-last-child(1){
  margin-bottom: 0;
}
</style>