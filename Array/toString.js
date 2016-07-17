/**
 * Created by zhaoxiaobing on 16/7/17.
 */

/**
 * 定义和用法: toString() 方法可把数组转换为字符串，并返回结果。不改变原来的数组
 * 语法: arrayObject.toString()
 * 返回值: arrayObject 的字符串表示。返回值与没有参数的 join() 方法返回的字符串相同。
 * 说明: 当数组用于字符串环境时，JavaScript 会调用这一方法将数组自动转换成字符串。但是在某些情况下，需要显式地调用该方法。
 * 注释: 数组中的元素之间用逗号分隔。
 */

var arr1 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.toString()); // zhao,xiao,bing,first,second,third
console.log(arr1);  // 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]