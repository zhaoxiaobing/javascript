/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: min() 方法可返回指定的数字中带有最低值的数字。
 * 语法: Math.min(x,y); x	0 或多个值。在 ECMASCript v3 之前，该方法只有两个参数。
 * 返回值: 参数中最小的值。如果没有参数，则返回 Infinity。如果有某个参数为 NaN，或是不能转换成数字的非数字值，则返回 NaN。
 * 说明:
 * 注释:
 */

console.log(Math.min(5,7));
console.log(Math.min(-3,5));
console.log(Math.min(-3,-5));
console.log(Math.min(7.25,7.30));
console.log(Math.min()); // Infinity
console.log(Math.min('3',2)); // 2
console.log(Math.min('abc',2)); // NaN