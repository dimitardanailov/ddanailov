/*

https://public.karat.io/content/q093/wordlist.txt


The text file at the URL above lists common words in English, together with a count of their occurrence in a certain text. It is tab-delimited and newline-separated. The file is sorted with most common words at the top. 

Write a function that, given parameters N and K, downloads the file and returns the N most common words of length [2..K] together with their occurrence counts.

# Sample usage with maximum word length 5, to find top 1000 words:
get_list(1000, 5)

# Expected output (in order, pseudodata):
[
  ['THE', 53097401461],
  ['OF',  30966074232],
  ['AND', 22632024504],
  # ...
  ['OWNED', 30008173],
  ['VARY', 29995673],
  ['AXIS', 29993153]
]
*/

/**
 Pseudo code: 
 - 1. Download the file - Completed 
 - 2. Information words (The) and count (53097401461) - Completed
 - 3. Iterate the whole list and compare the length of words - get_list(1000, 5)
 - 4. Output
 */

const fetch = require('isomorphic-fetch')
const url = 'https://public.karat.io/content/q093/wordlist.txt'


// Sample usage with maximum word length 5, to find top 1000 words:
// get_list(1000, 5)

function get_output_list(maximum, wordLetters) {
  const promise = new Promise((resolve, reject) => {
    fetch('https://public.karat.io/content/q093/wordlist.txt')
      .then(function(response) {
        if (response.status >= 400) {
          reject(response)
        }

        resolve(response.text()) // or the stream
      })
      .then(text => resolve(text))
  })
  
  const outputPromise = new Promise(resolve => {
    promise.then(text => {
      const arr = filterText(text)
      const output = arr.get_list(maximum, wordLetters)
      
      resolve(output)
    })
  })
  
  return outputPromise
}

const maximum = 1000
const wordLetters = 5
get_output_list(1000, 5)
  .then(output => console.log([...output].reverse()))


fetch('https://public.karat.io/content/q093/wordlist.txt')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text(); // or the stream
    })
    .then(function(text) {
        const arr = filterText(text)
        // get_list(arr, 1000, 5)
    })


function filterText(text) {
  const lines = text.split('\n')
  const arr = []
  lines.forEach(line => {
    const row = line.split('\t')
    const word = row[0]
    const count = parseInt(row[1])
    arr.push(new Data(word, count))
  })
  
  return arr
}

class Data {
  constructor(word, count) {
    this.word = word
    this.count = count
  }
}

Array.prototype.get_list = function(maximum, wordLetters) {
  const iterator = 0
  const output = []
  const newArr = this.filter(item => {
    return 2 <= item.word.length && item.word.length <= wordLetters
  })
  
  return newArr.slice(0, maximum)
}

function get_list(items, maximum, wordLetters) {
  const iterator = 0
  const output = []
  const newArr = items.filter(item => {
    return 2 <= item.word.length && item.word.length <= wordLetters
  })
  
  console.log(newArr.slice(0, maximum))
}

/*

const fetch = require('isomorphic-fetch');
 
fetch('https://public.karat.io/content/q093/wordlist.txt')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text(); // or the stream
    })
    .then(function(text) {
        console.log(text);
    });


*/