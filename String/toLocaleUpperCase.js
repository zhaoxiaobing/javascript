/**
 * Created by zhaoxiaobing on 16/8/1.
 */

/**
 * 定义和用法: toLocaleUpperCase() 方法用于把字符串转换为大写。
 * 语法: stringObject.toLocaleUpperCase()
 * 返回值: 一个新的字符串，在其中 stringObject 的所有小写字符全部被转换为了大写字符。
 * 说明: 与 toUpperCase() 不同的是，toLocaleUpperCase() 方法按照本地方式把字符串转换为大写。只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toUpperCase() 一样。
 * 注释:
 */

var str="Hello World!";
console.log(str.toLocaleUpperCase()); // HELLO WORLD!
