/**
 * Created by zhaoxiaobing on 16/7/10.
 */


/**
 * concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
 * arrayObject.concat(arrayX,arrayX,......,arrayX);
 */

var a = [1,2,3];
var b = ['zhao'];
var c = ['xiao','bing'];



console.log(a + b); //1,2,3zhao
console.log(a.concat(b));//[ 1, 2, 3, 'zhao' ]
console.log(a.concat(b,c[0]));//[ 1, 2, 3, 'zhao', 'xiao' ]
console.log(a.concat(b,c));//[ 1, 2, 3, 'zhao', 'xiao', 'bing' ]