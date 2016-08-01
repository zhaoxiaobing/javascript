

### JavaScript Date
---

> Date 对象
> Date 对象用于处理日期和时间。

#### 创建 Date 对象的语法：
```javascript
var myDate=new Date()
```
> 注释：Date 对象会自动把当前日期和时间保存为其初始值。

#### Date 对象属性

<table>
    <tr>
        <th>属性</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>constructor</td>
        <td>返回对创建此对象的 Date 函数的引用。</td>
    </tr>
    <tr>
        <td>prototype</td>
        <td>使您有能力向对象添加属性和方法</td>
    </tr>
</table>

#### Date 对象方法

<table>
  <tr>
    <th>方法</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_Date.asp">Date()</a></td>
    <td>返回当日的日期和时间。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getDate.asp">getDate()</a></td>
    <td>从 Date 对象返回一个月中的某一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getDay.asp">getDay()</a></td>
    <td>从 Date 对象返回一周中的某一天 (0 ~ 6)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getMonth.asp">getMonth()</a></td>
    <td>从 Date 对象返回月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getFullYear.asp">getFullYear()</a></td>
    <td>从 Date 对象以四位数字返回年份。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getYear.asp">getYear()</a></td>
    <td><span class="deprecated">请使用 getFullYear() 方法代替。</span></td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getHours.asp">getHours()</a></td>
    <td>返回 Date 对象的小时 (0 ~ 23)。</td>
  </tr>
  
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getMinutes.asp">getMinutes()</a></td>
    <td>返回 Date 对象的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getSeconds.asp">getSeconds()</a></td>
    <td>返回 Date 对象的秒数 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp">getMilliseconds()</a></td>
    <td>返回 Date 对象的毫秒(0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getTime.asp">getTime()</a></td>
    <td>返回 1970 年 1 月 1 日至今的毫秒数。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp">getTimezoneOffset()</a></td>
    <td>返回本地时间与格林威治标准时间 (GMT) 的分钟差。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCDate.asp">getUTCDate()</a></td>
    <td>根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCDay.asp">getUTCDay()</a></td>
    <td>根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp">getUTCMonth()</a></td>
    <td>根据世界时从 Date 对象返回月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp">getUTCFullYear()</a></td>
    <td>根据世界时从 Date 对象返回四位数的年份。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCHours.asp">getUTCHours()</a></td>
    <td>根据世界时返回 Date 对象的小时 (0 ~ 23)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp">getUTCMinutes()</a></td>
    <td>根据世界时返回 Date 对象的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp">getUTCSeconds()</a></td>
    <td>根据世界时返回 Date 对象的秒钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp">getUTCMilliseconds()</a></td>
    <td>根据世界时返回 Date 对象的毫秒(0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_parse.asp">parse()</a></td>
    <td>返回1970年1月1日午夜到指定日期（字符串）的毫秒数。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setDate.asp">setDate()</a></td>
    <td>设置 Date 对象中月的某一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setMonth.asp">setMonth()</a></td>
    <td>设置 Date 对象中月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setFullYear.asp">setFullYear()</a></td>
    <td>设置 Date 对象中的年份（四位数字）。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setYear.asp">setYear()</a></td>
    <td><span class="deprecated">请使用 setFullYear() 方法代替。</span></td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setHours.asp">setHours()</a></td>
    <td>设置 Date 对象中的小时 (0 ~ 23)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setMinutes.asp">setMinutes()</a></td>
    <td>设置 Date 对象中的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setSeconds.asp">setSeconds()</a></td>
    <td>设置 Date 对象中的秒钟 (0 ~ 59)。</td>
  </tr>
  
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp">setMilliseconds()</a></td>
    <td>设置 Date 对象中的毫秒 (0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setTime.asp">setTime()</a></td>
    <td>以毫秒设置 Date 对象。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setUTCDate.asp">setUTCDate()</a></td>
    <td>根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp">setUTCMonth()</a></td>
    <td>根据世界时设置 Date 对象中的月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp">setUTCFullYear()</a></td>
    <td>根据世界时设置 Date 对象中的年份（四位数字）。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setutchours.asp">setUTCHours()</a></td>
    <td>根据世界时设置 Date 对象中的小时 (0 ~ 23)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp">setUTCMinutes()</a></td>
    <td>根据世界时设置 Date 对象中的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp">setUTCSeconds()</a></td>
    <td>根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp">setUTCMilliseconds()</a></td>
    <td>根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp">toSource()</a></td>
    <td>返回该对象的源代码。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toString_date.asp">toString()</a></td>
    <td>把 Date 对象转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toTimeString.asp">toTimeString()</a></td>
    <td>把 Date 对象的时间部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toDateString.asp">toDateString()</a></td>
    <td>把 Date 对象的日期部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toGMTString.asp">toGMTString()</a></td>
    <td><span class="deprecated">请使用 toUTCString() 方法代替。</span></td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toUTCString.asp">toUTCString()</a></td>
    <td>根据世界时，把 Date 对象转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toLocaleString.asp">toLocaleString()</a></td>
    <td>根据本地时间格式，把 Date 对象转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp">toLocaleTimeString()</a></td>
    <td>根据本地时间格式，把 Date 对象的时间部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp">toLocaleDateString()</a></td>
    <td>根据本地时间格式，把 Date 对象的日期部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_utc.asp">UTC()</a></td>
    <td>根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。</td>
  </tr>
  <tr>
    <td><a target="_blank" href="http://www.w3school.com.cn/jsref/jsref_valueOf_date.asp">valueOf()</a></td>
    <td>返回 Date 对象的原始值。</td>
  </tr>
</table>

###  Date();

* 用法: 
> Date() 方法可返回当天的日期和时间。

* 语法
> Date()

```javascript
console.log(Date()); // Mon Aug 01 2016 11:36:39 GMT+0800 (CST)
```

###  getDate();

* 用法: 
> getDate() 方法可返回月份的某一天。

* 语法
> dateObject.getDate()

* 说明
> 该方法总是结合一个 Date 对象来使用。

* 返回值
> dateObject 所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。

```javascript
var d = new Date();
console.log(d.getDate()); //当天的日期。   8月1号测试 返回  1
```

###  getDay();

* 用法: 
> getDay() 方法可返回表示星期的某一天的数字。

* 语法
> dateObject.getDay()

* 返回值
> dateObject 所指的星期中的某一天，使用本地时间。返回值是 0（周日） 到 6（周六） 之间的一个整数。

* 注释
> 该方法总是结合一个 Date 对象来使用。

```javascript
var d=new Date();
console.log(d.getDay()); //今天8月1号星期一  所以输出 1
```

###  getMonth();

* 用法: 
> getMonth() 方法可返回表示月份的数字。

* 语法
> dateObject.getMonth()

* 返回值
> dateObject 的月份字段，使用本地时间。返回值是 0（一月） 到 11（十二月） 之间的一个整数。

* 注释
> 该方法总是结合一个 Date 对象来使用。

```javascript
var d=new Date();
console.log(d.getMonth()); // 今天八月1号  所以输出 7
```


###  getFullYear();

* 用法: 
> getFullYear() 方法可返回一个表示年份的 4 位数字。

* 语法
> dateObject.getFullYear()

* 返回值
> 当 dateObject 用本地时间表示时返回的年份。返回值是一个四位数，表示包括世纪值在内的完整年份，而不是两位数的缩写形式。

* 注释
> 该方法总是结合一个 Date 对象来使用。

```javascript
var d = new Date();
console.log(d.getFullYear()); //今年2016  输出: 2016
```


###  getHours();

* 用法: 
> getHours() 方法可返回时间的小时字段。

* 语法
> dateObject.getHours()

* 返回值
> dateObject 的小时字段，以本地时间显示。返回值是 0 （午夜） 到 23 （晚上 11 点）之间的一个整数。

* 注释
> 由 getHours() 返回的值是一个两位的数字。不过返回值不总是两位的，如果该值小于 10，则仅返回一位数字。 该方法总是结合一个 Date 对象来使用。

```javascript
var d = new Date();
console.log(d.getHours()); //现在12点   输出: 12
```

###  getMinutes();

* 用法: 
> getMinutes() 方法可返回时间的分钟字段。

* 语法
> dateObject.getMinutes()

* 返回值
> dateObject 的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。

* 注释
> 由 getMinutes() 返回的值是一个两位的数字。不过返回值不总是两位的，如果该值小于 10，则仅返回一位数字。该方法总是结合一个 Date 对象来使用。

```javascript
var d = new Date();
console.log(d.getMinutes()); //现在时间12点12分   输出: 12
```

###  anchor();

* 用法: 
> getSeconds() 方法可返回时间的秒。

* 语法
> dateObject.getSeconds()

* 返回值
> dateObject 的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。

* 注释
> 由 getSeconds() 返回的值是一个两位的数字。不过返回值不总是两位的，如果该值小于 10，则仅返回一位数字。 该方法总是结合一个 Date 对象来使用。

```javascript
var d = new Date();
console.log(d.getSeconds()); // 现在时间 12点 15分 52秒  输出: 52
```


###  getTime();

* 用法: 
> getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。

* 语法
> dateObject.getTime()

* 返回值
> dateObject 指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。

* 注释
> 该方法总是结合一个 Date 对象来使用。

```javascript
var d = new Date();
console.log(d.getTime()); // 1470025102150
```


###  getTimezoneOffset();

* 用法: 
> getTimezoneOffset() 方法可返回格林威治时间和本地时间之间的时差，以分钟为单位。

* 语法
> dateObject.getTimezoneOffset()

* 返回值
> 本地时间与 GMT 时间之间的时间差，以分钟为单位。

* 说明
> getTimezoneOffset() 方法返回的是本地时间与 GMT 时间或 UTC 时间之间相差的分钟数。实际上，该函数告诉我们运行 JavaScript 代码的时区，以及指定的时间是否是夏令时。返回之所以以分钟计，而不是以小时计，原因是某些国家所占有的时区甚至不到一个小时的间隔。

* 注释
> 由于使用夏令时的惯例，该方法的返回值不是一个常量。 该方法总是结合一个 Date 对象来使用。

```javascript
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