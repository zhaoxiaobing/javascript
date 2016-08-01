/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getTime() 方法可返回距 1970 年 1 月 1 日之间的毫秒数。
 * 语法: dateObject.getTime()
 * 返回值: dateObject 指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。
 * 说明:
 * 注释: 该方法总是结合一个 Date 对象来使用。
 */

var d = new Date();
console.log(d.getTime()); // 1470025102150