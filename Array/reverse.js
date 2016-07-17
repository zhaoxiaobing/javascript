/**
 * Created by zhaoxiaobing on 16/7/15.
 */


/**
 * 定义和用法: reverse() 方法用于颠倒数组中元素的顺序。
 * 语法: arrayObject.reverse()
 * 注释: 该方法会改变原来的数组，而不会创建新的数组。
 */

var arr1 = ['zhao','xiao','bing'];
var arr2 = [123,4,36];

console.log(arr1.reverse()); // [ 'bing', 'xiao', 'zhao' ]
console.log(arr1); // [ 'bing', 'xiao', 'zhao' ]
console.log(arr2.reverse()); // [ 36, 4, 123 ]
console.log(arr2); // [ 36, 4, 123 ]
