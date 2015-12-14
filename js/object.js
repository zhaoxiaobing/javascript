/**
 * Created by lenovo on 2015/12/14.
 */

var obj = {};

var Person = function(name,sex,age){
    this.name = name;
    this.sex = sex;
};

Person.prototype.age = function () {
    return age;
};

var person = new Person('xiaobing','男',18);

console.log(person.constructor);
console.log(obj.constructor);
