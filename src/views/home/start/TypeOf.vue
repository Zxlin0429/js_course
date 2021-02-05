<template>
  <div class="typeof">
    <div class="page page1">
      <h2 class="h2">数据类型</h2>
      <p class="p">
        ES5中有5种简单数据类型（基本数据类型）：<span class="code"
          >Undefined</span
        >、<span class="code">Null</span>、<span class="code">Boolean</span
        >、<span class="code">Number</span>和<span class="code">String</span
        >。还有一种复杂数据类型：<span class="code">Object</span>,<span
          class="code"
          >Object</span
        >本质上是由一组无序的名值对组成的。
      </p>
      <div class="txt_msg">
        ES5不支持任何创建自定义类型的机制，所有值最终都将是上述6种数据类型之一。
      </div>
    </div>
    <div class="page page2">
      <h2 class="h2">typeof操作符</h2>
      <p class="p">
        ECMAscirpt是松散类型的，需要一种手段来检测给定变量的数据类型，<span
          class="code"
          >typeof</span
        >就是负责提供这方面信息的操作符。
      </p>
      <div class="txt_msg">
        对一个值使用typeof操作符可能返回下列某个字符串：<br />
        "undefined"——这个值未定义<br />
        "boolean"——这个值是布尔值<br />
        "string"——这个值是字符串<br />
        "number"——这个值是数值<br />
        "object"——这个值是对象或null<br />
        "function"——这个值是函数
      </div>
      <p class="p">下面看看如何使用<span class="code">typeof</span>操作符：</p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="string">"some string"</span>,
num = <span class="string">10</span>;
console.log(<span class="key">typeof</span> msg); //"string"
console.log(<span class="key">typeof</span> num); //"number"
console.log(<span class="key">typeof</span> null); //"object" 特殊值null被认为是一个空的对象引用
</pre>
      </div>
      <div class="txt_msg">
        typeof是一个操作符而不是一个函数，它的操作数可以是变量也可以是数值字面量。
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">Undefined类型</h2>
      <p class="p">
        <span class="code">Undefined</span
        >类型只有一个值，即特殊的undefined,在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined，例如：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg;
console.log(msg == <span class="string">"undefined"</span>); //true
</pre>
      </div>
      <p class="p">
        这个例子只声明了变量<span class="code">msg</span
        >，但未对其进行初始化。比较这个变量与undefined字面量，结果表明它们是相等的。这个例子与下面这个例子是等价的：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="key">undefined</span>;
console.log(msg == <span class="string">"undefined"</span>); //true
</pre>
      </div>
      <p class="p">
        这个例子使用undefined值显示初始化了变量<span class="code">msg</span
        >，但我们没有必要这么做，因为未经初始化的值默认就会取得undefined值。
      </p>
      <div class="txt_msg">
        一般而言，不需要显示得把一个变量设置为undefined值的情况。ES3引入这个值是为了正式区分空对象指针与未经初始化的变量。
      </div>
      <p class="p">
        不过包含undefined值的变量与尚未定义的变量还是不一样的。看看下面这个例子：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg;
console.log(msg); //"undefined"
console.log(age); //产生错误
</pre>
      </div>
      <p class="p">
        然而令人困惑的是，对未初始化的变量执行<span class="code">typeof</span
        >操作符会返回undefined值，而对未声明的变量执行<span class="code"
          >typeof</span
        >操作符也会返回undefined值。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg;
console.log(<span class="key">typeof</span> msg); //"undefined"
console.log(<span class="key">typeof</span> age); //"undefined"
</pre>
      </div>
      <p class="p">
        结果表明，对未初始化和未声明的变量执行<span class="code">typeof</span
        >操作符都返回了undefined值。因为虽然这两种变量从技术上看有本质区别，但实际上无论对哪种变量也不可能执行真正的操作。
      </p>
      <div class="txt_msg">
        如果可以做到声明变量时就初始化变量，那么当有变量使用typeof操作符返回undefined值时，我们就知道被检测的变量还没有被声明，而不是尚未初始化。
      </div>
    </div>
    <div class="page page3">
      <h2 class="h2">Null类型</h2>
      <p class="p">
        <span class="code">Null</span
        >类型是第二个只有一个值的数据类型，这个特殊的值是null。从逻辑上来看，null值表示一个空对象指针，而这正是使用<span
          class="code"
          >typeof</span
        >操作符检测null值时会返回"object"的原因，如下面这个例子所示：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="key">null</span>;
console.log(<span class="key">typeof</span> msg); //"object"
</pre>
      </div>
      <p class="p">
        undefined值派生自null值，因此ECMA-262规定对它们的相等性测试要返回true。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(<span class="key">null</span> == <span class="key">undefined</span>); //true
