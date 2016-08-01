/**
 * Created by zhaoxiaobing on 16/7/27.
 */

/**
 * 定义和用法: concat() 方法用于连接两个或多个字符串。
 * 语法: stringObject.concat(stringX,stringX,...,stringX); stringX 必需。将被连接为一个字符串的一个或多个字符串对象。
 * 返回值:
 * 说明: concat() 方法将把它的所有参数转换成字符串，然后按顺序连接到字符串 stringObject 的尾部，并返回连接后的字符串。请注意，stringObject 本身并没有被更改。
 * 注释: 请注意，使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。
 */

var str1 = "Hello ";
var str2 = "world!";
console.log(str1.concat(str2)); // Hello world!
console.log(str1.concat(str2,' 123445')); // Hello world! 123445
console.log(str1); // Hello
console.log(str2); // world!