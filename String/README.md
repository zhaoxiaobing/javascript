

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