</pre>
      </div>
      <p class="p">
        这里，位于null和undefined之间的相等操作符（==）总是返回true，不过要注意的是，这个操作符出于比较的目的会转换其操作数。
      </p>
    </div>
    <div class="page page4">
      <h2 class="h2">Boolean类型</h2>
      <p class="p">
        <span class="code">Boolean</span
        >类型只有两个字面值：true和false。这两个值与数字值不一样，因此true不一定等于1，false不一定等于0，且true和false也是区分大小写的。虽然<span
          class="code"
          >Boolean</span
        >类型的字面量只有两个，但ECMAscript中所有类型的值都有与这两个Boolean值等价的值。，要将一个值转换未其对应的Boolean值，可调用转型函数<span
          class="code"
          >Boolean()</span
        >，如下例所示：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="string">"Hello world!"</span>;
console.log(Boolean(msg)); //true
</pre>
      </div>
      <p class="p">
        在这个例子中，使用<span class="code">Boolean()</span
        >函数返回了true，至于将值返回为true还是false，取决于转换值的数据类型及其实际值。下表给出了各种数据类型及其对于的转换规则：
      </p>
      <template>
        <el-table :data="typeof_boolean_list" style="width: 100%">
          <el-table-column prop="type" label="数据类型" width="250">
          </el-table-column>
          <el-table-column prop="t" label="转换为true的值" width="250">
          </el-table-column>
          <el-table-column prop="f" label="转换为false的值"> </el-table-column>
        </el-table>
      </template>
      <p class="p">
        这些转换规则对理解流控制语句（如if语句）自动执行相应的Boolean转换非常重要，请看下面示例：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="string">"Hello world!"</span>;
if(msg){
    console.log(<span class="string">"msg is not null"</span>); //"msg is not null"
}
</pre>
      </div>
      <p class="p">
        运行这个示例，控制台打印"msg is not null"，这是因为字符串<span
          class="code"
          >msg</span
        >被自动转换成了对于的Boolean值（true）。
      </p>
    </div>
    <div class="page page5">
      <h2 class="h2">Number类型</h2>
      <p class="p">
        <span class="code">Number</span
        >类型使用IEEE754格式表示整数和浮点数值。<br />
      </p>
      <p class="p">
        <b>整数值</b><br />
        最基础的数值字面量格式是十进制整数。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> intNum = <span class="string">857</span>;
</pre>
      </div>
      <p class="p">
        除十进制外，整数还可以通过八进制或十六进制的字面量表示。其中八进制字面量值的第一位必须是0，十六进制字面量值的前两位必须是0x
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> intNum1 = <span class="string">070</span>; //八进制的56
<span class="key">var</span> intNum2 = <span class="string">079</span>; //无效的八进制数，解析为79
<span class="key">var</span> intNum3 = <span class="string">08</span>; //无效的八进制数，解析为8

<span class="key">var</span> intNum4 = <span class="string">0xA</span>; //十六进制的10
<span class="key">var</span> intNum5 = <span class="string">0x1f</span>; //十六进制的31
</pre>
      </div>
      <div class="txt_msg">
        在进行算术计算时，所有八进制和十六进制表示的数值最终都将被转换成十进制数。
      </div>
      <p class="p">
        <b>浮点数值</b><br />
        浮点数也是<span class="code">Number</span
        >类型的一种数值。该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。虽然小数点前面可以没有整数，但不推荐这种写法。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> floatNum1 = <span class="string">1.1</span>;
<span class="key">var</span> floatNum2 = <span class="string">0.1</span>;
<span class="key">var</span> floatNum3 = <span class="string">.1</span>; //有效，但不推荐
</pre>
      </div>
      <p class="p">
        由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAscript会将小数点后没有跟数字或本身就表示一个整数（如1.0）的浮点数转换为整数。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> floatNum1 = <span class="string">1.</span>; //小数点后没有跟数字，解析为1
<span class="key">var</span> floatNum2 = <span class="string">1.0</span>; //本身表示一个整数，解析为1
</pre>
      </div>
      <p class="p">
        对于那些极大或极小的数值，可以用e表示法（科学计数法），用e表示法表示的数值等于e前面的数值乘以10的指数次幂。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> floatNum1 = <span class="string">3.1415926e7</span>; //等于31415926
</pre>
      </div>
      <p class="p">
        在默认情况下，ECMAscript会将那些小数点后面带6个零以上的浮点数转换为以e表示法表示的数值（例如：0.0000002会被转换成2e-7）。<br />
        浮点数最高精度是17位小数，但在进行算术运算时其精度远远不如整数。例如：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> floatNum1 = <span class="string">0.1</span>;
