const removeFromArray = function(array, item1, item2, item3, item4) {
    let i = 0
    while (i < array.length){
        if (array[i] === item1 || array[i] === item2 || array[i] === item3 || array[i] === item4){
            array.splice(i, 1)  
        }
        else i++
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
