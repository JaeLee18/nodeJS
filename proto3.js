/**
 * Created by jaejoonglee on 5/23/17.
 */
function foo() {};
foo.prototype.bar = 123;
var bas = new foo();
var quz = new foo();

console.log("bas.bar: ", bas.bar);
console.log("quz.bar: ",quz.bar);

foo.prototype.bar = 456;
console.log("bas.bar: ", bas.bar);
console.log("quz.bar: ",quz.bar);