<span class="key">var</span> floatNum2 = <span class="string">0.2</span>;
console.log(floatNum1 + floatNum2); //0.30000000000000004
</pre>
      </div>
      <div class="txt_error">
        <div class="i">!</div>
        关于浮点数值计算会产生舍入误差问题，有一点需要明确：这是使用基于IEEE754数值的浮点数计算的通病，ECMAscript并非独此一家，其他使用相同数值格式的语言也存在这个问题。
      </div>
      <p class="p">
        <b>数值范围</b><br />
        由于内存的限制，ECMAscript并不能保存世界上所有的数值。<br />
        ECMAscript能够表示的最小的数保存在<span class="code"
          >Number.MIN_VALUE</span
        >中（在大部分浏览器中，这个值为5e-324），能够表示的最大的数保存在<span
          class="code"
          >Number.MAX_VALUE</span
        >中（在大部分浏览器中，这个值为1.7976931348623157e+308）。<br />
        如果超出数值范围的值，这个值被自动转换成特殊的<span class="code"
          >Infinity</span
        >值（无穷）。想要确定一个数值是不是有穷的，可以使用isFinite()函数，如果有穷，返回true，请看下面例子：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> num = <span class="string">Number.MIN_VALUE</span> + <span class="string">Number.MAX_VALUE</span>;
console.log(num); //true
</pre>
      </div>
      <div class="txt_msg">
        访问Number.NEGATIVE_INFINITY和Number.POSITIVE_INFINITY可以得到负和正Infinity的值。这两个属性分别保存着-Infinity和Infinity。
      </div>
      <p class="p">
        <b>NaN</b><br />
        <span class="code">NaN</span>，即非数值（Not a
        Number）是一个特殊的值，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况。例如：任何数值除以非数值会返回NaN。
      </p>
      <p class="p">
        NaN有两个特点。第一，任何涉及NaN的操作（如NaN/10）都会返回NaN；第二，NaN与任何值都不相等，包括NaN本身。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(<span class="string">NaN</span> == <span class="string">NaN</span>); //false
</pre>
      </div>
      <p class="p">
        针对NaN的特点，ECMAscript定义了<span class="code">isNaN()</span
        >函数，这个函数接受一个任何类型的参数，它会帮助我们确定这个参数是否“不是数值”。<span
          class="code"
          >isNaN()</span
        >在接受到值后，会尝试将这个值转换为数值，某些不是数值的值会直接转换为数值（如"10"或Boolean值），而任何不能被转换为数值的值都会导致这个函数返回true。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(isNaN(<span class="string">NaN</span>)); //true
console.log(isNaN(<span class="string">1</span>)); //false
console.log(isNaN(<span class="string">"1"</span>)); //false,可以被转换为数值1
console.log(isNaN(<span class="string">"blue"</span>)); //true
console.log(isNaN(<span class="string">true</span>)); //false,可以被转换为数值1
</pre>
      </div>
      <div class="txt_msg">
        isNaN()适用于对象。在基于对象调用isNaN()时，会首先调用对象的valueOf()，然后确认该方法返回的值是否可以转换为数值，如果不能，则基于这个返回值调用toString()，在测试返回值。
      </div>
      <p class="p">
        <b>数值转换</b><br />
        <span class="code">Number()</span>、<span class="code">parseInt()</span
        >、<span class="code">parseFloat()</span>都可以把非数值转换为数值。
      </p>
      <p class="p"><span class="code">Number()</span>函数的转换规则如下：</p>
      <div class="txt_msg">
        1.如果是Boolean值，true和false将分别被转换为1和0；<br />
        2.如果是数字值，只是简单的传入和返回；<br />
        3.如果是null值，返回0；<br />
        4.如果是undefined，返回NaN；<br />
        5.如果是字符串，遵循：<br />
        （1）如果字符串只包含数字，则将其转换为十进制数，即"1"=>1,"113"=>113,"011"=>11;<br />
        （2）如果字符串中包含有效的浮点格式，则将其转换浮点数值，即"1.1"=>1.1,"11.3"=>11.3,"01.1"=>1.1;<br />
        （3）如果字符串是空的，则将其转换为0；<br />
        （4）如果字符串包含除上述格式之外的字符，则将其转换为NaN；<br />
        6.如果是对象，则调用对象的valueOf()，然后依照前面的规则转换返回的值，如果是NaN，则调用toString()，然后再依照前面的规则转换返回的值。
      </div>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(Number(<span class="string">"Hello world!"</span>)); //NaN
