/**
 * Created by zhaoxiaobing on 16/7/6.
 */

//array.lastIndexOf(searchElement[, fromIndex])
//lastIndexOf是从字符串的末尾开始查找，而不是从开头。还有一个不同就是fromIndex的默认值是array.length - 1而不是0



var data = [2, 5, 7, 3,2, 6,8,9,0,1];

console.log(data.lastIndexOf(5)); // 4(从前往后，返回索引值)
console.log(data.lastIndexOf(3,6)); // 1 (从后往前，索引值小于3的开始搜索)

console.log(data.lastIndexOf(4)); // -1 (未找到)