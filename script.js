class GameMaker {
  constructor(question, opt1, opt2, opt3, opt4, scr, tot, scoreCount, questionCount) {
    this.question = question;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
    this.scr = scr;
    this.tot = tot;
    this.scoreCount = scoreCount;
    this.questionCount = questionCount;
    this.changeText();
  }
  changeText() {
    this.question.innerText = qVal
    this.opt1.innerText = o1Val
    this.opt2.innerText = o2Val
    this.opt3.innerText = o3Val
    this.opt4.innerText = o4Val
    this.scoreCount = scoreCount
    this.questionCount = questionCount
    this.scr.innerText = "Score: " + scoreCount.toString()
    this.tot.innerText = "Questions: " + questionCount.toString()
  }
  //https://www.wavsource.com/sfx/sfx.htm - Credit for Sounds
}
const question = document.getElementById('data-question')
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const opt3 = document.getElementById('opt3')
const opt4 = document.getElementById('opt4')
const scr = document.getElementById('scr')
const tot = document.getElementById('tot')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

wrongSound = new Audio('explosion_x.wav')
rightSound = new Audio('chime.wav')

var scoreCount = 0
var questionCount = 0
var qVal = "Question 1: Ex"
var o1Val = "Option1"
var o2Val = "Option2"
var o3Val = "Option3"
var o4Val = "Option4"
var ans = 0
var guess = 0
var qindex = 0;

const game = new GameMaker(question, opt1, opt2, opt3, opt4, scr, tot);

//All Questions are from https://travelswithelle.com/other/multiple-choice-trivia-questions/
var questTest = [
  "How many Infinity Stones are there?|3|5|6|10|3",
  "What 90's boyband member bought Myspace in 2011?|Nick Lachey|Justin Timberlake|Shawn Stockman|AJ McLean|2",
  "What is the most visited tourist attraction in the world?|Eiffel Tower|Statue of Liberty|Great Wall of China|Colosseum|1",
  "What is the name of Hagrid's pet spider?|Nigini|Crookshanks|Aragog|Mosag|3",
  "What is the heaviest organ in the human body?|Brain|Liver|Skin|Heart|2",
  "What element does the symbol AU stand for?|Silver|Magnesium|Salt|Gold|4",
  "What is the highest-grossing Broadway show of all time?|The Lion King|Wicked|Kinky Boots|Hamilton|1",
  "Which fast food restaurant has the largest number of retail locations in the world?|Jack in the Box|Chipotle|Subway|McDonalds|3",
  "What is the oldest soft drink in the United States?|Coca Cola|Pepsi|Dr. Pepper|Canada Dry Ginger Ale|3",
  "What is the name of the coffee shop in the sitcom Friends?|Central Perk|Java Park|Central Park Coffee|Central Park Roastery|1",
];

function shuffleQuestions(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {

      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

shuffleQuestions(questTest);
assignQuestion(questTest[0]);

function assignQuestion(qTest) {
  const qArr = qTest.split("|");
  qVal = qArr[0];
  o1Val = qArr[1];
  o2Val = qArr[2];
  o3Val = qArr[3];
  o4Val = qArr[4];
  ans = qArr[5];
  game.changeText();
}

function wrongAns() {
  wrongSound.play()
  questionCount++
  qindex++;
  qVal = "Incorrect!"
  setTimeout(function () {
    assignQuestion(questTest[qindex])
  }, (1000));
  if(qindex>=questTest.length){
    qVal = "Thanks for Playing!"
  }
}

function rightAns() {
  rightSound.play()
  scoreCount++
  questionCount++
  qindex++;
  qVal = "Correct!"
  setTimeout(function () {
    assignQuestion(questTest[qindex])
  }, (1000));
  if(qindex>=questTest.length){
    qVal = "Thanks for Playing!"
  }
}

btn1.addEventListener("click", function () {
  guess = 1;
  if (guess == ans&&qindex<questTest.length) {
    rightAns();
  } else if(qindex<questTest.length){
    wrongAns();
  }
  game.changeText();
});

btn2.addEventListener("click", function () {
  guess = 2;
  if (guess == ans&&qindex<questTest.length) {
    rightAns();
  } else if(qindex<questTest.length){
    wrongAns();
  }
  game.changeText();
});
btn3.addEventListener("click", function () {
  guess = 3;
  if (guess == ans&&qindex<questTest.length) {
    rightAns();
  } else if(qindex<questTest.length){
    wrongAns();
  }
  game.changeText();
});

btn4.addEventListener("click", function () {
  guess = 4;
  if (guess == ans&&qindex<questTest.length) {
    rightAns();
  } else if(qindex<questTest.length){
    wrongAns();
  }
  game.changeText();
});

