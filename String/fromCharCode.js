/**
 * Created by zhaoxiaobing on 16/7/28.
 */

/**
 * 定义和用法: fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
 * 语法: String.fromCharCode(numX,numX,...,numX); numX 必需。一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码。
 * 返回值:
 * 说明: 它不能作为您已创建的 String 对象的方法来使用。因此它的语法应该是 String.fromCharCode()，而不是 myStringObject.fromCharCode()。
 * 注释: 该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定。
 */

console.log(String.fromCharCode(72,69,76,76,79)); // HELLO
console.log(String.fromCharCode(65,66,67)); // ABC
console.log(String.fromCharCode(109,110)); // mn