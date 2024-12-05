const findTheOldest = function(array) {
    let oldest = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i].yearOfDeath == undefined){
            delete array[i]
        }
        else{
        let current = array[i]
        if ((current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
            oldest = current
            return oldest
        }
        }
    
    }
}


// Do not edit below this line
module.exports = findTheOldest;
