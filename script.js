const quizData = [
    {
	question: "Which of the following is not a JavaScript framework?",
	a: "Node",
	b: "React",
	c: "Vue",
	d: "Cassandra",
	correct: "d"
},
{
	question: "How can a datatype be declared to be a constant type in JavaScript?",
	a: "var",
	b: "const",
	c: "let",
	d: "constant",
	correct: "b"
},
{
	question: "which year was JavaScript released?",
	a: "1993",
	b: "2015",
	c: "1995",
	d: "1998",
	correct: "c"
},
{
	question: "Which language is not a frontend language?",
	a: "CSS",
	b: "Java",
	c: "HTML",
	d: "JavaScript",
	correct: "b"
}
]; 

const questionEl = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const questionNumber = document.getElementById("question-number")
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const nextbtn = document.getElementById("next-btn");
const submitbtn = document.getElementById("submit-btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionNumber.innerText  =`${currentQuiz + 1}`;
    questionEl.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;

   // if(currentQuiz == quizData.length -1){
        //nextbtn.style.display="none";
        //submitbtn.style.display="block"
   // }
}



function deselectAnswers() {
    document.querySelectorAll('.answer').forEach(answers => answers.checked = false);
}

function getSelected() {
  
    let answer;

    answers.forEach((answers) => {
        if(answers.checked) {
            answer = answers.id;
        }
    });

    return answer;
}


nextbtn.addEventListener('click',() => {
    //check to see answer
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
    if(currentQuiz < quizData.length) {
        loadQuiz();
    }else {
          container.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button  onclick="location.reload()">Reload</button>`
    }
}
});

	