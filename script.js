// Write your JavaScript here
var dayScore = 0;
var nightScore = 0;
var questionScore = 0;



var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');

var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');

var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');

var result = document.getElementById('result');
var restartButton = document.getElementById('restart-button')
// element.innerHTML = 'thing that replces current content'
// listen for click

q1a1.addEventListener("click", night);
q1a1.addEventListener("click", disableq1);
q1a2.addEventListener('click', day);
q1a2.addEventListener("click", disableq1);
q2a1.addEventListener('click', day);
q2a1.addEventListener('click', disableq2);
q2a2.addEventListener('click', night);
q2a2.addEventListener('click', disableq2);
q3a1.addEventListener('click', day);
q3a1.addEventListener('click', disableq3);
q3a2.addEventListener('click', night);
q3a2.addEventListener('click', disableq3);
restartButton.addEventListener('click', restart);



function disableq1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
}
function disableq2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
}
function disableq3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
}

function enable() {
   document.getElementById("q1a1").disabled = false;
   document.getElementById("q1a2").disabled = false; 
   document.getElementById("q2a1").disabled = false;
   document.getElementById("q2a2").disabled = false;
   document.getElementById("q3a1").disabled = false;
   document.getElementById("q3a2").disabled = false;
}


function night() {
  nightScore += 1;
  questionScore += 1;

  console.log('questionCount = ' + questionScore + ' nightScore ' + nightScore)
  if (questionScore == 3) {
  console.log('congrats! you finished the quiz')
  updateResult(); }

}

function day() {
  dayScore += 1;
  questionScore += 1;

  console.log('questionCount = ' + questionScore + ' dayScore = ' + dayScore)
  if (questionScore == 3) {
  console.log('congrats! you finished the quiz')
  updateResult(); }
}



function updateResult() {
  if (dayScore >= 2) {
    result.innerHTML = 'you are a morning person!'
    console.log('you are a day person!')
  } else if (nightScore >= 2) {
    result.innerHTML = 'you are a night person!'
    console.log('you are a night person')
  }
}

function restart() {
  dayScore = 0;
  nightScore = 0;
  questionScore = 0;
  result.innerHTML = 'You are a ...';
  console.log(questionScore)
  enable()
}
