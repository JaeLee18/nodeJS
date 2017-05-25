/**
 * Created by jaejoonglee on 5/23/17.
 */
function printableMsg(){
    var message = 'hello';
    function setMsg(newMsg){
        if(!newMsg) {
            throw new Error('cannot set empty msg');
        }
        message = newMsg;
    }
    function getMsg(){
        return message;
    }
    function printMsg(){
        console.log(message);
    }
    return {
        setMsg: setMsg,
        getMsg: getMsg,
        printMsg: printMsg
    };
}

var pm = printableMsg();
pm.printMsg();

var pm2 = printableMsg();
pm2.setMsg("aaa");
pm2.printMsg();

pm.printMsg();