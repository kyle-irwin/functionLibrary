function pow(x, y) {
    let result = x;
    for (i = 1; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(4, 3)); // returns 64