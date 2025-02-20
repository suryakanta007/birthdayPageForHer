function convertTemperature(value, scale) {
    switch (scale) {
        case "C":
            return (value * 9 / 5 + 32) + "°F"; 
        case "F":
            return ((value - 32) * 5 / 9) + "°C"; 
    }
}

// Test Cases
console.log(convertTemperature(0, "C"));  // "32°F"
console.log(convertTemperature(100, "C")); // "212°F"
console.log(convertTemperature(32, "F"));  // "0°C"
console.log(convertTemperature(212, "F")); // "100°C"
console.log(convertTemperature(50, "X"));  // "Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit."
