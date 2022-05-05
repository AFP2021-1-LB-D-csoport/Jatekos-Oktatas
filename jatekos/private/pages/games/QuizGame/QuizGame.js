const startButton= document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffleQ, currentQuestinIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestinIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Kezdés')
    startButton.classList.add('hide')
    shuffleQ = questions.sort(() =>Math.random()-.5)
    currentQuestinIndex=0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion(){
    resetState()
 showQuestion(shuffleQ[currentQuestinIndex])
}

function showQuestion(question){
questionElement.innerText=question.question
question.answers.array.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}


function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>
    {setStatusClass(button,button.dataset.correct)})
    if(shuffleQ.lenght > currentQuestinIndex+1){
    nextButton.classList.remove('hide')}
    else{ startButton.innerText= 'Restart'
        startButton.classList.remove('hide')
}
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
        question:"Mikor volt a Szabadságharc?",
        answers:[
            {text:'1848', correct:true},
            {text: '1978', }
        
        ]
    }
]
