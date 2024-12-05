const fibonacci = function(num) {
    
    let extotal = 0
    let total = 1
    let extra

    if (num < 0) return "OOPS"
    else if (num == 0) return 0
    else if (num == 1) return total
    else {
        for (let i = 2; i <= num; i++){
            extra = total
            total += extotal
            extotal = extra 
        }
        return total
    }
};

// Do not edit below this line
module.exports = fibonacci;
