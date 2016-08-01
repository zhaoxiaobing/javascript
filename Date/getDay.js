/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getDay() 方法可返回表示星期的某一天的数字。
 * 语法: dateObject.getDay()
 * 返回值: dateObject 所指的星期中的某一天，使用本地时间。返回值是 0（周日） 到 6（周六） 之间的一个整数。
 * 说明:
 * 注释: 该方法总是结合一个 Date 对象来使用。
 */

var d=new Date();
console.log(d.getDay()); //今天8月1号星期一  所以输出 1