/**
 * Created by jaejoonglee on 5/24/17.
 */
try{
    setTimeout(function(){
        console.log('Throw an err');
        throw new Error('Error thrown');
    }, 1000);
}
catch(e){
    console.log("never");
}
console.log('outside');