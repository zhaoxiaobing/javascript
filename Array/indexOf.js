/**
 * Created by zhaoxiaobing on 16/7/6.
 */

//array.indexOf(searchElement[, fromIndex])  searchElement——要检索的内容 fromIndex——— 从第几位索引开始检索
// 若数组中存在则返回索引 (从0开始,返回第一个符合的索引), 若不存在返回-1

var data = [2, 5, 7, 3, 5,'6'];

console.log(data.indexOf(5, "x")); // 1 ("x"被忽略)
console.log(data.indexOf(5, "4")); // 4 (从3号位开始搜索)

console.log(data.indexOf(4)); // -1 (未找到)
console.log(data.indexOf("5")); // -1 (未找到，因为5 !== "5")
console.log(data.indexOf("6")); // 5