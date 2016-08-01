

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
    <td><a href="http://www.w3school.com.cn/jsref/jsref_Date.asp">Date()</a></td>
    <td>返回当日的日期和时间。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getDate.asp">getDate()</a></td>
    <td>从 Date 对象返回一个月中的某一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getDay.asp">getDay()</a></td>
    <td>从 Date 对象返回一周中的某一天 (0 ~ 6)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getMonth.asp">getMonth()</a></td>
    <td>从 Date 对象返回月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getFullYear.asp">getFullYear()</a></td>
    <td>从 Date 对象以四位数字返回年份。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getYear.asp">getYear()</a></td>
    <td><span class="deprecated">请使用 getFullYear() 方法代替。</span></td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getHours.asp">getHours()</a></td>
    <td>返回 Date 对象的小时 (0 ~ 23)。</td>
  </tr>
  
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getMinutes.asp">getMinutes()</a></td>
    <td>返回 Date 对象的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getSeconds.asp">getSeconds()</a></td>
    <td>返回 Date 对象的秒数 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getMilliseconds.asp">getMilliseconds()</a></td>
    <td>返回 Date 对象的毫秒(0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getTime.asp">getTime()</a></td>
    <td>返回 1970 年 1 月 1 日至今的毫秒数。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getTimezoneOffset.asp">getTimezoneOffset()</a></td>
    <td>返回本地时间与格林威治标准时间 (GMT) 的分钟差。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCDate.asp">getUTCDate()</a></td>
    <td>根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCDay.asp">getUTCDay()</a></td>
    <td>根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCMonth.asp">getUTCMonth()</a></td>
    <td>根据世界时从 Date 对象返回月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCFullYear.asp">getUTCFullYear()</a></td>
    <td>根据世界时从 Date 对象返回四位数的年份。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCHours.asp">getUTCHours()</a></td>
    <td>根据世界时返回 Date 对象的小时 (0 ~ 23)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCMinutes.asp">getUTCMinutes()</a></td>
    <td>根据世界时返回 Date 对象的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCSeconds.asp">getUTCSeconds()</a></td>
    <td>根据世界时返回 Date 对象的秒钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_getUTCMilliseconds.asp">getUTCMilliseconds()</a></td>
    <td>根据世界时返回 Date 对象的毫秒(0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_parse.asp">parse()</a></td>
    <td>返回1970年1月1日午夜到指定日期（字符串）的毫秒数。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setDate.asp">setDate()</a></td>
    <td>设置 Date 对象中月的某一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setMonth.asp">setMonth()</a></td>
    <td>设置 Date 对象中月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setFullYear.asp">setFullYear()</a></td>
    <td>设置 Date 对象中的年份（四位数字）。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setYear.asp">setYear()</a></td>
    <td><span class="deprecated">请使用 setFullYear() 方法代替。</span></td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setHours.asp">setHours()</a></td>
    <td>设置 Date 对象中的小时 (0 ~ 23)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setMinutes.asp">setMinutes()</a></td>
    <td>设置 Date 对象中的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setSeconds.asp">setSeconds()</a></td>
    <td>设置 Date 对象中的秒钟 (0 ~ 59)。</td>
  </tr>
  
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setMilliseconds.asp">setMilliseconds()</a></td>
    <td>设置 Date 对象中的毫秒 (0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setTime.asp">setTime()</a></td>
    <td>以毫秒设置 Date 对象。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setUTCDate.asp">setUTCDate()</a></td>
    <td>根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setUTCMonth.asp">setUTCMonth()</a></td>
    <td>根据世界时设置 Date 对象中的月份 (0 ~ 11)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setUTCFullYear.asp">setUTCFullYear()</a></td>
    <td>根据世界时设置 Date 对象中的年份（四位数字）。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setutchours.asp">setUTCHours()</a></td>
    <td>根据世界时设置 Date 对象中的小时 (0 ~ 23)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setUTCMinutes.asp">setUTCMinutes()</a></td>
    <td>根据世界时设置 Date 对象中的分钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setUTCSeconds.asp">setUTCSeconds()</a></td>
    <td>根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_setUTCMilliseconds.asp">setUTCMilliseconds()</a></td>
    <td>根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_tosource_boolean.asp">toSource()</a></td>
    <td>返回该对象的源代码。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toString_date.asp">toString()</a></td>
    <td>把 Date 对象转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toTimeString.asp">toTimeString()</a></td>
    <td>把 Date 对象的时间部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toDateString.asp">toDateString()</a></td>
    <td>把 Date 对象的日期部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toGMTString.asp">toGMTString()</a></td>
    <td><span class="deprecated">请使用 toUTCString() 方法代替。</span></td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toUTCString.asp">toUTCString()</a></td>
    <td>根据世界时，把 Date 对象转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toLocaleString.asp">toLocaleString()</a></td>
    <td>根据本地时间格式，把 Date 对象转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toLocaleTimeString.asp">toLocaleTimeString()</a></td>
    <td>根据本地时间格式，把 Date 对象的时间部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_toLocaleDateString.asp">toLocaleDateString()</a></td>
    <td>根据本地时间格式，把 Date 对象的日期部分转换为字符串。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_utc.asp">UTC()</a></td>
    <td>根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。</td>
  </tr>
  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_valueOf_date.asp">valueOf()</a></td>
    <td>返回 Date 对象的原始值。</td>
  </tr>
</table>