// Array of quiz questions and their answers
const questions = [{
    'que': 'Which of the following is Markup language ?',
    'a': 'css',
    'b': 'html',
    'c': 'javascript',
    'd': 'bootstrap',
    'correct': 'b'
},

{
    'que': 'Which of the following option leads to the portability and security of Java?',

    'a': 'Bytecode is executed by JVM',
    'b': 'The applet makes the Java code secure and portable',
    'c': 'Use of exception handling',
    'd': 'Dynamic binding between objects',
    'correct': 'a'
},
{
    'que': 'Which of the following is used for styling sheet ?',
    'a': 'html',
    'b': 'css',
    'c': 'javascript',
    'd': 'bootstrap',
    'correct': 'b'
},
{
    'que' : 'Which of the following is not a Java features?',
    'a' : 'Dynamic',
    'b' : 'Architecture Neutral',
    'c' : 'Use of pointers',
    'd' : 'Object-oriented',
    'correct': 'c'
},
{
    'que': 'Which is used for client-side development ?',
    'a': 'ruby',
    'b': 'java',
    'c': 'javascript',
    'd': 'python',
    'correct': 'c'
},
{
    'que': 'Choose which is used for Framework ?',
    'a': 'html',
    'b': 'css',
    'c': 'javascript',
    'd': 'bootstrap',
    'correct': 'd'
}];

// Initialize quiz variables
let index = 0; // Current question index
let total = questions.length; // Total number of questions
let right = 0, // Number of correct answers
    wrong = 0; // Number of wrong answers

// Get references to HTML elements
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

// Function to load a question
const loadQuestion = () => {
    if (index === total) {
        return endQuiz(); // If all questions are answered, end the quiz
    }

    reset(); // Reset the selected option
    const data = questions[index];
    quesBox.innerHTML = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

// Function to handle quiz submission
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer(); // Get the selected answer
    if (ans == data.correct) {
        right++; // If the answer is correct, increment the 'right' count
    } else {
        wrong++; // If the answer is wrong, increment the 'wrong' count
    }
    index++; // Move to the next question
    loadQuestion(); // Load the next question
    return;
}

// Function to get the selected answer
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

// Function to reset the selected options
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

// Function to end the quiz
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank you for Playing the Quiz </h3>
    <h2> ${right} / ${total} are correct <h2>
    `
}

// Initial load of the first question
loadQuestion();
