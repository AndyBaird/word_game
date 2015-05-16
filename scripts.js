
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
arrDashClean = arrBlank.join([separator = '']);
console.log(arrDashClean);

//adds dashes to wordfield
document.querySelector('.wordfield').textContent = arrDashClean;

//new global variables
var userLetter = document.querySelector('input').value;
var btn = document.querySelector("button");

//function to add user's guess to UI
btn.addEventListener('click', function displayGuess () {
  var input = document.querySelector('input[class=letter]');
  var display = [input.value];
  document.querySelector('h1').textContent = display;

});

//function to compare guess with array
btn.addEventListener('click', function compare () {
 var input = document.querySelector('input[class=letter]').value;

  for (var i = 0; i < wordArray.length; i++) {
    if (input === wordArray[i]){
       var position = wordArray.indexOf(input);
       console.log(position);
         (arrWordField.splice(position, 0, input));
         wordArray.splice(position, 1, ''); //this line replaces the matched letter with '' so it cannot be matched again.

      //removes commas from array of correct guesses
      var arrCorrect= [];
      arrCorrect = arrWordField.join('');
      console.log (arrCorrect);

      //adds word to wordfield
document.querySelector(".output").innerHTML = arrCorrect;

   }
  document.querySelector('input[class=letter]').value = '';

  }
});




//push the arrWordField onto the HTML
//var output = document.querySelector('.output');
//output.push(arrWordField.value);
//

    //use this for taking out 1 life.
    /*  else if(input != wordArray[i]){
        arrWrongLetter.push(input);*/
