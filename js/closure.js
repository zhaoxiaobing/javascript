/**
 * Created by lenovo on 2015/10/29.
 */


"use strict";

var A = function(){
    return 100;
};

var myClosure = (function outerFunction(){
    var hidden = 1;
    return {
        inc : function innerFunction(){
            return hidden++;
        }
    }
}());

console.log(typeof A);
console.log(typeof myClosure);
console.log(myClosure.hidden);
console.log(myClosure.inc);

console.log(myClosure.inc());
console.log(myClosure.inc());



function createCounter(initial) {
    var counter = initial;
    function increment(value) {
        counter += value;
    }
    function get() {
        return counter;
    }
    return {
        increment: increment,
        get: get
    };
}
var myCounter = createCounter(100);

console.log(myCounter.increment(5));
console.log(myCounter.get());


