/**
 * Created by jaejoonglee on 5/24/17.
 */
try{
    console.log('About to throw an error');
    throw new Error("Error thrown, my custom error");
}
catch(e){
    console.log("an error has thrown");
    console.log("the error was: ", e.message);
}
finally {
    console.log("error thrown");
}