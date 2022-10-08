const reverseString = function(word) {
let string = '';
for (i = word.length - 1; i >= 0; i--) {
    string += word.slice (i, i+1);
}
return string
};

// Do not edit below this line
module.exports = reverseString;
