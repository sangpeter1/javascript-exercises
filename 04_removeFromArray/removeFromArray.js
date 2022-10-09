const removeFromArray = function(list, ...otherArg) {
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        if (otherArg.indexOf(list[i]) === -1) 
        newArray.push(list[i]);
    
    }
    return newArray
};


// Do not edit below this line
module.exports = removeFromArray;
