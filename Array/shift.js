/**
 * Created by zhaoxiaobing on 16/7/15.
 */


/**
 * 用法: 用于把数组的第一个元素从其中删除，并返回第一个元素的值。
 * 语法: arrayObject.shift();
 * 返回值: arrayObject 的第一个元素的值。
 * 说明: 如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。
 */

var arr0 = [];
var arr1 = ['zhao','xiao','bing'];


console.log(arr0.shift());// undefined
console.log(arr0);// []
console.log(arr1.shift());// zhao
console.log(arr1);// ['xiao','bing']