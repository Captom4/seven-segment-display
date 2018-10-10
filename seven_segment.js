var fs = require('fs');
var words = fs.readFileSync('words.txt').toString();
words = words.split("\n");

var badLetters = /[gkmqvwxz]/;
var longestAcceptableWord = "";

for(var testWord of words) {
    
  if(testWord.length <= longestAcceptableWord.length) {
        continue;
  }
    
  if(testWord.match(badLetters)) {  continue; }
  
  longestAcceptableWord = testWord;
  
}

console.log(longestAcceptableWord);

