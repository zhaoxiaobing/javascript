/**
 * Created by zhaoxiaobing on 16/7/6.
 */


//array.reduce(callback[, initialValue])
//callback函数接受4个参数：之前值、当前值、索引值以及数组本身。initialValue参数可选，表示初始值。若指定，则当作最初使用的previous值；如果缺省，则使用数组的第一个元素作为previous初始值，同时current往后排一位，相比有initialValue值少一次迭代。

var sum = [5, 6, 7, 8].reduce(function (previous, current, index, array) {
    console.log(index);
    //console.log(previous, current, index, array);
    return previous + current;
});

console.log(sum); // 10


var o = {};
var o2 = {};
o.a = o2; // o 引用 o2
o2.a = o; // o2 引用 o
console.log(o);


var a = {name:"xiaobing"};
var b = a;
console.log(b);
a.age = 25;
a.name = 'zhaoxiaobing';
console.log(b);

var c = 1;
var d = c;
c = 2;
console.log(d);


var e = [1,2,3,4];
var f = e;
e.push(5);
console.log(f);
console.log(typeof f);




