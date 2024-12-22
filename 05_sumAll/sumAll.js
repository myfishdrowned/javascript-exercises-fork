const sumAll = function sumAll(num1, num2) {
    let result = 0
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    return result
};
console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;
