1.
Question 1
How are time elements added to BasicBallot contract we discussed earlier?

??? - Using “now” variable along with enum for stages

2.
Question 2
In BallotWithStages.sol, how are the stages validated in register and vote functions?

??? - Using if and return statements

3.
Question 3
Compile and create BallotWithStages.sol. Immediately try and vote. What is the status of the transaction?  [After the transaction is initiated observe the console window at the bottom of Remix IDE. Click on Details button to check if transaction was successful or failed]

Transaction mined and execution succeeds

4.
Question 4
Time variable “now” does not provide the real current time. True or False?

??? - True

5.
Question 5
In BallotWithModifier.sol, where is the condition about the stages defined?

??? - Inside the modifier

6.
Question 6
Assert statement in the winningProposal method of BallotWithModifier.sol makes sure that the function does not return a value if nobody voted. True or False?

??? - True

7.
Question 7
Compile and create BallotWithModifier.sol. Immediately try and vote. What is the status of the transaction? [After the transaction is initiated observe the console window at the bottom of Remix IDE. Click on Details button to check if transaction was successful or failed]

??? - Transaction mined and execution fails

8.
Question 8
Even though we have specified only tens of seconds (30 and 60 seconds) as the stage time, the stage time or duration in real-life application it could be longer. True or False?

??? - True

9.
Question 9
What stage does the contract have to be in for winningProposal to produce a result?

10.
Question 10
In BallotWithModifiers.sol, how is the end of voting stage indicated to the other applications?

??? - Using the event votingCompleted
