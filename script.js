const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Home Tool Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "Hyper Tool Markup Language",
        correct: "a"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Creative Style System",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a"
    },
    {
        question: "What does JS stand for?",
        a: "Java Standard",
        b: "Java System",
        c: "JavaScript",
        d: "Just Script",
        correct: "c"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<style>",
        b: "<script>",
        c: "<css>",
        d: "<head>",
        correct: "a"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        a: "background-color",
        b: "color",
        c: "bgcolor",
        d: "background-image",
        correct: "a"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "React",
        b: "Laravel",
        c: "Django",
        d: "Flask",
        correct: "a"
    },
    {
        question: "What is the correct syntax to link an external CSS file?",
        a: "<link rel='stylesheet' href='style.css'>",
        b: "<style src='style.css'>",
        c: "<css rel='stylesheet' href='style.css'>",
        d: "<link rel='stylesheet' src='style.css'>",
        correct: "a"
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "var name;",
        b: "v name;",
        c: "variable name;",
        d: "name = var;",
        correct: "a"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        a: "<a>",
        b: "<link>",
        c: "<href>",
        d: "<hyperlink>",
        correct: "a"
    },
    {
        question: "Which of the following is the correct way to comment in CSS?",
        a: "/* This is a comment */",
        b: "// This is a comment",
        c: "<!-- This is a comment -->",
        d: "# This is a comment",
        correct: "a"
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        a: "push()",
        b: "pop()",
        c: "shift()",
        d: "unshift()",
        correct: "a"
    },
    {
        question: "Which attribute is used to specify a unique identifier for an HTML element?",
        a: "id",
        b: "class",
        c: "name",
        d: "key",
        correct: "a"
    },
    {
        question: "What is the purpose of the 'alt' attribute in the <img> tag?",
        a: "To provide alternative text for the image",
        b: "To set the image size",
        c: "To link to another webpage",
        d: "To style the image",
        correct: "a"
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "function = myFunction()",
        c: "def myFunction()",
        d: "function:myFunction()",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        a: "<ul>",
        b: "<ol>",
        c: "<li>",
        d: "<dl>",
        correct: "a"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const answersEls = document.querySelectorAll('.answer');

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    resultEl.innerText = "";
}

function deselectAnswers() {
    answersEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            resultEl.innerText = `You finished! Your score is ${score}/${quizData.length}`;
            submitBtn.disabled = true; // Disable the submit button after completing the quiz
        }
    }
});
