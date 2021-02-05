<template>
  <div class="ecmascript">
    <div class="page page1">
      <h2 class="h2">ECMAscript</h2>
      <p class="p">
        ECMAScript由ECMA-262定义。1996年11月，JavaScript
        的创造者网景公司将JavaScript提交给国际化标准组织ECMA（European computer
        manufactures
        association，欧洲计算机制造联合会），希望这种语言能够成为国际标准，随后
        ECMA发布了规定浏览器脚本语言的标准，即ECMAScript。Javascript，JScript，ActionScript等脚本语言都是基于ECMAScript标准实现的，所以，ECMAScript实际上是一种脚本在语法和语义上的标准。所以说，在JavaScript，JScript和ActionScript中声明变量，操作数组等语法完全一样，因为它们都是ECMAScript。但是在操作浏览器对象（BOM）等方面又有各自独特的方法，这些都是各自语言的扩展。
      </p>
      <div class="txt_msg">
        ECMA-262标准大致规定了这门语言的下列组成部分:
        <div style="margin-top: 10px">
          <el-tag
            effect="dark"
            v-for="(item, index) in es_rule_list"
            :key="index"
            style="margin: 0 20px 10px 0"
            >{{ item }}</el-tag
          >
        </div>
      </div>
    </div>
    <div class="page page2">
      <h2 class="h2">ECMAscript版本</h2>
      <div class="txt_error">
        <div class="i">!</div>
        ECMAscript已经有第十个版本的草案（简称ES10），除了Object.fromEntries
        之外，Chrome的大多数功能都已经实现了，在新的语言特性方面，ES10 不如 ES6
        重要，但它确实添加了一些有趣的特性。但是目前浏览器的JavaScript 是ES5
        版本，大多数高版本的浏览器也支持ES6，不过只实现了ES6 的部分特性和功能。
      </div>
      <div>
        <div class="block">
          <el-timeline style="padding: 0">
            <el-timeline-item
              :timestamp="item.time"
              placement="top"
              v-for="item in es_history_list"
              :key="item.time"
            >
              <el-card  shadow="hover">
                <h4>{{ item.title }}</h4>
                <p>{{ item.txt }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">ECMAscript兼容</h2>
      <div class="txt_msg">
        <span style="font-weight: bold"
          >ECMA-262给出了ECMAscript兼容的定义。要想成为ECMAscript的实现，则该实现必须做到：</span
        ><br />
        1.支持ECMA-262描述的所有“类型、值、对象、属性、函数以及程序句法和语义”；<br />
        2.支持Unicode字符标准；<br />
        3.添加ECMA-262没有描述的“更多类型、值、对象、属性和函数”；<br />
        4.支持ECMA-262没有定义的“程序和正则表达式语法”；
      </div>
      <template>
        <el-table :data="tableData" style="width: 550px;" stripe>
          <el-table-column prop="usb" label="浏览器平台" width="120">
          </el-table-column>
          <el-table-column prop="name" label="浏览器版本" width="180">
          </el-table-column>
          <el-table-column prop="history" label="ECMAscript版本" width="150">
          </el-table-column>
          <el-table-column prop="cose" label="支持率" width="100"></el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ECMAscript",
  data() {
    return {
      es_rule_list: [
        //ES规范
        "语法",
        "类型",
        "语句",
        "关键字",
        "保留字",
        "操作符",
        "对象",
      ],
      es_history_list: [
        //ES版本信息
        {
          time: "1997年",
          title: "ECMAScript1.0",
          txt: "ECMAScript1.0诞生。",
        },
        {
          time: "1998年6月",
          title: "ECMAScript2.0",
          txt:
            "ECMAScript 2.0诞生，包含一些小的更改，用于同步独立的 ISO 国际标准。",
        },
        {
          time: "1999年12月",
          title: "ECMAScript3.0",
          txt:
            "ECMAScript3.0诞生，它是一个巨大的成功，在业界得到了广泛的支持，它奠定了JS的基本语法，被其后版本完全继承。直到今天，我们一开始学习JS，其实就是在学 3.0 版的语法。",
        },
        {
          time: "2000年",
          title: "ECMAScript4.0",
          txt:
            "ECMAScript4.0是当下ES6的前身，但由于这个版本太过激烈，对ES3做了彻底升级，所以暂时被'和谐'了。",
        },
        {
          time: "2009年12月",
          title: "ECMAScript5.0",
          txt:
            "ECMAScript 5.0版正式发布，ECMA专家组预计ECMAScript的第五个版本会在2013年中期到2018年作为主流的开发标准。2011年6月，ES 5.1 版发布，并且成为 ISO 国际标准。",
        },
        {
          time: "2013年",
          title: "ECMAScript6.0",
          txt:
            "ES6草案冻结，不再添加新的功能，新的功能将被放到ES7中。2015年6月，ES6正式通过，成为国际标准。",
        },
      ],
      tableData: [
        //ES兼容性
        {
          usb:"Web端",
          name: "Chrome：51版+",
          history: "ES6新特性",
          cose: "97%",
        },
        {
          usb:"Web端",
          name: "Firefox：53版+",
          history: "ES6新特性",
          cose: "97%",
        },
        {
          usb:"Web端",
          name: "Safari：10版+",
          history: "ES6新特性",
          cose: "99%",
        },
        {
          usb:"Web端",
          name: "IE：Edge 15+",
          history: "ES6新特性",
          cose: "96%",
        },
        {
          usb:"移动端",
          name: "iOS：10.0版+",
          history: "ES6新特性",
          cose: "99%",
        },
        {
          usb:"移动端",
          name: "Android5.1+",
          history: "ES6新特性",
          cose: "25%",
        },
        {
          usb:"服务器端",
          name: "Node.js：6.5版+",
          history: "ES6新特性",
          cose: "97%",
        },
      ],
    };
  },
};
</script>