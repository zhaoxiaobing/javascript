
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




### pop();
* 用法
> 

* 语法
> 

* 返回值
> 

* 例子

```javascript
```















