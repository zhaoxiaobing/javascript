/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: max() 方法可返回两个指定的数中带有较大的值的那个数。
 * 语法: Math.max(x...); x	0 或多个值。在 ECMASCript v3 之前，该方法只有两个参数。
 * 返回值: 参数中最大的值。如果没有参数，则返回 -Infinity。如果有某个参数为 NaN，或是不能转换成数字的非数字值，则返回 NaN。
 * 说明:
 * 注释:
 */

console.log(Math.max(5,7)); // 7
console.log(Math.max(-3,5)); // 5
console.log(Math.max(-3,-5));  // -3
console.log(Math.max(7.25,7.30)); // 7.3
console.log(Math.max()); // -Infinity
console.log(Math.max('3',2)); // 3
console.log(Math.max('abc',2)); // NaN
