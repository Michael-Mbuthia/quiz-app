const quizData = [{
	question: "Which of the following is not a JavaScript framework?",
	a: "Node",
	b: "React",
	c: "Vue",
	d: "Cassandra",
	correct: "d",
},
{
	question: "How can a datatype be declared to be a constant type in JavaScript?",
	a: "var",
	b: "const",
	c: "let",
	d: "constant",
	correct: "b",
},
{
	question: "which year was JavaScript released?",
	a: "1993",
	b: "2015",
	c: "1995",
	d: "1998",
	correct: "c",
},
{
	question: "Which language is not a frontend language?",
	a: "CSS",
	b: "Java",
	c: "HTML",
	d: "JavaScript",
	correct: "b",
}
]; 

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}



	