/**
 * Created by zhaoxiaobing on 16/7/5.
 */

/**
 * filter为“过滤”、“筛选”之意。指数组filter后，返回过滤后的新数组。用法跟map极为相似：
 */

/*
    array.filter(callback,[ thisObject]);
    filter的callback函数需要返回布尔值true或false. 如果为true则表示，恭喜你，通过啦！如果为false, 只能高歌“我只能无情地将你抛弃……”
    */

var data = [0, 1, 2, 3];
var arrayFilter = data.filter(function(item) {
    return item;
});
console.log(arrayFilter); // [1, 2, 3]  有此可见，返回值只要是弱等于== true/false就可以了，而非非得返回 === true/false.
