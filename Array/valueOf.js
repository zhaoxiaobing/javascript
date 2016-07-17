/**
 * Created by zhaoxiaobing on 16/7/17.
 */

/**
 * 定义和用法: valueOf() 方法返回 Array 对象的原始值。该原始值由 Array 对象派生的所有对象继承。
 * 语法: arrayObject.valueOf()
 * 返回值:
 * 说明: valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。
 * 注释:
 */

var arr1 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.valueOf()); // [ 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]