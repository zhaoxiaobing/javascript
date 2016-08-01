/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: getTimezoneOffset() 方法可返回格林威治时间和本地时间之间的时差，以分钟为单位。
 * 语法: dateObject.getTimezoneOffset()
 * 返回值: 本地时间与 GMT 时间之间的时间差，以分钟为单位。
 * 说明: getTimezoneOffset() 方法返回的是本地时间与 GMT 时间或 UTC 时间之间相差的分钟数。实际上，该函数告诉我们运行 JavaScript 代码的时区，以及指定的时间是否是夏令时。返回之所以以分钟计，而不是以小时计，原因是某些国家所占有的时区甚至不到一个小时的间隔。
 * 注释: 由于使用夏令时的惯例，该方法的返回值不是一个常量。 该方法总是结合一个 Date 对象来使用。
 */

var d = new Date();
console.log(d.getTimezoneOffset()); // -480