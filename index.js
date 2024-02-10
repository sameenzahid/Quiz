// Define quiz by array

const quizData = [
    {
        question: "What does HTML stand for?",
        options: [ " Hyper Text Markup Language", " Hyperlinks and Text Markup Language", " Home Tool Markup Language", "Hyper Transfer Markup Language"],
        correct: 0,
    },
    {
        question: "Which of the following tags is used to define a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>","<url>"],
        correct: 1,
    },
    {
        question: "Which programming language is used for styling web pages?",
        options: ["Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","Colorful Style Sheets"],
        correct: 0,
    },
     {
        question: "Which of the following is NOT a valid CSS unit of measurement?",
        options: ["px(pixels)","em","pt(points)","dg(degrees)"],
        correct: 3,
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        options: ["background-color","color","background","bgcolor"],
        correct: 0,
    },
    {
        question: "What is the purpose of the alt attribute in HTML image tags?",
        options: ["It specifies the alignment of the image","It defines the size of the image","It provides alternative text for the image","It sets the border of the image"],
        correct: 2,
    },
    {
        question: "Which of the following is NOT a valid HTTP status code?",
        options: ["404 Not Found","200 OK","500 Internal Server Error","303 Page Moved Permanently"],
        correct: 3,
    },
    {
        question: "What does AJAX stand for?",
        options: ["Asynchronous JavaScript and XML","Advanced JavaScript and XML","Asynchronous JavaScript and XHTML","Automated JavaScript and XML"],
        correct: 0,
    },
    {
        question: "What does SEO stand for in the context of web development?",
        options: ["Secure Engine Optimization","Search Engine Optimization","Site Enhancement Optimization","Secure Encryption Overlay"],
        correct: 1,
    },
];

// JavaScript Initialization
const quiz = document.querySelector(".quiz")
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question", ".option_1", ".option_2", ".option_3", ".option_4");
const submitBtn = document.querySelectorAll("#submit");

let currentQuiz = 0;
let score = 0;

// Load Quiz Question and options

const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(question);
    console.log(options);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`
    

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};
loadQuiz();

// Get Selected Answer Function on Button Click


const getSelectedOption = () => {
    let answerElment = Array.from(answerElm)
    return answerElment.findIndex((curOption) => curOption.checked);
};


    submit.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);
     
    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score + 1;
    };

    currentQuiz ++;

    if (currentQuiz < quizData.length) {
        deselectAnswers();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class="result">
        <h2>Your Score: ${score}/${quizData.length}</h2>
        <p>Congratulations on Completing the Quiz!</p>
        <button class="reload-button" onClick="location.reload()"> Play Again </button>
        </div>
        `;
    }
});

const deselectAnswers = () =>{
    return answerElm.forEach((curOption) => curOption.checked = false)
};
