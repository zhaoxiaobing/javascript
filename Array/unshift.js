/**
 * Created by zhaoxiaobing on 16/7/15.
 */

/**
 * 定义和用法:  unshift() 向数组的开头添加一个或更多元素，并返回新的长度。
 * 语法: arrayObject.unshift(newelement1,newelement2,....,newelementX);
 * 返回值: 把指定的值添加到数组后的新长度。
 * 说明: unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。
 * 注释：unshift() 方法不创建新的创建，而是直接修改原有的数组。
 */

var arr1 = ['xiao','bing'];

console.log(arr1.unshift()); // 2
console.log(arr1); // [ 'xiao', 'bing' ]
console.log(arr1.unshift('zhao')); // 3
console.log(arr1); // [ 'zhao', 'xiao', 'bing' ]
console.log(arr1.unshift('good','good','study')); // 6
console.log(arr1); // [ 'good', 'good', 'study', 'zhao', 'xiao', 'bing' ]