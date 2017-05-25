/**
 * Created by jaejoonglee on 5/24/17.
 */
var fs =require('fs');

// Sync
console.log('before data');
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

// Async
console.log('2');
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data);

})
console.log(4);