/**
 * Created by zhaoxiaobing on 16/7/28.
 */

/**
 * 定义和用法: indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
 * 语法: stringObject.indexOf(searchvalue,fromindex); searchvalue 必需。规定需检索的字符串值; fromindex	可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
 * 返回值:
 * 说明: 该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。
 * 注释: indexOf() 方法对大小写敏感！ 如果要检索的字符串值没有出现，则该方法返回 -1。
 */

var str="Hello world!";

console.log(str.indexOf()); // -1
console.log(str.indexOf('l')); //2
console.log(str.indexOf('l',3)); //3
console.log(str.indexOf('l',4)); //9
console.log(str.indexOf("Hello")); // 0
console.log(str.indexOf("World")); // -1
console.log(str.indexOf("world")); // 6