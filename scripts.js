
var randomWord = [];
var arrCleanWords =[];
var arrAllWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
function cleanArray(){
  arrCleanWords = [];

  for (var i = 0; i < arrAllWords.length; i++) {
    if (arrAllWords[i].length > 2) {
      arrCleanWords.push(arrAllWords[i]);
    }

  }
  return arrCleanWords;
}

cleanArray();

var randomWord = arrCleanWords[Math.floor(Math.random()*arrCleanWords.length)];
console.log(randomWord);
    ///////Below is the far more complicated way of approaching it...
    /*function random(){
       var num = Math.floor((Math.random()*cleanArray().length));
       console.log(num);
       var randomWord = arrCleanWords.splice(num);
       console.log (randomWord);
      }

       random();*/////////

var wordArray = randomWord.split("");
console.log(wordArray);

document.getElementById("button").addEventListener('click', function compare() {
  var userLetter = document.querySelector(".guess").value;

});
console.log (userLetter);
