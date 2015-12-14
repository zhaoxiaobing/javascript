/**
 * Created by lenovo on 2015/12/14.
 */

/*
    Array 对数组的内部支持
    Array.concat( ) 连接数组
    Array.join( ) 将数组元素连接起来以构建一个字符串,默认以 ','连接
    Array.length 数组的大小
    Array.pop( ) 删除并返回数组的最后一个元素
    Array.push( ) 给数组末尾添加元素,返回数组的长度, 可一次添加多个('1','2')
    Array.reverse( ) 颠倒数组中元素的顺序
    Array.shift( ) 将数组第一个元素移出数组
    Array.unshift( ) 在数组头部插入一个元素
    Array.slice(start,end ) 返回数组的一部分 返回的数组部分>=start  返回的数组部分<start
    Array.sort() 对数组元素进行排序,
    Array.splice(index ) 返回索引大于等于2的所有数组元素
    Array.splice(index,number ) 返回索引大于等于index的  number个元素
    Array.splice(index,number,item1 ) 替换
    Array.splice(index,number,item1,item1 ) 替换
    Array.toLocaleString( ) 把数组转换成局部字符串
    Array.toString( ) 将数组转换成一个字符串
*/

//console.log();
var Num = [6,3,4,7,8,1,9];
var Name = ['W','e','b','S','t','o','r','m'];
var Version = ['11.0'];
console.log(Array); // function Array() { [native code] }
console.log(typeof Array); // function
console.log(Name.concat(Version)); // [ 'W', 'e', 'b', 'S', 't', 'o', 'r', 'm', '11.0' ]
console.log(Name.join()); // W,e,b,S,t,o,r,m
console.log(Name.join('')); // WebStorm
console.log(Name.join('|')); // W|e|b|S|t|o|r|m
console.log(Name.length); // 8
console.log(Num.pop()); // 返回 9   Num = [ 6, 3, 4, 7, 8, 1 ]
console.log(Num.push(2)); // 返回7  Num = [ 6, 3, 4, 7, 8, 1, 2 ]
console.log(Num.push(9,5)); // 返回9  Num = [ 6, 3, 4, 7, 8, 1, 2 ]
console.log(Num); // 返回9  Num = [ 6, 3, 4, 7, 8, 1, 2, 9, 5 ]
console.log(Num.reverse()); // 返回 Num.   Num = [ 5, 9, 2, 1, 8, 7, 4, 3, 6 ]
console.log(Num.shift()); // 返回删除的元素5         Num = [ 9, 2, 1, 8, 7, 4, 3, 6 ]
console.log(Num.unshift(5)); // 返回长度9   Num = [ 5, 9, 2, 1, 8, 7, 4, 3, 6 ]
console.log(Name.slice(5)); // 返回 [ 'o', 'r', 'm' ]  从0开始算，  返回位置>=5的数组部分
console.log(Name.slice(2,5)); // [ 'b', 'S', 't' ]   从0开始算，  返回位置>=1 && <3的数组部分
console.log(Name.slice(-3,-1)); // [ 'o', 'r' ]
console.log(Num.sort()); //默认从小到大 Num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(Num.sort(function(a,b){ return a>b ? 1 : -1 })); //从小到大 Num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(Num.sort(function(a,b){ return a<b ? 1 : -1 })); //从大到小 Num = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(Num.splice(2)); // 返回[ 7, 6, 5, 4, 3, 2, 1 ]  Num = [ 9, 8 ]
Num = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
console.log(Num.splice(2,2)); // 返回[ 7, 6 ]  Num = [ 9, 8, 5, 4, 3, 2, 1 ]
Num = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
console.log(Num.splice(2,2,'xiaobing')); //返回[ 7, 6 ]   Num = [ 9, 8, 'xiaobing', 5, 4, 3, 2, 1 ]
Num = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
console.log(Num.splice(2,2,'xiao','bing')); //返回[ 7, 6 ] [ 9, 8, 'xiao', 'bing', 5, 4, 3, 2, 1 ]
Num = [ 9, 8, 7, 6, 5, 4, 3, 2, 1,['x','b']];
console.log(Num.toLocaleString());// 返回9,8,7,6,5,4,3,2,1,x,b
console.log(Num.toString());// 返回9,8,7,6,5,4,3,2,1,x,b

console.log('---------------------------------------------------------------------------------------');
console.log(Name);
console.log(Version);
console.log(Num);