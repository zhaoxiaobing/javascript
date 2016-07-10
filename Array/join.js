/**
 * Created by zhaoxiaobing on 16/7/10.
 */

/**
 * join() 方法用于把数组中的所有元素放入一个字符串。
 * 元素是通过指定的分隔符进行分隔的。
 * arrayObject.join(separator); //separator, 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
 */

var arr1 = ['George','John','Thomas',1,2,3];
var arr2 = ['George'];
var arr3 = [];

console.log(arr1.join()); // George,John,Thomas,1,2,3
console.log(arr2.join('.'));// George
console.log(arr1.join('~'));// George~John~Thomas~1~2~3
console.log(arr3.join('|'));//





