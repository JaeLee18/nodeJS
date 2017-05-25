/**
 * Created by jaejoonglee on 5/24/17.
 */
function aClass(){
    this.someProperty = 'some init val';
}

aClass.prototype.someMemberFunc = function(){
    this.someProperty = 'modified val';
}

var instance = new aClass();

console.log(instance.someProperty);
instance.someMemberFunc();
console.log(instance.someProperty);