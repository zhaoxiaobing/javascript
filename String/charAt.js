/**
 * Created by zhaoxiaobing on 16/7/27.
 */


/**
 * 定义和用法: charAt() 方法可返回指定位置的字符。
 * 语法: stringObject.charAt(index); index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
 * 返回值:
 * 说明:
 * 注释: 字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
 */


var str="Hello world!";
console.log(str.charAt(1)); // 3
console.log(str.charAt(6)); // w
console.log(str.charAt(-1)); // 空字符串。
console.log(str.charAt(29)); // 空字符串。