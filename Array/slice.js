/**
 * Created by zhaoxiaobing on 16/7/17.
 */

/**
 * 定义和用法: slice() 方法可从已有的数组中返回选定的元素,不会改变原来的数组。
 * 语法: arrayObject.slice(start,end); start 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
 * 返回值: 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
 * 说明: 请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
 * 注释：您可使用负值从数组的尾部选取元素。如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
 */

var arr1 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.slice(2,4)); //  <=2 && < 3 [ 'bing', 'first' ]
console.log(arr1.slice(2)); //  >=2 [ 'bing', 'first', 'second', 'third' ]
console.log(arr1.slice(-2)); // 最后两个 [ 'second', 'third' ]
console.log(arr1.slice(-2,-1)); // >=-2 && < -1  [ 'second' ]
console.log(arr1);  // [ 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]