/**
 * Created by jaejoonglee on 5/23/17.
 */
function foo() {};
foo.prototype.bar = 123;
var bas = new foo();
console.log(bas.__proto__ === foo.prototype);
console.log(bas.bar);