// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
   ];
   // End of temps array
   // Create a function below this line
   function myArrayFunction() {
       var averageDayTemp = [];
       for (i = 0; i < 5; i++) {
           var avrg = 0;
           for (j = 0; j < 4; j++) {
               avrg = avrg + temps[i][j];
           }
           avrg = Math.round((avrg / 4) * 100) / 100;
           averageDayTemp.push(avrg);
       }
       return averageDayTemp;
   }
   console.log(myArrayFunction());
   // End of creating a function
   module.exports = myArrayFunction;