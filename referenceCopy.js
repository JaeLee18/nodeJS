/**
 * Created by jaejoonglee on 5/23/17.
 */
var foo = {bas: 123};
var bar = {bas: foo.bas};
bar.bas = 999;
console.log("foo.bas: ",foo.bas);
console.log("bar.bas: ",bar.bas);