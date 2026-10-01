    //problem array holding questions, answers, and feedback
    const problems=[
        //question 1
        {
        question:"5 + (3 * 4) =",
        correctAnswer: 17,
        correction:[
            {   matches: (answer) => answer === 32, 
                hint: "Multiply before dividing"
            }
        ],
        default: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 2
        {
        question:"10 - 2 * 3 =",
        correctAnswer: 4,
        correction: [
            {   matches: (answer) => answer === 24, 
                hint: "Multiply before subtracting"
            }
        ],
        default: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 3
        {
        question: "(6 + 2) / 2 =",
        correctAnswer: 4,
        correction: [
        {
        matches: (answer) => answer === 5,
        hint: "Parenetheses before division"
        }
        ],
        defaultHint: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 4
        {
        question: "12 / 3 * 4 =",
        correctAnswer: 16,
        correction: [
        {
        matches: (answer) => answer === 1,
        hint: "Divide and multiply from left to right"
        }
        ],
        defaultHint: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 5
        {
        question: "(20 + 1) + 3 * 4 =",
        correctAnswer: 33,
        correction: [
        {
        matches: (answer) => answer === 72,
        hint: "Multiply before adding outside of parentheses"
        }
        ],
        defaultHint: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 6
        {
        question: "45 / 3 * 5 + 15 /(1 * 3) =",
        correctAnswer: 80,
        correction: [
        {
        matches: (answer) => answer === 30,
        hint: "Parantheses, division, and multiplication come before addition"
        }
        ],
        defaultHint: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 7
        {
        question: "2(3 + 5(15 - 5 * 2)) =",
        correctAnswer: 56,
        correction: [
        {
        matches: (answer) => answer === 320,
        hint: "Multiply before adding"
        }
        ],
        defaultHint: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        },
        //question 8
        {
        question: "22  * 2 - 22 / 2 =",
        correctAnswer: 33,
        correction: [
        {
        matches: (answer) => answer === 11,
        hint: "Multiply and divide before subtracting"
        }
        ],
        defaultHint: "PEMDAS: parentheses, exponents, multiplication/division, addition/subtration"
        }
    ]

