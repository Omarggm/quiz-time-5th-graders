//questions for the quiz
function quizTime() {
    const myQuestions = [
        {
            question: 'what is the first letter in the alaphabet?',
            choices: ['a', 'b', 'c', 'd'],
            correctAnswer: 0,
        },
        {
            question: 'what is the bigest ocean?',
            choices: ['Atlantic', 'Pacific', 'Indian'],
            correctAnswer: 1,
        },
        {
            question: 'What is the powerhouse of a cell?',
            choices: ['Nucleus', 'Mitochondria', 'Plasma', 'Cell Wall'],
            correctAnswer: 2,
        }
    ]
    var score = 0
};

//timer code 
var counter = 60;
function startTimer() {
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            id = document.getElementById('timer');
            id.innerHTML = counter;
        }
    }, 1000);
};