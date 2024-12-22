const removeFromArray = function removeFromArray(list, num) {
    for (const i of list) {
        if (i === num) {
            list.splice(list.indexOf(i), 1);
        }
    }
    return list
};

console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;

