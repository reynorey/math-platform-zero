let currIndex = 0; //current problem

//gets elements
const questionEl = document.getElementById("question")
const formEl = document.getElementById("answer-form")
const inputAnsEl = document.getElementById("answer")
const feedbackEl = document.getElementById("feedback")
const nextButtonEl = document.getElementById("next-button")

function createProblem() {
    const problem =problems[currIndex]
    questionEl.textContent = problem.question; 
    feedbackEl.textContent = '' //clear feedback
    inputAnsEl.value = '' //clear answer
}

function handleSubmit() {
    event.preventDefault(); //stops loading
    const problem =problems[currIndex]
    const NumericAnswer = Number(inputAnsEl.value)

    //checks if correct
    if (NumericAnswer === problem.correctAnswer) {
        feedbackEl.textContent = "Correct!"
        return
    }

    //checks if wrong and finds relevant feedback
    const matched = problem.correction.find(m=> m.matches(NumericAnswer))
    feedbackEl.textContent = matched ? matched.hint : problem.defaultHint
}

function handleNext() {
    currIndex = Math.min(currIndex + 1, problems.length - 1) //avoids going over
    createProblem()
}

formEl.addEventListener('submit', handleSubmit)
nextButtonEl.addEventListener('click', handleNext)

//shows problem when page loads
createProblem()

