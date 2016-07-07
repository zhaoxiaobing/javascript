/**
 * Created by zhaoxiaobing on 16/7/5.
 */

/**
 * 这里的map不是“地图”的意思，而是指“映射”。[].map(); 基本用法跟forEach方法类似：
 *
 * //callback的参数也类似:
 *
 * */

/*
    [].map(callback,[ thisObject]);

    [].map(function(value, index, array) {
      // ...
    });
*/

var data = [1, 2, 3, 4];

data.map(function(data){
    console.log(data);
});

data.map(function(data,index,arr){
    console.log(data,index,arr);
});

var arrayOfSquares = data.map(function(val){
    //console.log(val);
    return val*val;
});

console.log(arrayOfSquares);



var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];

var emails = users.map(function (user) { return user.email; });

console.log(emails); // [ 'zhang@email.com', 'jiang@email.com', 'li@email.com' ]