/**
 * Created by zhaoxiaobing on 16/7/17.
 */

/**
 * 定义和用法: 用于对数组的元素进行排序。  sort()对数组排序，不开辟新的内存，对原有数组元素进行调换
 * 语法: arrayObject.sort(sortby);  sortby	可选。规定排序顺序。必须是函数。
 * 返回值: 对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
 * 说明: 1. 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
 2. 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
 若 a 等于 b，则返回 0。
 若 a 大于 b，则返回一个大于 0 的值。
 */


var arr1 = ['zhao','zz','xiao','bing','first','second','third','!','~']; //
var arr2 = [8,54,123];
var arr3 = [22,321,4321,1,2,2,43,111,3232,14,5,32,31,54,65,8,98];

console.log(arr1.sort()); // [ '!', 'bing', 'first', 'second', 'third', 'xiao', 'zhao', '~' ]
console.log(arr2.sort()); // [ 123, 54, 8 ] 按照第一个数字的大小

console.log(arr3.sort(function (a,b) { return a-b; })); // 从小到大 [ 1, 2, 5, 8, 14, 22, 31, 32, 43, 54, 65, 76, 98, 111, 321, 3232, 4321 ]

console.log(arr3.sort(function (a,b) { return b-a; })); // 从大到小 [ 4321, 3232, 321, 111, 98, 76, 65, 54, 43, 32, 31, 22, 14, 8, 5, 2, 1 ]
