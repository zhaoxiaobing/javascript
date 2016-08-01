/**
 * Created by zhaoxiaobing on 16/7/31.
 */

/**
 * 定义和用法: slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
 * 语法: stringObject.slice(start,end); start	要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。end	紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。
 * 返回值: 一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
 * 说明: String 对象的方法 slice()、substring() 和 substr() （不建议使用）都可返回字符串的指定部分。slice() 比 substring() 要灵活一些，因为它允许使用负数作为参数。slice() 与 substr() 有所不同，因为它用两个字符的位置来指定子串，而 substr() 则用字符位置和长度来指定子串。还要注意的是，String.slice() 与 Array.slice() 相似。
 * 注释:
 */


var str="Hello happy world!";
console.log(str.slice()); // Hello happy world!
console.log(str.slice(36)); // 空
console.log(str.slice(6)); // happy world!
console.log(str.slice(2,4)); // ll
console.log(str.slice(-1,4)); // 空
console.log(str); // Hello happy world!