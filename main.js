// three Pillars of JS
// console.log(typeof (null));
var v;  //undefined
console.log(typeof v);
v = function () { };  // function
console.log(typeof v);
v = [1, 2, 3]; // object
console.log(typeof v);

console.log(typeof (function () { }) + "I'm here");