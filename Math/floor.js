/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: floor() 方法可对一个数进行下舍入。
 * 语法: Math.floor(x); x	必需。任意数值或表达式。
 * 返回值: 小于等于 x，且与 x 最接近的整数。
 * 说明: floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
 * 注释:
 */

console.log(Math.floor(0.60)); // 0
console.log(Math.floor(0.40)); // 0
console.log(Math.floor(5));  // 5
console.log(Math.floor(5.1));  // 5
console.log(Math.floor(-5.1)); // -6
console.log(Math.floor(-5.9)); // -6
console.log(Math.floor('121')); // 121
console.log(Math.floor('10.8')); // 10
console.log(Math.floor()); // NaN