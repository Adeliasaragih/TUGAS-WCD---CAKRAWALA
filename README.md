# TUGAS-WCD---CAKRAWALA

1. Fahrenheit to Celsius

Function Definition

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

Example Usage

console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(fahrenheitToCelsius(100)); // Output: 37.78

Formula

Celsius = (Fahrenheit - 32) × 5/9

2. Centimeter to Kilometer

Function Definition

function centimeterToKilometer(centimeter) {
    return centimeter / 100000;
}

Example Usage

console.log(centimeterToKilometer(100000)); // Output: 1
console.log(centimeterToKilometer(50000)); // Output: 0.5

Formula

Kilometer = Centimeter / 100000

3. Even or Odd Checker

Function Definition

function isOdd(n) {
    return n % 2 !== 0;
}

Example Usage

console.log(isOdd(3)); // Output: true
console.log(isOdd(10)); // Output: false

4. First Occurrence of a String Remover

Function Definition

function removeFirstOccurrence(mainString, searchString) {
    return mainString.replace(searchString, "");
}

Example Usage

console.log(removeFirstOccurrence("hello world", "hello")); // Output: " world"
console.log(removeFirstOccurrence("abc abc abc", "abc")); // Output: " abc abc"

5. Palindrome Checker

Function Definition

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str.toLowerCase() === reversed.toLowerCase();
}

Example Usage

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

License

This project is open-source and free to use.
