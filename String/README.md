

### String 对象
---

> String 对象用于处理文本（字符串）。

#### 创建 String 对象的语法:
```javascript
new String(s);
String(s);
```

####  参数
> 参数 s 是要存储在 String 对象中或转换成原始字符串的值。

#### 返回值
> 当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 s 或 s 的字符串表示。
> 当不用 new 运算符调用 String() 时，它只把 s 转换成原始的字符串，并返回转换后的值。

#### String 对象属性

<table>
    <tr>
        <th>属性</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>constructor</td>
        <td>对创建该对象的函数的引用</td>
    </tr>
    <tr>
        <td>length</td>
        <td>字符串的长度</td>
    </tr>
    <tr>
        <td>prototype</td>
        <td>允许您向对象添加属性和方法</td>
    </tr>
</table>

#### String 对象方法

<table>
    <tr>
        <th>方法</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>anchor()</td>
        <td>创建 HTML 锚。</td>
    </tr>
    <tr>
        <td>big()</td>
        <td>用大号字体显示字符串。</td>
    </tr>
    <tr>
        <td>blink()</td>
        <td>显示闪动字符串。</td>
    </tr>
    <tr>
        <td>bold()</td>
        <td>使用粗体显示字符串。</td>
    </tr>
    <tr>
        <td>charAt()</td>
        <td>返回在指定位置的字符。</td>
    </tr>
    <tr>
        <td>charCodeAt()</td>
        <td>返回在指定的位置的字符的 Unicode 编码。</td>
    </tr>
    <tr>
        <td>concat()</td>
        <td>连接字符串。</td>
    </tr>
    <tr>
        <td>fixed()</td>
        <td>以打字机文本显示字符串。</td>
    </tr>
    <tr>
        <td>fontcolor()</td>
        <td>使用指定的颜色来显示字符串。</td>
    </tr>
    <tr>
        <td>fontsize()</td>
        <td>使用指定的尺寸来显示字符串。</td>
    </tr>
    <tr>
        <td>fromCharCode()</td>
        <td>从字符编码创建一个字符串。</td>
    </tr>
    <tr>
        <td>indexOf()</td>
        <td>检索字符串。</td>
    </tr>
    <tr>
        <td>italics()</td>
        <td>使用斜体显示字符串。</td>
    </tr>
    <tr>
        <td>lastIndexOf()</td>
        <td>从后向前搜索字符串。</td>
    </tr>
    <tr>
        <td>link()</td>
        <td>将字符串显示为链接。</td>
    </tr>
    <tr>
        <td>localeCompare()</td>
        <td>用本地特定的顺序来比较两个字符串。</td>
    </tr>
    <tr>
        <td>match()</td>
        <td>找到一个或多个正则表达式的匹配。</td>
    </tr>
    <tr>
        <td>replace()</td>
        <td>替换与正则表达式匹配的子串。</td>
    </tr>
    <tr>
        <td>search()</td>
        <td>检索与正则表达式相匹配的值。</td>
    </tr>
    <tr>
        <td>slice()</td>
        <td>提取字符串的片断，并在新的字符串中返回被提取的部分。</td>
    </tr>
    <tr>
        <td>small()</td>
        <td>使用小字号来显示字符串。</td>
    </tr>
    <tr>
        <td>split()</td>
        <td>把字符串分割为字符串数组。</td>
    </tr>
    <tr>
        <td>strike()</td>
        <td>使用删除线来显示字符串。</td>
    </tr>
    <tr>
        <td>sub()</td>
        <td>把字符串显示为下标。</td>
    </tr>
    <tr>
        <td>substr()</td>
        <td>从起始索引号提取字符串中指定数目的字符。</td>
    </tr>
    <tr>
        <td>substring()</td>
        <td>提取字符串中两个指定的索引号之间的字符。</td>
    </tr>
    <tr>
        <td>sup()</td>
        <td>把字符串显示为上标。</td>
    </tr>
    <tr>
        <td>toLocaleLowerCase()</td>
        <td>把字符串转换为小写。</td>
    </tr>
    <tr>
        <td>toLocaleUpperCase()</td>
        <td>把字符串转换为大写。</td>
    </tr>
    <tr>
        <td>toLowerCase()</td>
        <td>把字符串转换为小写。</td>
    </tr>
    <tr>
        <td>toUpperCase()</td>
        <td>把字符串转换为大写。</td>
    </tr>
    <tr>
        <td>toSource()</td>
        <td>代表对象的源代码。</td>
    </tr>
    <tr>
        <td>toString()</td>
        <td>返回字符串。</td>
    </tr>
    <tr>
        <td>valueOf()</td>
        <td>返回某个字符串对象的原始值。</td>
    </tr>
