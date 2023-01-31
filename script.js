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
}
const question = document.getElementById('data-question')
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const opt3 = document.getElementById('opt3')
const opt4 = document.getElementById('opt4')
const scr = document.getElementById('scr')
const tot = document.getElementById('tot')
var scoreCount = 0
var questionCount = 0
var qVal = "Question 1: Ex"
var o1Val = "Option1"
var o2Val = "Option2"
var o3Val = "Option3"
var o4Val = "Option4"
var ans = 0
var guess = 0

const game = new GameMaker(question, opt1, opt2, opt3, opt4, scr, tot);
var questTest = "This Question came from the text file|TFO1|TFO2|TFO3|TFO4|1";
assignQuestion(questTest);

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
