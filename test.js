/**
 * Created by zhaoxiaobing on 16/7/29.
 */

var arr = [1,2,3,4,5,6,7,8,9,0];
function resetArr(arr){
    var len = Math.floor(arr.length/2),
        l = arr.splice(0,len),
        r = arr.splice(-len,len);
    return r.concat(arr,l);
}

resetArr(arr);

function scrollMain(){
    this.x = 1;
}

var A = new scrollMain();

console.log(A.__proto__ === scrollMain.prototype);
console.log(A.__proto__);