/**
 * Created by jaejoonglee on 5/23/17.
 */
function longRunningOperation(callback){
    setTimeout(callback, 3000);
}
function webRequest(request){
    console.log('Start a long operation for request: ', request.id);
    longRunningOperation(function(){
        console.log('end a long operation for request: ', request.id);
    });
}

webRequest({id:1});
webRequest({id:2});