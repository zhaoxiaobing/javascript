/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getMonth() 方法可返回表示月份的数字。
 * 语法: dateObject.getMonth()
 * 返回值: dateObject 的月份字段，使用本地时间。返回值是 0（一月） 到 11（十二月） 之间的一个整数。
 * 说明:
 * 注释: 该方法总是结合一个 Date 对象来使用。
 */

var d=new Date();
console.log(d.getMonth()); // 今天八月1号  所以输出 7