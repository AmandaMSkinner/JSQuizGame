class GameMaker{
    constructor(question,option1,option2,option3,option4,score,total){
        this.question=question
        this.option1=option1
        this.option2=option2
        this.option3=option3
        this.option4=option4
        this.score=score
        this.total=total
    }
    changeQ(){
        this.questionTextElement.innerText="What?"
    }
}
const questionTextElement = document.querySelector('[data-question]')
const game = new GameMaker(question,option1,option2,option3,option4,score,total)
changeQ();