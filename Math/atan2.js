/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: atan2() 方法可返回从 x 轴到点 (x,y) 之间的角度。
 * 语法: Math.atan2(y,x); x	必需。指定点的 X 坐标。 y	必需。指定点的 Y 坐标。
 * 返回值: -PI 到 PI 之间的值，是从 X 轴正向逆时针旋转到点 (x,y) 时经过的角度。
 * 说明:
 * 注释: 请注意这个函数的参数顺序，Y 坐标在 X 坐标之前传递。
 */

console.log(Math.atan2(1,2)); // 0.4636476090008061
console.log(Math.atan2(2,1)); // 1.1071487177940904
console.log(Math.atan2(0.50,0.50)); // 0.7853981633974483
console.log(Math.atan2(-0.50,-0.50)); // -2.356194490192345
console.log(Math.atan2(5,5)); // 0.7853981633974483
console.log(Math.atan2(10,20)); // 0.4636476090008061
console.log(Math.atan2(-5,-5)); // -2.356194490192345
console.log(Math.atan2(-10,10)); // -0.7853981633974483


