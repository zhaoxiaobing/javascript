/**
 * Created by zhaoxiaobing on 16/7/5.
 */

var scores = [5,8,3,10];
var scores1 = [8,10,13];
var current = 7;


//every要求每一个值让callback都返回true就可以了

function higherThanCurrent(score){
    return score>current;
}

if(scores.every(higherThanCurrent)){
    console.log("scores符合条件~");
}

if(scores1.every(higherThanCurrent)){
    console.log("scores1符合条件~");
}