</table>


###  anchor();

* 用法: 
> anchor() 方法用于创建 HTML 锚。

* 语法
> stringObject.anchor(anchorname) //anchorname	必需。为锚定义名称。

```javascript
var txt="Hello world!";
console.log(txt.anchor("myanchor")); //输出: <a name="myanchor">Hello world!</a>
```


###  big();

* 用法: 
> big() 方法用于把字符串显示为大号字体。

* 语法
> stringObject.big()

```javascript
var str="Hello world!";
console.log(str.big()); //输出: <big>Hello world!</big>
```

###  blink();

* 用法: 
> blink() 方法用于显示闪动的字符串。

* 语法
> stringObject.blink()

* 注释
> 此方法无法工作于 Internet Explorer 中。

```javascript
var str="Hello world!";
console.log(str.blink()); // <blink>Hello world!</blink>
```


###  bold();

* 用法: 
> bold() 方法用于把字符串显示为粗体。

* 语法
> stringObject.bold()

```javascript
var str="Hello world!";
console.log(str.bold()); // <b>Hello world!</b>
```


###  charAt();

* 用法: 
> charAt() 方法可返回指定位置的字符。

* 语法
> stringObject.charAt(index); index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。

* 注释
> 字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。

```javascript
var str="Hello world!";
console.log(str.charAt(1)); // 3
console.log(str.charAt(6)); // w
console.log(str.charAt(-1)); // 空字符串。
console.log(str.charAt(29)); // 空字符串。
```


###  charCodeAt();

* 用法: 
> charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数

* 语法
> stringObject.charCodeAt(index); // index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。

* 说明
> 方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。

* 注释
> 字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN。

```javascript
var str="Hello world!";
console.log(str.charCodeAt(1)); // 101
console.log(str.charCodeAt(6)); // 110
console.log(str.charCodeAt(-1)); // NaN
console.log(str.charCodeAt(29)); // NaN
```


###  concat();

* 用法: 
> concat() 方法用于连接两个或多个字符串。

* 语法
> stringObject.concat(stringX,stringX,...,stringX); stringX 必需。将被连接为一个字符串的一个或多个字符串对象。

* 说明
> concat() 方法将把它的所有参数转换成字符串，然后按顺序连接到字符串 stringObject 的尾部，并返回连接后的字符串。请注意，stringObject 本身并没有被更改。

* 注释
> 请注意，使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。

```javascript
var str1 = "Hello ";
var str2 = "world!";
console.log(str1.concat(str2)); // Hello world!
console.log(str1.concat(str2,' 123445')); // Hello world! 123445
console.log(str1); // Hello
console.log(str2); // world!
```


###  fixed();

* 用法: 
> fixed() 方法用于把字符串显示为打字机字体。

* 语法
> stringObject.fixed()


```javascript
var str="Hello world!";
console.log(str.fixed());
```


###  fontcolor();

* 用法: 
> fontcolor() 方法用于按照指定的颜色来显示字符串。

