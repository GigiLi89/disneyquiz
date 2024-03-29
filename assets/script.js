// Get HTML elements. Code from GreatStack @ Youtube //
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// Track index and score //
let  currentQuestionIndex = 0;
let score = 0;

// Questions and answer options copied from beano and bbc //
const questions = [
    {
        question: "What was the name of Wendy's dog in Peter Pan?",
        answers: [
            {text: "Nana", correct: true}, {text: "Bobo", correct: false}, 
            {text: "Lulu", correct: false}, {text: "Jojo", correct: false},
        ]
    },
    {
        question: "Who was Bambi's rabbit friend?",
        answers: [
            {text: "Peter", correct: false}, {text: "Thumper", correct: true},
            {text: "Drumper", correct: false}, {text: "Grumper", correct: false},
        ]  
    },
    {
        question: "What is the name of Simba's dad in The Lion King?",
        answers: [
            {text: "Timon", correct: false}, {text: "Pumba", correct: false},
            {text: "Nala", correct: false}, {text: "Mufasa", correct: true},
        ]  
    },
    {
        question: "In Monsters Inc, what do the monsters collect in order to power the city?",
        answers: [
            {text: "Recycled paper", correct: false}, {text: "Children's screams", correct: true},
            {text: "Coal", correct: false}, {text: "Nuclear stuff", correct: false},
        ]  
    },
    {
        question: "Who sang the song Under The Sea in The Little Mermaid?",
        answers: [
            {text: "Sebastian", correct: true}, {text: "Dory", correct: false},
            {text: "Nemo", correct: false}, {text: "Flounder", correct: false},
        ]  
    },
    {
        question: "Who was Snow White's enemy?",
        answers: [
            {text: "Maleficent", correct: false}, {text: "The Evil Queen", correct: true},
            {text: "Cruella De Vil", correct: false}, {text: "Scar", correct: false},
        ]  
    },
    {
        question: "How many Toy Story films are there in total?",
        answers: [
            {text: "2", correct: false}, {text: "5", correct: false},
            {text: "3", correct: false}, {text: "4", correct: true},
        ]  
    },
    {
        question: "Which film was named after Walt Disney?",
        answers: [
            {text: "Robin Hood", correct: false}, {text: "Peter Pan", correct: false},
            {text: "Wall-E", correct: true}, {text: "Pinnochio", correct: false},
        ]  
    },
    {
        question: "What is the name of Donald Duck's sister?",
        answers: [
            {text: "Dumbella", correct: true}, {text: "Dumbo", correct: false},
            {text: "Daisy", correct: false}, {text: "Della", correct: false},
        ]  
    },
    {
        question: "What is the name of the snowman in Frozen?",
        answers: [
            {text: "Oleg", correct: false}, {text: "Olaf", correct: true},
            {text: "Olov", correct: false}, {text: "Harry", correct: false},
        ]  
    },
];

//Start quiz, code from GreatStack @ Youtube//
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
    nextButton.disabled = true;
}

//Display question//
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

//Display answer options//
currentQuestion.answers.forEach(answer => {
    const button = createButton(answer.text, answer.correct);
    answerButtons.appendChild(button);
    button.addEventListener("click", selectAnswer);
});
}

// Create answer button after questions //
function createButton(text, correct) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("btn");
    if (correct) {
        button.dataset.correct = correct;
    }
    return button;
}

// Reset answer button //
function resetState() {
    answerButtons.innerHTML = "";
    nextButton.style.display = "block";
}

//Check answer, part of code from GreatStack @ Youtube//
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
});
//Shows the Next button after choosing an answer option//    
nextButton.disabled = false;
nextButton.style.display = "block";
}


//If there are no more questions it will display score. Code from GreatStack @ Youtube//
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

// Display score. Part of code from GreatStack @ Youtube
function showScore(){
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.textContent = "Play again";
}

// Event List. for next button click //
function nextButtonClickHandler() {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
}
nextButton.addEventListener("click", nextButtonClickHandler);

// Start the game //
startQuiz();

