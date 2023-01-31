class GameMaker{
    constructor(question,opt1,opt2,opt3,opt4,scr,tot){
        this.question=question;
        this.opt1=opt1;
        this.opt2=opt2;
        this.opt3=opt3;
        this.opt4=opt4;
        this.scr=scr;
        this.tot=tot;
        this.changeText();
    }
    changeText(){
        this.question.innerText="Question 1: Example"
        this.opt1.innerText="OPT 1"
        this.opt2.innerText="OPT 2"
        this.opt3.innerText="OPT 3"
        this.opt4.innerText="OPT 4"
        this.scr.innerText="Score: "+scoreCount.toString()
        this.tot.innerText="Questions: "+questionCount.toString()
    }
}
const question = document.getElementById('data-question')
const opt1=document.getElementById('opt1')
const opt2=document.getElementById('opt2')
const opt3=document.getElementById('opt3')
const opt4=document.getElementById('opt4')
const scr=document.getElementById('scr')
const tot=document.getElementById('tot')
var scoreCount=0
var questionCount=0

const game = new GameMaker(question,opt1,opt2,opt3,opt4,scr,tot);