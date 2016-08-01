

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


####  abs();

* 用法: 
> abs() 方法可返回数的绝对值。

* 语法
> Math.abs(x); x	必需。必须是一个数值。

* 返回值
> x 的绝对值。

```javascript
console.log(Math.abs(7.25)); // 7.25
console.log(Math.abs(-7.25)); // 7.25
console.log(Math.abs(7.25-10)); // 2.75
console.log(Math.abs(0)); //0
console.log(Math.abs("-6")); // 6
console.log(Math.abs(-10000)); // 10000
console.log(Math.abs('dasd')); // NaN
console.log(Math.abs('大山的')); // NaN
```

####  acos();

* 用法: 
> acos() 方法可返回一个数的反余弦。

* 语法
> Math.acos(x); x	必需。必须是 -1.0 ~ 1.0 之间的数。

* 注释
> 如果参数 x 超过了 -1.0 ~ 1.0 的范围，那么浏览器将返回 NaN。 如果参数 x 取值 -1，那么将返回 PI。

```javascript
console.log(Math.acos(0.64)); // 0.8762980611683406
console.log(Math.acos(-0.64)); // 2.2652945924214527
console.log(Math.acos(0.5)); // 1.0471975511965976
console.log(Math.acos(-0.5)); // 2.0943951023931957
console.log(Math.acos(-1)); // 3.141592653589793
console.log(Math.acos(1)); // 0
console.log(Math.acos(1.1)); // NaN
console.log(Math.acos(-1.1)); // NaN
console.log(Math.acos(0)); // 1.5707963267948966
```

####  asin();

* 用法: 
> asin() 方法可返回一个数的反正弦值。

* 语法
> Math.asin(x); x	必需。必须是一个数值，该值介于 -1.0 ~ 1.0 之间。

* 返回值
> x 的反正弦值。返回的值是 -PI/2 到 PI/2 之间的弧度值。

* 注释
> 如果参数 x 超过了 -1.0 ~ 1.0 的范围，那么浏览器将返回 NaN。 如果参数 x 取值 1，那么将返回 PI/2。

```javascript
console.log(Math.asin(-1)); // -PI/2
console.log(Math.asin(1)); // PI/2
console.log(Math.asin(0)); // 0
console.log(Math.asin(-0.6)); // -0.6435011087932844
console.log(Math.asin(0.6)); // 0.6435011087932844
console.log(Math.asin(-1.1)); // NaN
console.log(Math.asin(1.1)); // NaN
console.log(Math.asin('asda')); // NaN
```

####  atan();

* 用法: 
> atan() 方法可返回数字的反正切值。

* 语法
> Math.atan(x); x	必需。必须是一个数值。

* 返回值
> x 的反正切值。返回的值是 -PI/2 到 PI/2 之间的弧度值。

* 注释
> 

```javascript
console.log(Math.atan(0)); // 0
console.log(Math.atan(-1)); // -0.7853981633974483
console.log(Math.atan(1)); // 0.7853981633974483
console.log(Math.atan(-0.5)); // -0.46364760900080615
console.log(Math.atan(0.5)); // 0.46364760900080615
console.log(Math.atan(-2)); // -1.1071487177940906
console.log(Math.atan(2)); // 1.1071487177940906
console.log(Math.atan(-10)); // -1.4711276743037345
console.log(Math.atan(10)); // 1.4711276743037345
console.log(Math.atan(-180)); // -1.565240828394204
console.log(Math.atan(180)); // 1.565240828394204
console.log(Math.atan(-360)); // -1.568018556161576
console.log(Math.atan(360)); // 1.568018556161576
console.log(Math.atan('dasds')); // NaN
```


####  atan2();

* 用法: 
> atan2() 方法可返回从 x 轴到点 (x,y) 之间的角度。

* 语法
> Math.atan2(y,x); x	必需。指定点的 X 坐标。 y	必需。指定点的 Y 坐标。

* 返回值
> -PI 到 PI 之间的值，是从 X 轴正向逆时针旋转到点 (x,y) 时经过的角度。

* 注释
> 请注意这个函数的参数顺序，Y 坐标在 X 坐标之前传递。

```javascript
console.log(Math.atan2(1,2)); // 0.4636476090008061
console.log(Math.atan2(2,1)); // 1.1071487177940904
console.log(Math.atan2(0.50,0.50)); // 0.7853981633974483
console.log(Math.atan2(-0.50,-0.50)); // -2.356194490192345
console.log(Math.atan2(5,5)); // 0.7853981633974483
console.log(Math.atan2(10,20)); // 0.4636476090008061
console.log(Math.atan2(-5,-5)); // -2.356194490192345
console.log(Math.atan2(-10,10)); // -0.7853981633974483
```


####  ceil();

* 用法: 
> ceil() 方法可对一个数进行上舍入。

* 语法
> Math.ceil(x); x	必需。必须是一个数值。

* 说明
> ceil() 方法执行的是向上取整计算，它返回的是大于或等于函数参数，并且与之最接近的整数。

