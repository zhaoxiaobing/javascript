/**
 * Created by zhaoxiaobing on 16/7/26.
 */

//定义类
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ',' + this.y + ')';
    }
}

console.log(typeof Point); //function
console.log(Point === Point.prototype.constructor);//true
console.log(Point.prototype.constructor);// [Function: Point]

var A = new Point(3,2);
console.log(A.toString()); //(3,2)


function n(){
    this.x = 1;
}
console.log(n === n.prototype.constructor);