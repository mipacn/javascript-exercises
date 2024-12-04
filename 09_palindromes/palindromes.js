const palindromes = function (string) {
    let newstring = string.replace(/[.,! ]/g, "").toLowerCase()
    let a = newstring.split("").reverse().join("")
    return newstring == newstring.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
