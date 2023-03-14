function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = "block scope";
        console.log("block scope: ",i);
    }

    console.log("function scope :",i);

}
checkScope();

/*

function checkScope() {
  let i = 'function scope';
  if (false) {
 let  i ="block scope";
   console.log(i);
  }

  console.log(i);

  }
  checkScope();
*/