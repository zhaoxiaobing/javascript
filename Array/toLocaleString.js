/**
 * Created by zhaoxiaobing on 16/7/17.
 */


/**
 * 定义和用法: 把数组转换为本地字符串。
 * 语法: arrayObject.toLocaleString()
 * 返回值: arrayObject 的本地字符串表示。
 * 说明: 首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。
 * 注释:
 */

var arr = new Array(3);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";

console.log(arr); // [ 'George', 'John', 'Thomas' ]
console.log(arr.toLocaleString()); //George,John,Thomas