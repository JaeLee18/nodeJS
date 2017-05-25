/**
 * Created by jaejoonglee on 5/23/17.
 */
function fibo(n){
    if(n < 2)
        return 1;
    else
        fibo(n-2) + fibo(n-1);
}
console.time('timer');
setTimeout(function(){
    console.timeEnd('timer');
}, 1000);

fibo(44);