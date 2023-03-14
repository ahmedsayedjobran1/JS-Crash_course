function checkScope() {
    let i = 'function scope';
    if (false) {
        let i = "block scope";
        console.log(i);
    }

    console.log(i);

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