
###  concat();

* 用法
> concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

* 语法
> arrayObject.concat(arrayX,arrayX,......,arrayX);

* 例子

```javascript
var a = [1,2,3];
var b = ['zhao'];
var c = ['xiao','bing'];

console.log(a + b); //1,2,3zhao
console.log(a.concat(b)); //[ 1, 2, 3, 'zhao' ]
console.log(a.concat(b,c[0])); //[ 1, 2, 3, 'zhao', 'xiao' ]
console.log(a.concat(b,c)); //[ 1, 2, 3, 'zhao', 'xiao', 'bing' ]
```

### join();

* 用法 
> join() 方法用于把数组中的所有元素放入一个字符串。
> 元素是通过指定的分隔符进行分隔的。

* 语法
> arrayObject.join(separator); //separator, 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。

* 例子

```javascript
var arr1 = ['George','John','Thomas',1,2,3];
var arr2 = ['George'];
var arr3 = [];

console.log(arr1.join()); // George,John,Thomas,1,2,3
console.log(arr2.join('.'));// George
console.log(arr1.join('~'));// George~John~Thomas~1~2~3
console.log(arr3.join('|'));//
```


### pop();
* 用法
> 用于删除并返回数组的最后一个元素。

* 语法
> arrayObject.pop();

* 返回值
> arrayObject 的最后一个元素

* 说明
> 如果数组是空的，那么 pop() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。

* 例子

```javascript
var arr0 = [];
var arr1 = ['zhao','xiao','bing'];

console.log(arr0.pop());// undefined
console.log(arr0);// []
console.log(arr1.pop());// bing
console.log(arr1);// ['zhao','xiao']
```


### shift();
* 用法
> 用于把数组的第一个元素从其中删除，并返回第一个元素的值。

* 语法
> arrayObject.shift();

* 返回值
> arrayObject 的第一个元素的值。

* 说明
> 如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。

* 例子

```javascript
var arr0 = [];
var arr1 = ['zhao','xiao','bing'];

console.log(arr0.shift());// undefined
console.log(arr0);// []
console.log(arr1.shift());// zhao
console.log(arr1);// ['xiao','bing']
```


### push();
* 用法
> push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

* 语法
> arrayObject.push(newelement1,newelement2,....,newelementX);

* 返回值
> 把指定的值添加到数组后的新长度。

* 例子

```javascript
var arr1 = ['zhao','xiao'];

console.log(arr1.push());//2
console.log(arr1);//['zhao','xiao']
console.log(arr1.push('bing'));//3
console.log(arr1);//['zhao','xiao','bing']
console.log(arr1.push('good','good','study'));//6
console.log(arr1);//['zhao','xiao','bing','good','good','study']
```


### unshift();
* 用法
> unshift() 向数组的开头添加一个或更多元素，并返回新的长度。

* 语法
> arrayObject.unshift(newelement1,newelement2,....,newelementX);

* 返回值
> 把指定的值添加到数组后的新长度。

* 说明: 
> unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

* 注释：
> unshift() 方法不创建新的创建，而是直接修改原有的数组。

* 例子

```javascript
var arr1 = ['xiao','bing'];

console.log(arr1.unshift()); // 2
console.log(arr1); // [ 'xiao', 'bing' ]
console.log(arr1.unshift('zhao')); // 3
console.log(arr1); // [ 'zhao', 'xiao', 'bing' ]
console.log(arr1.unshift('good','good','study')); // 6
console.log(arr1); // [ 'good', 'good', 'study', 'zhao', 'xiao', 'bing' ]
```


### reverse();
* 用法
> reverse() 方法用于颠倒数组中元素的顺序。

* 语法
> arrayObject.reverse()

* 注释
> 该方法会改变原来的数组，而不会创建新的数组。

* 返回值
> 颠倒后的数组

* 例子

```javascript
console.log(arr1.reverse()); // [ 'bing', 'xiao', 'zhao' ]
console.log(arr1); // [ 'bing', 'xiao', 'zhao' ]
console.log(arr2.reverse()); // [ 36, 4, 123 ]
console.log(arr2); // [ 36, 4, 123 ]
```


### slice();
* 用法
> slice() 方法可从已有的数组中返回选定的元素,不会改变原来的数组。

* 语法
> arrayObject.slice(start,end); start 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

