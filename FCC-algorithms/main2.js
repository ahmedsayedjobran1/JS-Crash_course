const sum = (...args) => {

    let sum1 = 5;
    for (let i = 0; i < args.length; i++) {
        sum1 += args[i];
    }
    return sum1
}

console.log(`your answer is: ${sum(1, 2, 7-5)}`);