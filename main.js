// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += `myGlobal: ${myGlobal} \n `;
    }
    if (typeof oopsGlobal != "undefined") {
        output += `oopsGlobl : ${oopsGlobal}`;
    }
    console.log(output);
}
fun1();
fun2();