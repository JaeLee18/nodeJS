/**
 * Created by jaejoonglee on 5/23/17.
 */
var foo = {
    bar: 123
};

function bas(){
    if(this === global){
        console.log('called from global');
    }
    if(this === foo){
        console.log('called from foo');
    }
}
bas();
foo.bas = bas;
foo.bas();