* 返回值
> 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

* 说明
> 请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。

* 注释
> 您可使用负值从数组的尾部选取元素。如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

* 例子

```javascript
var arr1 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.slice(2,4)); //  <=2 && < 3 [ 'bing', 'first' ]
console.log(arr1.slice(2)); //  >=2 [ 'bing', 'first', 'second', 'third' ]
console.log(arr1.slice(-2)); // 最后两个 [ 'second', 'third' ]
console.log(arr1.slice(-2,-1)); // >=-2 && < -1  [ 'second' ]
console.log(arr1);  // [ 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]
```

### splice();
* 用法
> splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

* 语法
> arrayObject.splice(index,howmany,item1,.....,itemX);  index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。 howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。 item1, ..., itemX	可选。向数组添加的新项目。

* 返回值
> Array	包含被删除项目的新数组，如果有的话。

* 例子

```javascript
var arr1 = ['zhao','xiao','bing','first','second','third'];
var arr2 = ['zhao','xiao','bing','first','second','third'];
var arr3 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.splice(0,3)); // >=0 && <3 [ 'zhao', 'xiao', 'bing' ]
console.log(arr1); // [ 'first', 'second', 'third' ]

console.log(arr2.splice(0,3,'myself','me')); // [ 'zhao', 'xiao', 'bing' ]
console.log(arr2); // [ 'myself', 'me', 'first', 'second', 'third' ]

console.log(arr3.splice(0,0,'myself','me')); // []
console.log(arr3); // [ 'myself', 'me', 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]
```


### toString();
* 用法
> toString() 方法可把数组转换为字符串，并返回结果。不改变原来的数组

* 语法
> arrayObject.toString()

* 返回值
> arrayObject 的字符串表示。返回值与没有参数的 join() 方法返回的字符串相同。

* 说明
> 当数组用于字符串环境时，JavaScript 会调用这一方法将数组自动转换成字符串。但是在某些情况下，需要显式地调用该方法。

* 注释
> 数组中的元素之间用逗号分隔。

* 例子

```javascript
var arr1 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.toString()); // zhao,xiao,bing,first,second,third
console.log(arr1);  // 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]
```


### valueOf(); 不懂什么用
* 用法
> valueOf() 方法返回 Array 对象的原始值。该原始值由 Array 对象派生的所有对象继承。

* 语法
> arrayObject.valueOf()

* 说明
> valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

* 例子

```javascript
var arr1 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.valueOf()); // [ 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]
```


### toLocaleString(); 不懂什么用
* 用法
> 把数组转换为本地字符串。

* 语法
> arrayObject.toLocaleString()

* 返回值
> arrayObject 的本地字符串表示。

* 说明
> 首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。

* 例子

```javascript
var arr = new Array(3);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";

console.log(arr); // [ 'George', 'John', 'Thomas' ]
console.log(arr.toLocaleString()); //George,John,Thomas
```


### sort();
* 用法
> 用于对数组的元素进行排序。

* 语法
> arrayObject.sort(sortby);  sortby	可选。规定排序顺序。必须是函数。

* 返回值
> 对数组的引用。请注意，数组在原数组上进行排序，不生成副本。

* 说明
> 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
  如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
  若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
  若 a 等于 b，则返回 0。
  若 a 大于 b，则返回一个大于 0 的值。

* 例子

```javascript
var arr1 = ['zhao','zz','xiao','bing','first','second','third','!','~']; //
var arr2 = [8,54,123];
var arr3 = [22,321,4321,1,2,2,43,111,3232,14,5,32,31,54,65,8,98];

console.log(arr1.sort()); // [ '!', 'bing', 'first', 'second', 'third', 'xiao', 'zhao', '~' ]
console.log(arr2.sort()); // [ 123, 54, 8 ] 按照第一个数字的大小

console.log(arr3.sort(function (a,b) { return a-b; })); // 从小到大 [ 1, 2, 5, 8, 14, 22, 31, 32, 43, 54, 65, 76, 98, 111, 321, 3232, 4321 ]

console.log(arr3.sort(function (a,b) { return b-a; })); // 从大到小 [ 4321, 3232, 321, 111, 98, 76, 65, 54, 43, 32, 31, 22, 14, 8, 5, 2, 1 ]
```















