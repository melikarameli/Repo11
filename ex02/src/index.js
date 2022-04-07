// Only change code below this code
var myStr = "Paragon is the best!";
function useMethods(str) {
    var mySplit = myStr.split("");
    var myreverse = mySplit.reverse();
    var myReverse = myreverse.join('');
    var countCharacters = myReverse.split(" ").map(i => i.length);
    return {
        myReverse,
        countCharacters
    };
}
console.log(useMethods());
// Only change code above this code
module.exports = useMethods;