console.log(Number(<span class="string">"1"</span>)); //1
console.log(Number(<span class="string">" "</span>)); //0
console.log(Number(<span class="string">"000011"</span>)); //11
console.log(Number(<span class="string">true</span>)); //1
</pre>
      </div>
      <p class="p">
        由于<span class="code">Number()</span
        >函数在转换字符串时比较复杂且不够合理，因此在处理整数时更常用的是<span
          class="code"
          >parseInt()</span
        >函数。
      </p>
      <div class="txt_msg">
        parseInt()的转换规则是，会忽略字符串前面的空格，直到找到第一个非空字符。如果第一个字符不是数字字符或者负号，parseInt()就会返回NaN（parseInt()转换空字符会返回NaN），如果第一个字符是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或者遇到一个非数字字符。parseInt()也可以识别出各种整数格式（十进制、八进制、十六进制），也就是说，如果字符串以"0x"开头且后面跟数字字符，就会被当做十六进制整数，如果字符串以"0"开头且后面跟数字字符，就会被当做八进制整数解析。
      </div>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(parseInt(<span class="string">"Hello world!"</span>)); //NaN
console.log(parseInt(<span class="string">" "</span>)); //NaN
console.log(parseInt(<span class="string">"code111"</span>)); //NaN
console.log(parseInt(<span class="string">"111code"</span>)); //111
console.log(parseInt(<span class="string">"0xA"</span>)); //10
console.log(parseInt(<span class="string">"070"</span>)); //es3中返回56，es5中返回70，因为es5中parseInt()不在具有解析八进制值的能力
console.log(parseInt(<span class="string">"22.2"</span>)); //22
console.log(parseInt(<span class="string">"070"</span>),<span class="string">8</span>)); //56,第二个参数为转换时使用的基数（即多少进制）
console.log(parseInt(<span class="string">"AF"</span>),<span class="string">16</span>)); //175
</pre>
      </div>
      <p class="p">
        与<span class="code">parseInt()</span>函数类似，<span class="code"
          >parseFloat()</span
        >是处理浮点数的函数。
      </p>
      <div class="txt_msg">
        parseFloat()的转换规则是，从第一个字符（位置0）开始解析每个字符，一直解析到字符串末尾，或者解析到遇见一个无效的浮点数字字符为止。也就是说，字符串中第一个小数点是有效的，第二个小数点就是无效的了，因此它后面的字符串将被忽略。<br />
        parseFloat()会忽略前导的0。<br />
        如果字符串包含的是一个可解析为整数（没有小数点或小数点后面全是0），则返回整数。parseFloat()只解析十进制，所以没有第二个参数指定基数的用法。
      </div>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(parseInt(<span class="string">"123msg"</span>)); //123
console.log(parseInt(<span class="string">"123.000msg"</span>)); //123
console.log(parseInt(<span class="string">"0xA"</span>)); //0
console.log(parseInt(<span class="string">"22.2"</span>)); //22.2
console.log(parseInt(<span class="string">"22.2.2"</span>)); //22.2
console.log(parseInt(<span class="string">"3.125e7"</span>)); //31250000
</pre>
      </div>
    </div>
    <div class="page page6">
      <h2 class="h2">String类型</h2>
      <p class="p">
        <span class="code">String</span>类型用于表示由0或多个16位<span
          class="code"
          >Unicode</span
        >字符组成的字符序列，即字符串。字符串可以由双引号（"）或单引号（'）表示。双引号、单引号这两种形式没有区别。
      </p>
      <p class="p">
        <b>字符串字面量</b><br />
        <span class="string">转移序列</span>
        （特殊的字符字面量），用于表示非打印字符或具有其他用途的字符。
      </p>
      <div class="txt_msg">
        \n:换行 \t:制表 \b:退格 \r:回车 \f:进纸 \\:斜杠 \':单引号 \":双引号
        \xnn:以十六进制代码nn表示一个字符（n为0~f），例如：\x41表示"A"
        \unnnn:以十六进制代码nnnn表示一个Unicode字符（n为0~f）,例如：\u03a3表示希腊字符Σ
      </div>
      <p class="p">
        任何字符串的长度都可以通过访问其<span class="code">length</span
        >属性取得。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
