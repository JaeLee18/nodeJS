/**
 * Created by jaejoonglee on 5/24/17.
 */
function getConnection(callback) {
    var connection;
    try {
        // Lets assume that the connection failed
        throw new Error('connection failed');

        // Notify callback that connection succeeded?
        callback(false, connection);
    }
    catch (error) {
        // Notify callback about error?
        callback(error, null);
    }
}

// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    }
    else {
        console.log('Connection succeeded:', connection);
    }
});