let Names = ["hajar", "sama", "nada", "bata", "yosra"];
function one() {  // this is a function
    for (let offer of Names) {
        ham(offer) // this is a function
    }
}
function ham(x) {
    let of_2 = Names[2];
    (console.log(`${x} is my donky but ${of_2} is cool  `));
}
one();