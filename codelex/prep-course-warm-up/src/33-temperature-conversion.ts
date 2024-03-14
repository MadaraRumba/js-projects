export {};

/**
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */
const formatTemperature =(temperature:number) :string => {
    return temperature.toFixed(1);
}


const fahrenheitToCelsius = (temperature:number):string => {
    return formatTemperature((temperature - 32) *(5/9));
}
const celsiusToFahrenheit = (temperature:number) => {
    return formatTemperature((temperature * (5/9) +32));
}


console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
