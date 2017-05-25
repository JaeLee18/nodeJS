/**
 * Created by jaejoonglee on 5/23/17.
 */
function foo(){
    console.log('from globals?:', this === global);
}
foo();