const repeatString = function repeatString(str, num) {
    let result = '';
    for (let i = num; i > 0; i--) {
        result += str;
    }
    return result
};

console.log(repeatString('hey', 3))
// Do not edit below this line
module.exports = repeatString;
