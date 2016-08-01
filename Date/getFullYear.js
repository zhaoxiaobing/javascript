/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getFullYear() 方法可返回一个表示年份的 4 位数字。
 * 语法: dateObject.getFullYear()
 * 返回值: 当 dateObject 用本地时间表示时返回的年份。返回值是一个四位数，表示包括世纪值在内的完整年份，而不是两位数的缩写形式。
 * 说明:
 * 注释: 该方法总是结合一个 Date 对象来使用。
 */

var d = new Date();
console.log(d.getFullYear()); //今年2016  输出: 2016