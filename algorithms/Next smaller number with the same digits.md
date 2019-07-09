URL: https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

```javascript
function nextSmaller(n) {
  // Get all digits
  const digits = n
    .toString()
    .split('')
    .map(digit => parseInt(digit))
    .sort(sortNumber)
    
  // Get all valid combinations
  const combinations = getCombinations(digits)
  console.log('', combinations)
  
  // Find the near combination to desired number
  
  return 0;
}

function getCombinations(digits) {
  digits.reduce((accumulator, currentDigit, index) => {
    console.log(index, currentDigit)
  }, [])
  
  return []
}

function sortNumber(a, b) {
  return a - b;
}
```