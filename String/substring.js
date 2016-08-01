/**
 * Created by zhaoxiaobing on 16/7/31.
 */

/**
 * 定义和用法: substring() 方法用于提取字符串中介于两个指定下标之间的字符。
 * 语法: stringObject.substring(start,stop); start	必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。stop 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。
 * 返回值: 一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。
 * 说明: substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。
 * 注释: 与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。
 */

var str="Hello world!";
console.log(str.substring(3)); //lo world!
console.log(str.substring(3,5)); // lo
console.log(str.substring(-3,-2)); // 空