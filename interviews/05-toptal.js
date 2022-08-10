/**
In addition (arithmetic operation), a carry refers to a digit that is transferred from one column to the adjacent column on the left when the result of the addition cannot be represented by a single digit. For example:

  55
+ 29
----
  84

In this example, 5 + 9 = 14, which cannot be represented by a single digit, so the 1 is carried to the column on the left and added to the result of 5 + 2.

Write a function that given two numbers returns the total count of carry operations performed while adding them.

Example:
numberOfCarryOperations(65, 55) // 2
65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry operations)

===========

Test cases:
numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1 

 */

function numberOfCarryOperations(numberA, numberB) {
  const _digitsA = new String(numberA).split('');
  const _digitsB = new String(numberB).split('');

  let digitsA = _digitsA, digitsB = _digitsB;
  if (_digitsB.length > _digitsB.length) {
    digitsA = _digitsB;
    digitsB = _digitsB;
  }
  
  const carryOperations = 0;
  for (let i = 0; i < digitsA.length; i++) {
    
  }
}

numberOfCarryOperations(999045, 1055)