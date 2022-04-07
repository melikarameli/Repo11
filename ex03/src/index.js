// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets) {
    var myNewPets = myPetsArray
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[3];
    myNewPets.shift();
    myNewPets.unshift("Lion");
    myNewPets.pop();
    return myNewPets;
}
console.log(myArrayFunction());
// End of creating a function
module.exports = myArrayFunction;