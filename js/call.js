/**
 * Created by lenovo on 2015/10/30.
 */



var cat = function() {

};

cat.prototype = {
    food: "fish",
    say: function () {
        console.log("I love " + this.food);
    }
};
var blackCat = new cat();
blackCat.say(); //I love fish


var whiteDog = {food:"bone"};
blackCat.say.call(whiteDog); //I love bone
blackCat.say.apply(whiteDog); //I love bone