<template>
  <div class="script">
    <div class="page page1">
      <h2 class="h2">&lt;script&gt;元素</h2>
      <p class="p">
        包含在<span class="code">&lt;script&gt;</span>元素内部的js代码将被从上至下依次解释，就拿下面的例子来说，解释器在调用<span class="code">sayHi()</span>函数时，还没有解释该函数的定义，还没有将该定义保存在自己的环境当中，所以浏览器会报sayHi()
        is not defind的异常。
      </p>
      <div class="txt_code">
        <div class="html">html</div>
        <pre>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    ...
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    ...
    &lt;!-- 两种引用方式 --&gt;
    &lt;!-- 1.通过src属性引入外部js文件 --&gt;
    <span class="tag">&lt;script type=<span class="string">"text/javascript"</span> src=<span class="string">"js/index.js"</span>&gt;&lt;/script&gt;</span>
    &lt;!-- 2.页面嵌入js代码 --&gt;
    <span class="tag">&lt;script type=<span class="string">"text/javascript"</span>&gt;</span>
      sayHi();
      <span class="key">function</span> sayHi(){
        console.log(<span class="string">"Hello world!"</span>);
      }
    <span class="tag">&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></pre>
      </div>
      <div class="txt_error">
        <div class="i">!</div>
        由于js的从上向下编译，所以对于引用外部js文件的顺序也要注意，例如：项目需要引用jquery.js和项目相关外部js文件，如果项目相关外部js文件使用了jquery库的语法，那么jquery.js文件引入的位置就应该在前面。
      </div>
      <div class="txt_msg">
        关于嵌入代码与外部文件的问题，一般认为最好的做法是尽可能使用外部文件来包含js代码，它具备如下优点：<br />
        1.可维护性：遍及不同html页面的js会造成维护问题，但把所有的js文件都放在一个文件夹中，维护起来就轻松多了。<br />
        2.可缓存：浏览器能根据具体的设置缓存链接的所有外部js文件。也就是说如果有两个页面都使用同一个文件，那么这个文件只需下载一次。<br />
        3.适应未来：通过外部文件来包含js无须使用XHTML或者注释hack。
      </div>
      <p class="p">
        在使用<span class="code">&lt;script&gt;</span>嵌入js代码时，记住不要在代码任何位置出现<span class="code">"&lt;/script&gt;"</span>字符串,否则在加载下面所示代码时会产生错误。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="tag">&lt;script type=&quot;text/javascript&quot;&gt;</span>
  <span class="key">function</span> sayScript(){
    console.log(<span class="string">&quot;&lt;/script&gt;&quot;</span>)
  }
<span class="tag">&lt;/script&gt;</span></pre>
      </div>
      <p class="p">
        因为按照解析嵌入式代码的规则，当浏览器遇到字符串<span class="code">"&lt;/script&gt;"</span>时，就会认为那是结束的<span class="code">"&lt;/script&gt;"</span>标签。而通过转义字符"\"解决这个问题。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="tag">&lt;script type=&quot;text/javascript&quot;&gt;</span>
  <span class="key">function</span> sayScript(){
    console.log(<span class="string">&quot;\&lt;/script&gt;&quot;</span>)
  }
