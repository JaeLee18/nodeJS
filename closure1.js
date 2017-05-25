/**
 * Created by jaejoonglee on 5/21/17.
 */
function outerFunction(arg){
    var varInOuterFunction = arg;

    function bar(){
        console.log("var: "+varInOuterFunction);
    }

    bar();

}

outerFunction("closure");