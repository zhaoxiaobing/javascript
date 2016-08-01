/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: ceil() 方法可对一个数进行上舍入。
 * 语法: Math.ceil(x); x	必需。必须是一个数值。
 * 返回值: 大于等于 x，并且与它最接近的整数。
 * 说明: ceil() 方法执行的是向上取整计算，它返回的是大于或等于函数参数，并且与之最接近的整数。
 * 注释:
 */


console.log(Math.ceil(0.60)); // 1
console.log(Math.ceil(0.40)); // 1
console.log(Math.ceil(5));  // 5
console.log(Math.ceil(5.1));  // 6
console.log(Math.ceil(-5.1)); // -5
console.log(Math.ceil(-5.9)); // -5
console.log(Math.ceil('121')); // 121
console.log(Math.ceil('10.8')); // 11
console.log(Math.ceil()); // NaN