* 返回值
> 大于等于 x，并且与它最接近的整数。

```javascript
console.log(Math.ceil(0.60)); // 1
console.log(Math.ceil(0.40)); // 1
console.log(Math.ceil(5));  // 5
console.log(Math.ceil(5.1));  // 6
console.log(Math.ceil(-5.1)); // -5
console.log(Math.ceil(-5.9)); // -5
console.log(Math.ceil('121')); // 121
console.log(Math.ceil('10.8')); // 11
console.log(Math.ceil()); // NaN
```


####  floor();

* 用法: 
> floor() 方法可对一个数进行下舍入。

* 语法
> Math.floor(x); x	必需。任意数值或表达式。

* 说明
> floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。

* 返回值
> 小于等于 x，且与 x 最接近的整数。

```javascript
console.log(Math.floor(0.60)); // 0
console.log(Math.floor(0.40)); // 0
console.log(Math.floor(5));  // 5
console.log(Math.floor(5.1));  // 5
console.log(Math.floor(-5.1)); // -6
console.log(Math.floor(-5.9)); // -6
console.log(Math.floor('121')); // 121
console.log(Math.floor('10.8')); // 10
console.log(Math.floor()); // NaN
```


####  cos();

* 用法: 
> cos() 方法可返回一个数字的余弦值。

* 语法
> Math.cos(x); x	必需。必须是一个数值。

* 返回值
> x 的余弦值。返回的是 -1.0 到 1.0 之间的数。


```javascript
console.log(Math.cos(3)); // -0.9899924966004454
console.log(Math.cos(-3)); // -0.9899924966004454
console.log(Math.cos(0)); // 1
console.log(Math.cos(Math.PI)); // -1
console.log(Math.cos(3*Math.PI)); // -1
console.log(Math.cos(2*Math.PI)); // 1
```


####  sin();

* 用法: 
> sin() 方法可返回一个数字的正弦。

* 语法
> Math.sin(x); x	必需。一个以弧度表示的角。将角度乘以 0.017453293 （2PI/360）即可转换为弧度。``

* 返回值
> 参数 x 的正弦值。返回值在 -1.0 到 1.0 之间。


```javascript
console.log(Math.sin(3)); // 0.1411200080598672
console.log(Math.sin(-3)); // -0.1411200080598672
console.log(Math.sin(0)); // 0
console.log(Math.sin(Math.PI)); // 1.2246467991473532e-16
console.log(Math.sin(Math.PI/2)); // 1
```

####  exp();

* 用法: 
>  exp() 方法可返回 e 的 x 次幂的值。

* 语法
> Math.exp(x); x	必需。任意数值或表达式。被用作指数。

* 返回值
> 返回 e 的 x 次幂。e 代表自然对数的底数，其值近似为 2.71828。

```javascript
console.log(Math.exp(1)); // 2.718281828459045
console.log(Math.exp(-1)); // 0.3678794411714424
console.log(Math.exp(5)); // 148.41315910257657
console.log(Math.exp(10)); // 22026.46579480671
```

####  log();

* 用法: 
> log() 方法可返回一个数的自然对数。

* 语法
> Math.log(x); x	必需。任意数值或表达式。

* 说明
> 参数 x 必须大于 0。

* 返回值
> x 的自然对数。

```javascript
console.log(Math.log(2.7183)); // 1.0000066849139877
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(1)); // 0
console.log(Math.log(0)); // -Infinity
console.log(Math.log(-1)); // NaN
```


####  max();

* 用法: 
> max() 方法可返回两个指定的数中带有较大的值的那个数。

* 语法
> Math.max(x...); x	0 或多个值。在 ECMASCript v3 之前，该方法只有两个参数。

* 返回值
> 参数中最大的值。如果没有参数，则返回 -Infinity。如果有某个参数为 NaN，或是不能转换成数字的非数字值，则返回 NaN。


```javascript
console.log(Math.max(5,7)); // 7
console.log(Math.max(-3,5)); // 5
console.log(Math.max(-3,-5));  // -3
console.log(Math.max(7.25,7.30)); // 7.3
console.log(Math.max()); // -Infinity
console.log(Math.max('3',2)); // 3
console.log(Math.max('abc',2)); // NaN
```


####  min();

* 用法: 
> min() 方法可返回指定的数字中带有最低值的数字。

* 语法
> Math.min(x,y); x	0 或多个值。在 ECMASCript v3 之前，该方法只有两个参数。

* 返回值
> 参数中最小的值。如果没有参数，则返回 Infinity。如果有某个参数为 NaN，或是不能转换成数字的非数字值，则返回 NaN。


```javascript
console.log(Math.min(5,7));
console.log(Math.min(-3,5));
console.log(Math.min(-3,-5));
console.log(Math.min(7.25,7.30));
console.log(Math.min()); // Infinity
console.log(Math.min('3',2)); // 2
console.log(Math.min('abc',2)); // NaN
```


####  anchor();

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