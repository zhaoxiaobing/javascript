/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getDate() 方法可返回月份的某一天。
 * 语法: dateObject.getDate()
 * 返回值: dateObject 所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。
 * 说明: 该方法总是结合一个 Date 对象来使用。
 * 注释:
 */

var d = new Date();
console.log(d.getDate()); //当天的日期。   8月1号测试 返回  1