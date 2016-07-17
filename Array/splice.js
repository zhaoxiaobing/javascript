/**
 * Created by zhaoxiaobing on 16/7/17.
 */

/**
 * 定义和用法: splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * 语法: arrayObject.splice(index,howmany,item1,.....,itemX);  index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。 howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。 item1, ..., itemX	可选。向数组添加的新项目。
 * 返回值: Array	包含被删除项目的新数组，如果有的话。
 * 说明: splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。 如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
 * 注释: 该方法会改变原始数组
 */

var arr1 = ['zhao','xiao','bing','first','second','third'];
var arr2 = ['zhao','xiao','bing','first','second','third'];
var arr3 = ['zhao','xiao','bing','first','second','third'];

console.log(arr1.splice(0,3)); // >=0 && <3 [ 'zhao', 'xiao', 'bing' ]
console.log(arr1); // [ 'first', 'second', 'third' ]

console.log(arr2.splice(0,3,'myself','me')); // [ 'zhao', 'xiao', 'bing' ]
console.log(arr2); // [ 'myself', 'me', 'first', 'second', 'third' ]

console.log(arr3.splice(0,0,'myself','me')); // []
console.log(arr3); // [ 'myself', 'me', 'zhao', 'xiao', 'bing', 'first', 'second', 'third' ]