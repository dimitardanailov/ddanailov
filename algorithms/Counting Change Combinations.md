Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

```javascript
Test.assertEquals(countChange(4, [1,2]), 3, 'Simple case')
Test.assertEquals(countChange(4, [1,2,3]), 4, 'Simple case')
Test.assertEquals(countChange(4, [2]), 1, 'Simple case')
Test.assertEquals(countChange(10, [5,2,3]), 4, 'Another simple case')
Test.assertEquals(countChange(11, [5,7]), 0, 'No change')
```

Code:
```javascript
var countChange = function(money, coins) {
  var ways = 0
  var sortedCoins = [...coins].sort()
  
  coins.forEach(coin => {
    if (money % coin === 0) ways++
  })
  
  return ways
}
```