/**
 * Created by zhaoxiaobing on 15/12/30.
 */


function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    getName : function(){
        return this.name;
    },
    getAge : function(){
        return this.age;
    }
};

var alice = new Person('Alice',93);
var bill = new Person('Bill',30);

Person.prototype.getGreeting = function(){
    return 'HI ' + this.getName() + '!';
};

alice.displayGreeting = function(){
    return this;
};

console.log(bill.getGreeting());
console.log(alice.displayGreeting());