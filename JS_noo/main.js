var amount = 99.99;
function printAmount() {
    console.log(amount.toFixed(2));
}


printAmount(); // "99.99"

amount = amount * 2;

printAmount(); // "199.98"