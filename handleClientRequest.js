/**
 * Created by jaejoonglee on 5/23/17.
 */
function handleClientRequest(request){
    makeDbCall(request.somInfo, function (result){
        request.complete(result);
    });
}