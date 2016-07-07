/**
 * Created by zhaoxiaobing on 16/7/5.
 */

/**
 * forEach方法中的function回调支持3个参数
 * 第1个是遍历的数组内容；
 * 第2个是对应的数组索引，
 * 第3个是数组本身
 * */
[].forEach(function (value, index, array) {
    // ...
});


function test(num) {
    console.log(num);
}
function test1(num, index, arr) {
    console.log(num, index, arr);
}
[1, 2, 3, 4].forEach(test);
[1, 2, 3, 4].forEach(test1);


// 'aryardh6' 字符串去重并列出每个字符串的个数
var obj = {},arr = '';
'aryardh6'.split('').forEach(function (str) {
    if (arr.indexOf(str) == -1) {
        arr += str;
    }
    if (obj[str]) {
        obj[str] += 1;
    } else {
        obj[str] = 1;
    }
});
console.log(obj);
console.log(arr);


//再下面，更进一步，forEach除了接受一个必须的回调函数参数，还可以接受一个可选的上下文参数（改变回调函数里面的this指向）（第2个参数）。
var obj1 = {
    users: ["张含韵", "江一燕", "李小璐"],
    fn: function () {
        console.log(this.age);
    },
    age: "25"
};

obj1.users.forEach(obj1.fn,obj1);//如果这第2个可选参数不指定，则使用全局对象代替（在浏览器是为window），严格模式下甚至是undefined.