/**
 * Created by jaejoonglee on 5/21/17.
 */
function longRunningOperation(callback){
    setTimeout(callback, 3000);
}

function userClicked(){
    console.log('starting a long operation');
    longRunningOperation(function(){
        console.log('ending a long operation');
    })
}

userClicked();