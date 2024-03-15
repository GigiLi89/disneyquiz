// Questions and answer options //
const questions = [
    {
        question: "What was the name of Wendy's dog in Peter Pan?",
        answers: [
            {text: "Nana", correct: true},
            {text: "Bobo", correct: false},
            {text: "Lulu", correct: false},
            {text: "Jojo", correct: false},
        ]
    },
    {
        question: "Who was Bambi's rabbit friend?",
        answers: [
            {text: "Peter", correct: false},
            {text: "Thumper", correct: true},
            {text: "Drumper", correct: false},
            {text: "Grumper", correct: false},
        ]  
    },
    {
        question: "What is the name of Simba's dad in The Lion King?",
        answers: [
            {text: "Timon", correct: false},
            {text: "Pumba", correct: false},
            {text: "Nala", correct: false},
            {text: "Mufasa", correct: true},
        ]  
    },
    {
        question: "In Monsters Inc, what do the monsters collect in order to power the city?",
        answers: [
            {text: "Recycled paper", correct: false},
            {text: "Children's screams", correct: true},
            {text: "Coal", correct: false},
            {text: "Nuclear stuff", correct: false},
        ]  
    },
    {
        question: "Who sang the song Under The Sea in The Little Mermaid?",
        answers: [
            {text: "Sebastian", correct: true},
            {text: "Dory", correct: false},
            {text: "Nemo", correct: false},
            {text: "Flounder", correct: false},
        ]  
    },
    {
        question: "Who was Snow White's enemy?",
        answers: [
            {text: "Maleficent", correct: false},
            {text: "The Evil Queen", correct: true},
            {text: "Cruella De Vil", correct: false},
            {text: "Scar", correct: false},
        ]  
    },
    {
        question: "How many Toy Story films are there in total?",
        answers: [
            {text: "2", correct: false},
            {text: "5", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: true},
        ]  
    },
    {
        question: "Which film was named after Walt Disney?",
        answers: [
            {text: "Robin Hood", correct: false},
            {text: "Peter Pan", correct: false},
            {text: "Wall-E", correct: true},
            {text: "Pinnochio", correct: false},
        ]  
    },
    {
        question: "What is the name of Donald Duck's sister?",
        answers: [
            {text: "Dumbella", correct: true},
            {text: "Dumbo", correct: false},
            {text: "Daisy", correct: false},
            {text: "Della", correct: false},
        ]  
    },
    {
        question: "What is the name of the snowman in Frozen?",
        answers: [
            {text: "Oleg", correct: false},
            {text: "Olaf", correct: true},
            {text: "Olov", correct: false},
            {text: "Harry", correct: false},
        ]  
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//To store index and score//
let  currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

//Display question//
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//Display answer options//
currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}

//Removes previous answers//
function resetState(){
    nextButton.style.display = "block";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//Check answer//
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }    
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
//After choosing an answer the buttons will be disabled//        
        button.disabled = true;
    })
//Shows the Next button after choosing an answer option//    
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//If there are no more questions it will display score//
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

//Call//
startQuiz();
