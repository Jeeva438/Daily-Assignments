var firstInput = prompt("Type 1st word")
var secondInput = prompt("Type 2nd word")
var isAnagram = true;
for (let i = 0; i < firstInput.length; i++) 
{
   for (let j = 0; j < secondInput.length; j++) {
    if (firstInput[i]!== secondInput[j]) {
      isAnagram = false;
      break;   
    }
   }   
}
if (isAnagram) {
    console.log("The two words are anagrams.");
  } else {
    console.log("The two words are not anagrams.");
  }