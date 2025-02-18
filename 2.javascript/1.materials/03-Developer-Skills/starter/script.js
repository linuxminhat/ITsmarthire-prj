// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        value: prompt("Degrees celcius : "),
    }
    console.log(measurement.value);
    const kelvin = Number(measurement.value) + 273;
    return kelvin;
}
//A indentify 
console.log(measureKelvin(38));
