/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: acos() 方法可返回一个数的反余弦。
 * 语法: Math.acos(x); x	必需。必须是 -1.0 ~ 1.0 之间的数。
 * 返回值:
 * 说明:
 * 注释: 如果参数 x 超过了 -1.0 ~ 1.0 的范围，那么浏览器将返回 NaN。 如果参数 x 取值 -1，那么将返回 PI。
 */

console.log(Math.acos(0.64)); // 0.8762980611683406
console.log(Math.acos(-0.64)); // 2.2652945924214527
console.log(Math.acos(0.5)); // 1.0471975511965976
console.log(Math.acos(-0.5)); // 2.0943951023931957
console.log(Math.acos(-1)); // PI
console.log(Math.acos(1)); // 0
console.log(Math.acos(1.1)); // NaN
console.log(Math.acos(-1.1)); // NaN
console.log(Math.acos(0)); // 1.5707963267948966