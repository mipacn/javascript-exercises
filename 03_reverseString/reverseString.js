const reverseString = function(word) {
    let letters = word.split("")
    let i = letters.length
    i -= 1
    let reverseLetters = ""
    while (i >= 0){
        reverseLetters += letters[i]
        i--
    }
    return reverseLetters.toString()
};

// Do not edit below this line
module.exports = reverseString;
