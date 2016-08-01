/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: atan() 方法可返回数字的反正切值。
 * 语法: Math.atan(x); x	必需。必须是一个数值。
 * 返回值: x 的反正切值。返回的值是 -PI/2 到 PI/2 之间的弧度值。
 * 说明:
 * 注释:
 */

console.log(Math.atan(0)); // 0
console.log(Math.atan(-1)); // -0.7853981633974483
console.log(Math.atan(1)); // 0.7853981633974483
console.log(Math.atan(-0.5)); // -0.46364760900080615
console.log(Math.atan(0.5)); // 0.46364760900080615
console.log(Math.atan(-2)); // -1.1071487177940906
console.log(Math.atan(2)); // 1.1071487177940906
console.log(Math.atan(-10)); // -1.4711276743037345
console.log(Math.atan(10)); // 1.4711276743037345
console.log(Math.atan(-180)); // -1.565240828394204
console.log(Math.atan(180)); // 1.565240828394204
console.log(Math.atan(-360)); // -1.568018556161576
console.log(Math.atan(360)); // 1.568018556161576
console.log(Math.atan('dasds')); // NaN
