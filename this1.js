/**
 * Created by jaejoonglee on 5/23/17.
 */
var foo = {
    bar: 454545,
    bas: function(){
        console.log("inside this.bar is:", this.bar);
    }
}

console.log('foo.bar is', foo.bar);
foo.bas();