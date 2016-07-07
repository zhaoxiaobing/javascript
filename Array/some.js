/**
 * Created by zhaoxiaobing on 16/7/5.
 */

/**
 * some意指“某些”，指是否“某些项”合乎条件。
 */

//array.some(callback,[ thisObject]);  some要求至少有1个值让callback返回true就可以了。

var scores = [5,8,3,10];
var current = 7;


function higherThanCurrent(score){
    return score>current;
}

if(scores.some(higherThanCurrent)){
    console.log("符合条件~");
}