console.log(parseInt(<span class="string">"123msg"</span>.length)); //6
</pre>
      </div>
      <p class="p">
        ECMAscirpt中的字符串是不可变的，也就是说字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量，看下面这个例子：
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg = <span class="string">"Java"</span>;
msg = msg + <span class="string">"Script"</span>;
</pre>
      </div>
      <p class="p">
        上面例子中，<span class="code">msg</span
        >变量开始时包含字符串"Java"，而第二行代码把<span class="code">msg</span
        >的值重新定义为"Java"与"Script"的组合，即"JavaScript"。实现这个操作的过程如下：<br />
        首先创建一个能容纳10个字符的新字符串，然后在这个新字符串中填充"Java"和"Script"，最后一步是销毁原来的字符串"Java"和字符串"Script"，因为这两个变量已经没有用了。
      </p>
      <p class="p">
        <b>转换为字符串</b><br />
        第一种就是<span class="code">toString()</span>方法，默认不传参数，但也可以传递一个参数:输入数值的基数。除了null和undefined值其他类型都有<span class="code">toString()</span>方法。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg1 = <span class="string">11</span>;
console.log(msg1.toString()); //"11"

<span class="key">var</span> msg2 = <span class="string">true</span>;
console.log(msg2.toString()); //"true"

<span class="key">var</span> msg3 = <span class="string">10</span>;
console.log(msg3.toString()); //"10"
console.log(msg3.toString(2)); //"1010"
console.log(msg3.toString(8)); //"12"
console.log(msg3.toString(16)); //"a"
</pre>
      </div>
      <p class="p">
        第二种就是<span class="code">String()</span>函数，它可以将任何类型的值转换为字符串。<span class="code">String()</span>在转换时如果转换的值有<span class="code">toString()</span>方法，则调用该方法并返回相应的结果，如果值为null或undefined，返回"null"或"undefined"。
      </p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> msg1 = <span class="string">10</span>;
console.log(msg1.String()); //"10"

<span class="key">var</span> msg2 = <span class="string">true</span>;
console.log(msg2.String()); //"true"

<span class="key">var</span> msg3 = <span class="string">null</span>;
console.log(msg3.String()); //"null"

<span class="key">var</span> msg4;
console.log(msg4.String()); //"undefined"
</pre>
      </div>
    </div>
    <div class="page page7">
      <h2 class="h2">Object类型</h2>
      <p class="p">ECMAscript中的对象其实就是一组数据和功能的集合。对象可以通过执行<span class="code">new</span>操作符后跟要创建的对象类型的名称来创建。而创建<span class="code">Object</span>类型的实例并为其添加属性和方法，就可以创建自定义对象，如下所示：</p>
      <div class="txt_code">
        <div class="html">js</div>
        <pre>
<span class="key">var</span> o1 = <span class="key">new</span> Object();
<span class="key">var</span> o2 = <span class="key">new</span> Object; //有效，但不推荐省略圆括号
</pre>
      </div>
      <p class="p">
        <span class="code">Object</span>类型是所有它的实例的基础。换句话说，<span class="code">Object</span>类型所具有的任何属性和方法也同样存在于更具体的对象中。
      </p>
      <div class="txt_msg">
        Object的每个实例都具有下列属性和方法：<br />
        <b>constructor</b>:保存着用于创建当前对象的函数。对于前面的例子来说，构造函数（constructor）就是Object()。<br />
        <b>hasOwnProperty(propertyName)</b>:用于检查给定的属性在当前对象实例中（而不是在实例原型中）是否存在。其中参数的属性名（propertyName）必须以字符串形式指定。<br />
        <b>isPrototypeOf(object)</b>:用于检查传入的对象是否是当前对象的原型。<br />
        <b>propertyIsEnumerable(propertyName)</b>:用于检查给定的属性是否能够使用for-in语句来枚举。其中参数的属性名（propertyName）必须以字符串形式指定。<br />
        <b>toLocaleString()</b>:返回对象的字符串表示，该字符串与执行环境的地区对应。<br />
        <b>toString()</b>:返回对象的字符串表示。<br />
        <b>valueOf()</b>:返回对象的字符串、数值或布尔值表示。通常与toString()的返回值相同。
      </div>
      <div class="txt_msg">
        由于ECMAscript中Object是所有对象的基础，因此所有对象都具有这些基本的属性和方法。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TypeOf",
  data() {
    return {
      typeof_boolean_list: [
        //Boolean转换表
        {
          type: "Boolean",
          t: "true",
          f: "false",
        },
        {
          type: "String",
          t: "任何非空字符串",
          f: "' '（空字符串）",
        },
        {
          type: "Number",
          t: "任何非零数字值（包括无穷大）",
          f: "0和NaN",
        },
        {
          type: "Object",
          t: "任何对象",
          f: "null",
        },
        {
          type: "Undefined",
          t: "——",
          f: "undefined",
        },
      ],
    };
  },
};
</script>