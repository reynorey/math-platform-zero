let currIndex = 0; //current problem

//gets elements
const questionEl = document.getElementById("question")
const formEl = document.getElementById("answer-form")
const inputAnsEl = document.getElementById("answer")
const feedbackEl = document.getElementById("feedback")
const nextButtonEl = document.getElementById("next-button")
const scoreEl = document.getElementById("score")
const retryButtonEl = document.getElementById("retry-button")
const submitButtonEl = formEl.querySelector('button[type= "submit"]')

let correctCount = 0
let attemptedCount = 0

function createProblem() {
    const problem =problems[currIndex]
    questionEl.textContent = problem.question; 
    feedbackEl.textContent = '' //clear feedback
    inputAnsEl.value = '' //clear answer

    //reset variables
    inputAnsEl.disabled = false
    submitButtonEl.disabled = false
    retryButtonEl.style.display = "none"

    inputAnsEl.classList.remove('correct-answer', 'incorrect-answer')
    scoreEl.textContent = `Score: ${correctCount} / ${attemptedCount}`
}

function handleSubmit() {
    event.preventDefault(); //stops loading
    const problem =problems[currIndex]
    const NumericAnswer = Number(inputAnsEl.value)

    attemptedCount++

    //prevents reanswering/resubmitting
    inputAnsEl.disabled = true
    submitButtonEl.disabled = true

    //formEl.querySelector('button[type="submit"]').disabled = true
    //checks if correct
    if (NumericAnswer === problem.correctAnswer) {
        feedbackEl.textContent = "Correct!"
        correctCount++
        scoreEl.textContent = `Score: ${correctCount} / ${attemptedCount}`
        
        inputAnsEl.classList.add('correct-answer')
        return
    }

    //checks if wrong and finds relevant feedback
    const matched = problem.correction.find(m=> m.matches(NumericAnswer))
    feedbackEl.textContent = matched ? matched.hint : problem.defaultHint
    scoreEl.textContent = `Score: ${correctCount} / ${attemptedCount}`
    
    inputAnsEl.classList.add('incorrect-answer')
    retryButtonEl.style.display = "inline-block"  
}

function handleRetry() {
    inputAnsEl.disabled = false
    submitButtonEl.disabled =false
    inputAnsEl.value = ''
    feedbackEl.textContent = ''
    retryButtonEl.style.display = "none"

    inputAnsEl.classList.remove('incorrect-answer')

    inputAnsEl.focus()
}

retryButtonEl.addEventListener('click', handleRetry)

function handleNext() {
    currIndex = Math.min(currIndex + 1, problems.length - 1) //avoids going over
    createProblem()
}

formEl.addEventListener('submit', handleSubmit)
nextButtonEl.addEventListener('click', handleNext)

//shows problem when page loads
createProblem()

