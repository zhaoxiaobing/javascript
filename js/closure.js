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

console.log(typeof A); //function
console.log(typeof myClosure); //object
console.log(myClosure.hidden); //undefined
console.log(myClosure.inc); //Function: innerFunction

console.log(myClosure.inc()); //1
console.log(myClosure.inc()); //2



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

console.log(myCounter.increment(5)); //undefined
console.log(myCounter.get()); //105


