let myFreinds = ["Hajar", "Nada", "Yosra", "Lyla", "Hema"];
while (myFreinds.length > 0) {
    let A11 = myFreinds.shift();
    sortIt(A11);
}
function sortIt(x) {
    console.log(`${x} nice to meet you it's a long time since we meet`)
}


// for (let i = 0; i < myFreinds.length; i++) {
//     CheckIt(myFreinds[i]);
// }
// function CheckIt(x) {
//     console.log(`hi ${x} nice to meet you`);
// }