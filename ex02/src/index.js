// Only change code below this code
var myStr = "Paragon is the best!";
function useMethods(str) {
    var mySplit = myStr.split("");
    var myreverse = mySplit.reverse();
    var myReverse = myreverse.join('');
    return myReverse;
    var countCharacters = myStr.map();
    return countCharacters;
}
console.log(useMethods());
// Only change code above this code
module.exports = useMethods;