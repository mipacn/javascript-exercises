const repeatString = function(string, number) {
let i = 0
let word = ""
while (i < number){
word += string
i += 1
}
if (number < 0){
    word = "ERROR"
}
return word
};

// Do not edit below this line
module.exports = repeatString;
