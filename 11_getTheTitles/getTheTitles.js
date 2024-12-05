const getTheTitles = function(array) {
    let newarr = []
    for (let i = 0; i < array.length; i ++){
        newarr += (array[i].title + ",")
    }
    let newnewarr = newarr.split(",")
    newnewarr.pop()
    return newnewarr
};

// Do not edit below this line
module.exports = getTheTitles;