* 语法
> stringObject.fontcolor(color); color 必需。为字符串规定 font-color。该值必须是颜色名(red)、RGB 值(rgb(255,0,0))或者十六进制数(#FF0000)。


```javascript
var str="Hello world!";
console.log(str.fontcolor("red")); // <font color="red">Hello world!</font>
```


###  fromCharCode();

* 用法: 
> fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。

* 语法
> String.fromCharCode(numX,numX,...,numX); numX 必需。一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。

* 说明
> 它不能作为您已创建的 String 对象的方法来使用。因此它的语法应该是 String.fromCharCode()，而不是 myStringObject.fromCharCode()。

* 注释
> 该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定。

```javascript
console.log(String.fromCharCode(72,69,76,76,79)); // HELLO
console.log(String.fromCharCode(65,66,67)); // ABC
console.log(String.fromCharCode(109,110)); // mn
```


###  indexOf();

* 用法: 
> indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

* 语法
> stringObject.indexOf(searchvalue,fromindex); searchvalue 必需。规定需检索的字符串值; fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。

* 说明
> 该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。

* 注释
> indexOf() 方法对大小写敏感！ 如果要检索的字符串值没有出现，则该方法返回 -1。

```javascript
var str="Hello world!";

console.log(str.indexOf()); // -1
console.log(str.indexOf('l')); //2
console.log(str.indexOf('l',3)); //3
console.log(str.indexOf('l',4)); //9
console.log(str.indexOf("Hello")); // 0
console.log(str.indexOf("World")); // -1
console.log(str.indexOf("world")); // 6
```


###  italics();

* 用法: 
> italics() 方法用于把字符串显示为斜体。

* 语法
> stringObject.italics()

```javascript
var str="Hello world!";
console.log(str.italics()); // <i>Hello world!</i>
```


###  lastIndexOf();

* 用法: 
> lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。

* 语法
> stringObject.lastIndexOf(searchvalue,fromindex); searchvalue 必需。规定需检索的字符串值。fromindex 可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的最后一个字符处开始检索。

* 返回值 
> 如果在 stringObject 中的 fromindex 位置之前存在 searchvalue，则返回的是出现的最后一个 searchvalue 的位置。

* 说明
> 该方法将从尾到头地检索字符串 stringObject，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的结尾（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一个字符在 stringObject 中的位置。stringObject 中的字符位置是从 0 开始的。

* 注释
> lastIndexOf() 方法对大小写敏感！ 如果要检索的字符串值没有出现，则该方法返回 -1。

```javascript
var str="Hello world! world";

console.log(str.lastIndexOf()); // -1
console.log(str.lastIndexOf("Hello")); // 0
console.log(str.lastIndexOf("World")); // -1
console.log(str.lastIndexOf("world")); // 13
```


###  anchor();

* 用法: 
> link() 方法用于把字符串显示为超链接。

* 语法
> stringObject.link(url); url	必需。规定要链接的 URL。


```javascript
var str="Free Web Tutorials!";
console.log(str.link()); // <a href="undefined">Free Web Tutorials!</a>
console.log(str.link("http://www.w3school.com.cn")); // <a href="http://www.w3school.com.cn">Free Web Tutorials!</a>
```


###  slice();

* 用法: 
>  slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

* 语法
>  stringObject.slice(start,end); start	要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。end	紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。

* 返回值
>  一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。

* 说明
> String 对象的方法 slice()、substring() 和 substr() （不建议使用）都可返回字符串的指定部分。slice() 比 substring() 要灵活一些，因为它允许使用负数作为参数。slice() 与 substr() 有所不同，因为它用两个字符的位置来指定子串，而 substr() 则用字符位置和长度来指定子串。还要注意的是，String.slice() 与 Array.slice() 相似。

```javascript
var str="Hello happy world!";
console.log(str.slice()); // Hello happy world!
console.log(str.slice(36)); // 空
console.log(str.slice(6)); // happy world!
console.log(str.slice(2,4)); // ll
console.log(str.slice(-1,4)); // 空
console.log(str); // Hello happy world!
```


###  small();

* 用法: 
> small() 方法用于把字符串显示为小号字。

* 语法
> stringObject.small()

```javascript
var str="Hello world!";
console.log(str.small()); // <small>Hello world!</small>
```


###  split();

* 用法: 
> split() 方法用于把一个字符串分割成字符串数组。

* 语法
> stringObject.split(separator,howmany); separator	必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。howmany	可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

* 返回值
> 一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。但是，如果 separator 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。

* 注释
> 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。String.split() 执行的操作与 Array.join 执行的操作是相反的。

```javascript
var str="How are you doing today?";

console.log(str.split(" ")); // [ 'How', 'are', 'you', 'doing', 'today?' ]
console.log(str.split("")); // ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", " ", "t", "o", "d", "a", "y", "?"]
console.log(str.split(" ",3)); // ["How", "are", "you"]
console.log(str.split(" ",-2)); // [ 'How', 'are', 'you', 'doing', 'today?' ]

console.log("2:3:4:5".split(":")); // [ '2', '3', '4', '5' ]
console.log("|a|b|c".split("|")); // [ '', 'a', 'b', 'c' ]
```


###  strike();

* 用法: 
> strike() 方法用于显示加删除线的字符串。

* 语法
> stringObject.strike()


```javascript
var str="Hello world!";
console.log(str.strike()); // <strike>Hello world!</strike>
```


###  sub();

* 用法: 
> sub() 方法用于把字符串显示为下标。

* 语法
> stringObject.sub()


```javascript
var str="Hello world!";
console.log(str.sub()); // <sub>Hello world!</sub>
```


###  sup();

* 用法: 
> sup() 方法用于把字符串显示为上标。

* 语法
> stringObject.sup []() ()


```javascript
var str="Hello world!";
console.log(str.sup());//<sup>Hello world!</sup>
```


###  substr();

* 用法: 
> substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。

* 语法
> stringObject.substr(start,length); start	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。length	可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。

* 重要
> ECMAscript 没有对该方法进行标准化，因此反对使用它。 在 IE 4 中，参数 start 的值无效。在这个 BUG 中，start 规定的是第 0 个字符的位置。在之后的版本中，此 BUG 已被修正。

* 返回值
> 一个新的字符串，包含从 stringObject 的 start（包括 start 所指的字符） 处开始的 length 个字符。如果没有指定 length，那么返回的字符串包含从 start 到 stringObject 的结尾的字符。

* 注释
> substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。

```javascript
var str="Hello world!";
console.log(str.substr(3)); //lo world!
console.log(str.substr(3,4)); // lo w
console.log(str.substr(-5,4)); // orld
console.log(str.substr(-5,-2)); // 空
```


###  substring();

* 用法: 
> substring() 方法用于提取字符串中介于两个指定下标之间的字符。

* 语法
> stringObject.substring(start,stop); start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。stop 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。

* 返回值
> 一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。

* 说明
> substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。

* 注释
> 与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。

```javascript
var str="Hello world!";
console.log(str.substring(3)); //lo world!
console.log(str.substring(3,5)); // lo
console.log(str.substring(-3,-2)); // 空
```


###  toLocaleLowerCase();

* 用法: 
> toLocaleLowerCase() 方法用于把字符串转换为小写。

* 语法
> stringObject.toLocaleLowerCase()

* 说明
> 与 toLowerCase() 不同的是，toLocaleLowerCase() 方法按照本地方式把字符串转换为小写。只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toLowerCase() 一样。

* 返回值
> 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了小写字符。

```javascript
var str="Hello World!";
console.log(str.toLocaleLowerCase()); //hello world!
```


###  toLocaleUpperCase();

* 用法: 
> toLocaleUpperCase() 方法用于把字符串转换为大写。

* 语法
> stringObject.toLocaleUpperCase()

* 返回值
> 一个新的字符串，在其中 stringObject 的所有小写字符全部被转换为了大写字符。

* 说明
> 与 toUpperCase() 不同的是，toLocaleUpperCase() 方法按照本地方式把字符串转换为大写。只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toUpperCase() 一样。

```javascript
var str="Hello World!";
console.log(str.toLocaleUpperCase()); // HELLO WORLD!
```


###  toLowerCase();

* 用法: 
> toLowerCase() 方法用于把字符串转换为小写。

* 语法
> stringObject.toLowerCase()

* 返回值
> 一个新的字符串，在其中 stringObject 的所有大写字符全部被转换为了小写字符。

```javascript
var str="Hello World!";
console.log(str.toLowerCase()); // hello world!
```

###  toUpperCase();

* 用法: 
> toUpperCase() 方法用于把字符串转换为大写。

* 语法
> stringObject.toUpperCase()

* 返回值
> 一个新的字符串，在其中 stringObject 的所有小写字符全部被转换为了大写字符。

```javascript
var str="Hello World!";
console.log(str.toUpperCase()); // HELLO WORLD!
```

###  anchor();

* 用法: 
> 

* 语法
> 

* 说明
> 

* 注释
> 

```javascript
```