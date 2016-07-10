
###  concat();

* 用法
> concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

* 语法
> arrayObject.concat(arrayX,arrayX,......,arrayX);

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
+ join() 方法用于把数组中的所有元素放入一个字符串。
+ 元素是通过指定的分隔符进行分隔的。
+ arrayObject.join(separator); //separator, 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。


```javascript
var arr1 = ['George','John','Thomas',1,2,3];
var arr2 = ['George'];
var arr3 = [];

console.log(arr1.join()); // George,John,Thomas,1,2,3
console.log(arr2.join('.'));// George
console.log(arr1.join('~'));// George~John~Thomas~1~2~3
console.log(arr3.join('|'));//
```














