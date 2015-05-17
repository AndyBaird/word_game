

//Global variable definitions
var randomWord = [];
var arrCleanWords =[];
var arrWordField = [];
var arrDashClean =[];
var arrWrongLetter = [];
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
//removes words two letters or less from the array
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

//generate random word
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

//splits random word into array of letters
var wordArray = randomWord.split("");
console.log(wordArray);

var arrBlank = [];

//generate dashes per length of random word//
for (var i=0; i < wordArray.length; i++) {
  arrBlank.push('_');
}

//adds dashes to wordfield
document.querySelector('.wordfield').textContent = arrBlank.join('');

//new global variables
var userLetter = document.querySelector('input').value;
var btn = document.querySelector("button");
var totalDisplay = [];

//function to add user's guess to UI
btn.addEventListener('click', function displayGuess () {
  var input = document.querySelector('input[class=letter]').value;
  totalDisplay.push(input);
  document.querySelector('h1').textContent = totalDisplay.join(' ');
});

//function to compare guess with array
btn.addEventListener('click', function compare () {
 var input = document.querySelector('input[class=letter]').value;
  for (var i = 0; i < wordArray.length; i++) {
    if (input === wordArray[i]){
       var position = wordArray.indexOf(input);
       console.log(position);
         (arrBlank.splice(position, 1, input));
         wordArray.splice(position, 1, '');//replaces the matched letter with ''
      document.querySelector('.wordfield').textContent = arrBlank;
      document.querySelector('.wordfield').textContent = arrBlank.join('');
    }
  //removes guess from input field
    document.querySelector('input[class=letter]').value = '';
    document.querySelector(".letter").focus();

  }


    if (randomWord == arrBlank.join('')) {alert("you win");
    }
});

//take away a life

document.querySelector(".life-count").textContent = 8;

btn.addEventListener('click', function life () {
  var arrNum = document.querySelector(".life-count").textContent;
  var lifeCount = document.querySelector(".life-count");
  lifeCount.textContent = arrNum -1;
    if (lifeCount.textContent === "0"){
    document.querySelector('h1').textContent = "You Lose";
    }
});
