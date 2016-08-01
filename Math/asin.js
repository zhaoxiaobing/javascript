/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: asin() 方法可返回一个数的反正弦值。
 * 语法: Math.asin(x); x	必需。必须是一个数值，该值介于 -1.0 ~ 1.0 之间。
 * 返回值: x 的反正弦值。返回的值是 -PI/2 到 PI/2 之间的弧度值。
 * 说明:
 * 注释: 如果参数 x 超过了 -1.0 ~ 1.0 的范围，那么浏览器将返回 NaN。 如果参数 x 取值 1，那么将返回 PI/2。
 */

console.log(Math.asin(-1)); // -PI/2
console.log(Math.asin(1)); // PI/2
console.log(Math.asin(0)); // 0
console.log(Math.asin(-0.6)); // -0.6435011087932844
console.log(Math.asin(0.6)); // 0.6435011087932844
console.log(Math.asin(-1.1)); // NaN
console.log(Math.asin(1.1)); // NaN
console.log(Math.asin('asda')); // NaN

