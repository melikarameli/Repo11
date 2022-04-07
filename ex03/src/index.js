// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    var myNewPets = myPetsArray.push("Bird", "Fish");
    var firstPet = myNewPets.unshift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    return myNewPets;
}
console.log(myArrayFunction());
// End of creating a function
module.exports = myArrayFunction;