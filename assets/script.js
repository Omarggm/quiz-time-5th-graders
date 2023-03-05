//test to make sure javascript is linked properly
console.log('Hello')

var startBtn = document.querySelector("#start");

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

    var score = 0;

    for (var i = 0; i < myQuestions.length; i++) {
        var response = window.prompt(myQuestions[i].question);
        if (response == myQuestions[i].correctAnswer) {
            score++;
        }
    }
}


//Event listner to button
startBtn.addEventListener('click', quizTime);


//timer code 
 var counter = 60;
 
 setInterval(function(){
    counter--;
    if(counter >=0){
        id = document.getElementById('timer');
        id.innerHTML = counter;
    }
 }, 1000);

