/**
 * Created by zhaoxiaobing on 16/7/27.
 */


/**
 * 定义和用法: charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数
 * 语法: stringObject.charCodeAt(index); // index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
 * 返回值:
 * 说明: 方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。
 * 注释: 字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN。
 */


var str="Hello world!";
console.log(str.charCodeAt(1)); // 101
console.log(str.charCodeAt(6)); // 110
console.log(str.charCodeAt(-1)); // NaN
console.log(str.charCodeAt(29)); // NaN