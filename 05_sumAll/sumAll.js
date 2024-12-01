const sumAll = function(num1, num2) {

let int1 = num1
let int2 = num2
if (num1 > num2){
    int1 = num2
    int2 = num1
}
let i = int1
let sum = 0

while (i <= int2){
    sum += i
    i++
}
if (int1 < 0 || int2 < 0 || typeof(int1) != "number" || typeof(int2) != "number" 
|| Number.isInteger(int1) == false || Number.isInteger(int2) == false) {
    sum = "ERROR"
}

return sum
};

// Do not edit below this line
module.exports = sumAll;
