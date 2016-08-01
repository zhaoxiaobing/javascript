/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getSeconds() 方法可返回时间的秒。
 * 语法: dateObject.getSeconds()
 * 返回值: dateObject 的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。
 * 说明:
 * 注释: 由 getSeconds() 返回的值是一个两位的数字。不过返回值不总是两位的，如果该值小于 10，则仅返回一位数字。 该方法总是结合一个 Date 对象来使用。
 */

var d = new Date();
console.log(d.getSeconds()); // 现在时间 12点 15分 52秒  输出: 52