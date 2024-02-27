function isPalindrome(word) {
  const length = (parseInt(word.length))
  const middleIndex = Math.floor((length - 1)/2)
  console.log(middleIndex)
  
  for(let index = 0; index <= middleIndex; index++){
    console.log(word[((length - 1) - index)])
    console.log(word[index])
    if(word[index] !== word[((length- 1) -index)]){
      return false
    }
  }
return true
}

/* 
  Add your pseudocode here
*/
// middleIndex = word.length, subtract 1, divide by 2, parse, round down
//           (if 7: [3] would be the middle index)
//           (if 8, middle indexes would be 4th and 5th ([3] and [4]), if 12 middle indexes would be 6th and 7th([5] and [6]) )
//loop: compare each index to the same index from the end until it hits the middle index. 
//    if at any point the letters don't match, return false. 
//    when it reaches middleIndex +1, exit loop true
// 
//       
//       



/*
  Add written explanation of your solution here
*/
// write function isPalindrome, which recieves single words. 
// If the word receieved is the same forward and bacward, return true. If not, return false. 
// Boolean 

// IDEAS
// Could either reverse the order of all the letters and then compare it to the original, 
// OR compare the first letter to the last letter, 2nd to 2nd from last, etc. 
      // This would be dependant on how many letters are in the word.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("roberto"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
