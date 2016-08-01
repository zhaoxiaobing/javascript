

### JavaScript Math 对象
---

#### Math 对象
>Math 对象用于执行数学任务。

#### 使用 Math 的属性和方法的语法：
```javascript
var pi_value=Math.PI;
var sqrt_value=Math.sqrt(15);
```
> 注释：Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()，像 Math.sin() 这样的函数只是函数，不是某个对象的方法。您无需创建它，通过把 Math 作为对象使用就可以调用其所有属性和方法。


---


#### Math 对象属性

<table class="dataintable">
  <tr>
    <th style="width:25%">属性</th>
    <th>描述</th>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_e.asp">E</a></td>
    <td>返回算术常量 e，即自然对数的底数（约等于2.718）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_ln2.asp">LN2</a></td>
    <td>返回 2 的自然对数（约等于0.693）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_ln10.asp">LN10</a></td>
    <td>返回 10 的自然对数（约等于2.302）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_log2e.asp">LOG2E</a></td>
    <td>返回以 2 为底的 e 的对数（约等于 1.414）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_log10e.asp">LOG10E</a></td>
    <td>返回以 10 为底的 e 的对数（约等于0.434）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_pi.asp">PI</a></td>
    <td>返回圆周率（约等于3.14159）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp">SQRT1_2</a></td>
    <td>返回返回 2 的平方根的倒数（约等于 0.707）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_sqrt2.asp">SQRT2</a></td>
    <td>返回 2 的平方根（约等于 1.414）。</td>
  </tr>
</table>

---

#### Math 对象方法


<table class="dataintable">
  <tr>
    <th style="width:25%">方法</th>
    <th>描述</th>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_abs.asp">abs(x)</a></td>
    <td>返回数的绝对值。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_acos.asp">acos(x)</a></td>
    <td>返回数的反余弦值。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_asin.asp">asin(x)</a></td>
    <td>返回数的反正弦值。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_atan.asp">atan(x)</a></td>
    <td>以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_atan2.asp">atan2(y,x)</a></td>
    <td>返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_ceil.asp">ceil(x)</a></td>
    <td>对数进行上舍入。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_cos.asp">cos(x)</a></td>
    <td>返回数的余弦。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_exp.asp">exp(x)</a></td>
    <td>返回 e 的指数。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_floor.asp">floor(x)</a></td>
    <td>对数进行下舍入。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_log.asp">log(x)</a></td>
    <td>返回数的自然对数（底为e）。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_max.asp">max(x,y)</a></td>
    <td>返回 x 和 y 中的最高值。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_min.asp">min(x,y)</a></td>
    <td>返回 x 和 y 中的最低值。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_pow.asp">pow(x,y)</a></td>
    <td>返回 x 的 y 次幂。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_random.asp">random()</a></td>
    <td>返回 0 ~ 1 之间的随机数。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_round.asp">round(x)</a></td>
    <td>把数四舍五入为最接近的整数。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_sin.asp">sin(x)</a></td>
    <td>返回数的正弦。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_sqrt.asp">sqrt(x)</a></td>
    <td>返回数的平方根。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_tan.asp">tan(x)</a></td>
    <td>返回角的正切。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_tosource_math.asp">toSource()</a></td>
    <td>返回该对象的源代码。</td>
  </tr>

  <tr>
    <td><a href="http://www.w3school.com.cn/jsref/jsref_valueof_math.asp">valueOf()</a></td>
    <td>返回 Math 对象的原始值。</td>
  </tr>
</table>

---


