<template>
  <div class="grammar">
    <div class="page page1">
      <h2 class="h2">语法</h2>
      <p class="p">
        ECMAscirpt的语法大量借鉴了C及其他类C语言（如Java和Perl）的语法。
      </p>
      <div class="txt_msg">
        要理解的第一个概念就是ECMAscript中的一切（变量、函数名和操作符）都区分大小写。也就意味着变量名test和变量名Test分别表示两个不同的变量，而函数名不能使用typeof，因为它是一个关键字。
      </div>
    </div>
    <div class="page page2">
      <h2 class="h2">标识符</h2>
      <p class="p"><span class="string">标识符</span>就是指变量、函数、属性的名字，或者函数的参数。</p>
      <div class="txt_msg">
        标识符是按照下列格式规则组合起来的一个或多个字符：<br />
        1.第一个字符必须是一个字母、下划线（_）或一个美元符号（$）；<br />
        2.其他字符可以是字母、下划线、美元符号或数字；<br />
        注：按照惯例，ECMAscript标识符采用驼峰大小写格式，也就是第一个字母小写，剩下的每个单词的首字母大写。
      </div>
      <div class="txt_error">
        <div class="i">!</div>
        不能把关键字、保留字、true、false和null用作标识符。
      </div>
      <p class="p">下面列举一些正确和错误的示例：</p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
//正确示例
<span class="key">var</span> myCar = <span class="string">"poershouche"</span>;
<span class="key">var</span> first_num = <span class="string">1</span>;
<span class="key">var</span> text1;
<span class="key">var</span> $http;

//错误示例
<span class="key">var</span> 1one;
<span class="key">var</span> typeof; //typeof是关键字</pre>
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">关键字和保留字</h2>
      <p class="p">
        <span class="string">关键字</span>是ECMA-262描述的一组有特殊用途，可用于表示控制语句的开始或结束，或者用于执行特定操作等的字符。（关键字不能用作标识符）
        <br />
        <span class="string">保留字</span>可以理解为未来的关键字，它们有可能在将来被用作关键字。（保留字也不能用做标识符）
      </p>
      <div class="txt_msg">
        以下是ES5中所有的关键字：
        <div style="margin-top: 10px">
          <el-tag
            effect="dark"
            v-for="(item, index) in es5_key_list"
            :key="index"
            style="margin: 0 20px 10px 0"
            >{{ item }}</el-tag
          >
        </div>
      </div>
      <div class="txt_msg">
        以下是ES5中所有的保留字：
        <div style="margin-top: 10px">
          <el-tag
            effect="dark"
            v-for="(item, index) in es5_keep_list"
            :key="index"
            style="margin: 0 20px 10px 0"
            >{{ item }}</el-tag
          >
        </div>
      </div>
    </div>
    <div class="page page4">
      <h2 class="h2">注释</h2>
      <p class="p">ECMAscirpt包含<span class="string">单行注释</span>和<span class="string">块级注释</span>。</p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>//单行注释</pre>
      </div>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
/*
* 这是一个
* 块级注释
*/</pre
        >
      </div>
    </div>
    <div class="page page5">
      <h2 class="h2">严格模式</h2>
      <p class="p">
        ES5引入了<span class="string">严格模式</span>（strict
        mode）的概念。严格模式是为JavaScript定义了一种不同的解析与执行模型，对某些不安全的操作会抛出错误。要想在整个脚本中启用严格模式，可以在顶部添加如下代码：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre><span class="string">"use strict"</span>;</pre>
      </div>
      <p class="p">
        在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">function</span> isStrict() {
  <span class="string">"use strict"</span>;
  ...
}
</pre>
      </div>
    </div>
    <div class="page page6">
      <h2 class="h2">语句</h2>
      <p class="p">
        ECMAscript中的语句以一个分号结尾，如果省略分号，则由解释器确定语句的结尾。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> num1 = a + b  //有效的语句（不推荐）
<span class="key">var</span> num2 = a - b; //有效的语句（推荐）
</pre>
      </div>
      <p class="p">
        可以把多条语句组合到一个代码块中，代码块以左花括号（{）开头，以右花括号（}）结尾。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">if</span> (code == 200) {
  console.log(<span class="string">"OK!"</span>); //推荐使用
}

<span class="key">if</span> (code == 200) 
  console.log(<span class="string">"OK!"</span>); //有效但容易出错，不推荐使用
</pre>
      </div>
    </div>
    <div class="page page7">
      <h2 class="h2">变量</h2>
      <p class="p">
        ECMAscirpt的变量是松散类型的，松散类型可以用来保存任何类型的数据，换句话说，每个变量仅仅是一个用于保存值的占位符。
        <br />
        定义变量时要使用var操作符，后跟变量名。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg;
<span class="key">let</span> code = <span class="string">200</span>; //let操作符是ES6的语法，如果浏览器支持ES6，建议在函数中使用let
<span class="key">const</span> data = <span class="string">"data"</span>; //const操作符也是ES6的语法,一但赋值不能改变
</pre>
      </div>
      <div class="txt_msg">
        上面的代码可以发现，msg变量被定义却未初始化，那么它会保存一个特殊的值(undefined)。
      </div>
      <p class="p">
        同时ECMAscript支持一条语句定义多个变量。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="string">"OK!"</span>,
code = <span class="string">200</span>,
data = <span class="string">"data"</span>;
</pre>
      </div>
      <p class="p">
        有一点必须注意，用var操作符定义的变量将成为定义该变量的作用域中的局部变量。如果在函数中使用var定义变量，那么这个变量在函数退出后就会被销毁。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">function</span> test() {
  <span class="key">var</span> msg = <span class="string">"OK!"</span>; //局部变量
}
test();
console.log(msg); //报错!
</pre>
      </div>
      <p class="p">如果省略var操作符，<span class="code">msg</span>就变成了全局变量，只要调用了一次<span class="code">test()</span>函数，msg就会被创建为全局变量，就可以在函数外部任何位置访问到。</p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">function</span> test() {
  msg = <span class="string">"OK!"</span>; //全局变量
}
console.log(msg); //报错!因为函数还未调用，msg变量还未创建
test();
console.log(msg); //"OK!"
</pre>
      </div>
      <div class="txt_error">
        <div class="i">!</div>
        虽然在函数内省略var操作符可以定义全局变量，但这种做法并不推荐，因为在未调用函数前变量是没有创建的，这对于全局变量是难以维护的。给未声明的变量赋值在严格模式下会导致抛出ReferenceError错误。<br />
        在严格模式下，不能定义名为eval或arguments的变量，否则会导致语法错误。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Grammar",
  data() {
    return {
      es5_key_list: [
        //关键字列表
        "break",
        "do",
        "instanceof",
        "typeof",
        "case",
        "else",
        "new",
        "var",
        "catch",
        "finally",
        "return",
        "void",
        "continue",
        "for",
        "switch",
        "while",
        "debugger",
        "function",
        "this",
        "with",
        "default",
        "if",
        "throw",
        "delete",
        "in",
        "try",
      ],
      es5_keep_list: [
        //保留字列表
        "abstract",
        "enum",
        "int",
        "short",
        "boolean",
        "export",
        "interface",
        "static",
        "byte",
        "extends",
        "long",
        "super",
        "char",
        "final",
        "native",
        "synchronized",
        "class",
        "float",
        "package",
        "throws",
        "const",
        "goto",
        "private",
        "transient",
        "implements",
        "protected",
        "volatile",
        "double",
        "import",
        "public",
      ],
    };
  },
};
</script>