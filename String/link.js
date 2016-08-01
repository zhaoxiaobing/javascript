/**
 * Created by zhaoxiaobing on 16/7/31.
 */

/**
 * 定义和用法: link() 方法用于把字符串显示为超链接。
 * 语法: stringObject.link(url); url	必需。规定要链接的 URL。
 * 返回值:
 * 说明:
 * 注释:
 */

var str="Free Web Tutorials!";
console.log(str.link()); // <a href="undefined">Free Web Tutorials!</a>
console.log(str.link("http://www.w3school.com.cn")); // <a href="http://www.w3school.com.cn">Free Web Tutorials!</a>
