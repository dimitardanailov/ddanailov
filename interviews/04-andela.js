// Fibonacci Sequence is a series of numbers in which the next number is gotten by adding up the two numbers before it
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Write a method that when passed a number returns the Fibonacci sequence with a length of the number

function fibonacciNumber(number) {
  let n1 = 0, n2 = 1, nextTerm;
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

// fibonacciNumber(5);
console.log('-------');
// fibonacciNumber(6);


// --- Anagram
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// I need to check the the char exists in both and get the count of the char, 

function anagrams(rawWord1, rawWord2) {
  const pattern = /\W/g
  const word1 = rawWord1.replaceAll(pattern, '').toLowerCase().split('').sort(compare).join('');
  const word2 = rawWord2.replaceAll(pattern, '').toLowerCase().split('').sort(compare).join('');

  
  const response = (word1 === word2);
  console.log(response);
}

function compare(a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
};

anagrams('rail safety', 'fairy tales');
anagrams('RAIL! SAFETY!', 'fairy tales');
anagrams('Hi there', 'Bye there');


 // Prime number is a number that is divisible by only 1 and itself
// 1 is not a prime number
// 2 is a prime number
// Write a method that determines if a number is a prime number or not
// Return true if it is a prime number, else return false

function isPrimeNumber(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

// console.log(isPrimeNumber(100));