function outerFunction(arg){
    var varInOuterFunc = arg;
    return function bar() {
        console.log(varInOuterFunc);
    }
   // bar();
}
var varFunc = outerFunction("Hello closure");
varFunc();