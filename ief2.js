/**
 * Created by jaejoonglee on 5/19/17.
 */
/**
 * Created by jaejoonglee on 5/19/17.
 */
var foo = 123;
if(true){
    (function(){
        foo = 456;
    })();
}
console.log(foo);