<span class="tag">&lt;/script&gt;</span></pre>
      </div>
    </div>
    <div class="page page2">
      <h2 class="h2">&lt;script&gt;标签位置</h2>
      <p class="p">
        按照传统的做法，所有<span class="code">&lt;script&gt;</span>元素都应该放在页面的<span class="code">&lt;head&gt;</span>元素中，例如:
      </p>
      <div class="txt_code">
        <div class="html">html</div>
        <pre>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    ...
    &lt;!-- 这里放内容 --&gt;
    <span class="tag">&lt;script type=<span class="string">"text/javascript"</span> src=<span class="string">"js/index.js"</span>&gt;&lt;/script&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    ...
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></pre>
      </div>
      <p class="p">
        这种做法的目的就是把所有外部文件（css文件和js文件）的引用都放在相同的地方。可是在<span class="code">&lt;head&gt;</span>元素中包含所有的js文件，意味着必须等到全部js代码都被下载、解析和执行完成以后，才能开始呈现内容（浏览器在遇到<span class="code">&lt;body&gt;</span>标签时才开始呈现内容）。对于那些需要很多js代码的页面，这无疑会导致浏览器在呈现页面时出现明显的延迟，为避免这个问题，现代web应用程序一般把全部的js引用放在<span class="code">&lt;body&gt;</span>元素中页面内容的后面，如下例所示。
      </p>
      <div class="txt_code">
        <div class="html">html</div>
        <pre>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    ...
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    ...
    &lt;!-- 这里放内容 --&gt;
    <span class="tag">&lt;script type=<span class="string">"text/javascript"</span> src=<span class="string">"js/index.js"</span>&gt;&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></pre>
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">&lt;script&gt;标签属性</h2>
      <template>
        <el-table :data="script_src_list" style="width: 100%">
          <el-table-column prop="name" label="属性" width="150">
          </el-table-column>
          <el-table-column prop="txt" label="说明" min-width="250">
          </el-table-column>
          <el-table-column prop="type" label="类型" width="150">
          </el-table-column>
          <el-table-column prop="val" label="可选值" width="200">
          </el-table-column>
          <el-table-column prop="fir" label="默认值" width="200">
          </el-table-column>
        </el-table>
      </template>
      <div class="txt_msg">
        延迟脚本（defer）<br />
        HTML4.01为&lt;script&gt;标签定义了defer属性，这个属性的用途是表明脚本在执行时不会影响页面的构造，也就是说，脚本会被延迟到整个页面都解析完毕后再运行，这点和把&lt;script&gt;放在&lt;body&gt;元素中页面内容的后面的做法有些类似。
      </div>
      <div class="txt_msg">
        异步脚本（async）<br />
        HTML5为&lt;script&gt;标签定义了async属性，这个属性与defer属性类似，都用于改变处理脚本的行为，且都只适用于外部脚本文件，它的作用是告诉浏览器立即下载文件，与defer属性不同的是，标记为async的脚本并不保证按照指定它们的先后顺序执行。异步脚本一定会在页面的load事件前执行，但可能会在DOMContLoaded事件触发之前或之后执行。支持异步脚本的浏览器有Firefox
        3.6、Safari 5和Chrome。
      </div>
    </div>
    <div class="page page4">
      <h2 class="h2">&lt;noscript&gt;元素</h2>
      <p class="p">
        早期浏览器都面临一个特殊的问题，即当浏览器不支持JavaScript时如何让页面平稳地退化。对这个问题的最终解决方案就是创造一个<span class="code">&lt;noscript&gt;</span>元素，用以不支持JavaScript的浏览器中显示代替的内容。这个元素可以包含能够出现在<span class="code">&lt;body&gt;</span>中任何HTML元素（<span class="code">&lt;script&gt;</span>除外），当浏览器不支持JavaScript或者脚本被禁用时显示。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    ...
    &lt;!-- noscript --&gt;
    <span class="tag">&lt;script&gt;</span>
      <span class="tag">&lt;p&gt;</span>
        本页面需要浏览器支持（启用）JavaScript
      <span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/script&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    ...
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></pre>
      </div>
      <div class="txt_msg">
        这个页面会在脚本无效的情况下向用户显示一条消息。而在启用了脚本的浏览器中，用户永远也不会看见它。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Script",
  data() {
    return {
      script_src_list: [
        //script元素属性列表
        {
          name: "async",
          txt:
            "可选。表示应该立即下载脚本，但不应妨碍页面其他操作，比如下载其他资源或等待加载其他脚本，只对外部脚本有效",
          type: "boolean",
          val: "true,false",
          fir: "——",
        },
        {
          name: "charset",
          txt:
            "可选。表示通过src属性指定的代码字符集。由于大多数浏览器会忽略它的值，因此这个属性很少有人用",
          type: "string",
          val: "ISO-8859-1,UTF-8...",
          fir: "——",
        },
        {
          name: "defer",
          txt:
            "可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效，IE7及更早版本对嵌入脚本也支持这个属性",
          type: "string",
          val: "defer",
          fir: "——",
        },
        {
          name: "language",
          txt:
            "已废弃。原来用于表示编写代码使用的脚本语言，大多数浏览器会忽略这个属性，因此也没有必要再用了",
          type: "string",
          val: "JavaScript,JavaScript1.2,VBScript...",
          fir: "——",
        },
        {
          name: "src",
          txt: "可选。表示包含要执行代码的外部文件",
          type: "string",
          val: "——",
          fir: "——",
        },
        {
          name: "type",
          txt:
            "必选。可以看成是language的替代属性，表示编写代码使用的脚本语言的内容类型（也称为MIME类型）",
          type: "string",
          val:
            "text/javascript,text/ecmascript,application/javascript,application/ecmascript,application/x-javascript",
          fir: "text/javascript",
        },
      ],
    };
  },
};
</script>