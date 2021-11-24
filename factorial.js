function factorial(num) {
    let acc = 1;
    for (let i = num; i >= 1; i--) {
        acc *= i;
    }
    return acc;
}


console.log(factorial(6))