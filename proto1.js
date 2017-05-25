/**
 * Created by jaejoonglee on 5/23/17.
 */
var foo = {};
foo.__proto__.bar = 12;
console.log(foo.bar);