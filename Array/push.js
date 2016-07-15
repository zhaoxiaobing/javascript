/**
 * Created by zhaoxiaobing on 16/7/15.
 */

/**
 * 定义和用法:  push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
 * 语法: arrayObject.push(newelement1,newelement2,....,newelementX);
 * 返回值: 把指定的值添加到数组后的新长度。
 * 说明: push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。
 * 注释：该方法会改变数组的长度。
 */

var arr1 = ['zhao','xiao'];

console.log(arr1.push());
console.log(arr1);
console.log(arr1.push('bing'));
console.log(arr1);
console.log(arr1.push('good','good','study'));
console.log(arr1);