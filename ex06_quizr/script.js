const questions = [{

}];
// #answer-container
const htmlAnswerContainer = document.querySelector('#answer-container');
// #question
const htmlQuestion = document.querySelector('#question');
// #total-correct
const htmlTotal = document.querySelector('#total-correct');
// save scrambled array here
//let scrambledQuestions;

/**
 * @returns {[]} copy of questions with items in random order
 */
function question( ) {
  const request = new XMLHttpRequest();
  questions.length=0;
  request.addEventListener('readystatechange',function () {
      if(request.readyState===4){
        const response = JSON.parse(request.responseText);
        if(request.status>=200 && request.status<300){
          response.results.forEach( (value,key)=>{
          questions[key]={ question: value.question,correctAnswer: value.correct_answer,};
          });
          init();
        }
      }

  });
  request.open('GET','https://opentdb.com/api.php?amount=10&type=boolean');
  request.send();

}

function initResults() {
  // select all elements with class .result
  // remove classes is-success and is-danger
  // add class is-dark
  document.querySelectorAll('.result').forEach(function (result) {
    result.classList.remove('is-success', 'is-danger');
    result.classList.add('is-dark');
  });
}

function changeTotal(total) {
  // change htmlTotal
  htmlTotal.textContent = total;
}

function changeQuestionIndex(questionIndex) {
  // change data-index in htmlQuestion
  htmlQuestion.dataset.index = questionIndex;
}

function changeQuestion(questionIndex) {
  // change textContent of htmlQuestion to the correct question (with questionIndex)
  // if no question is available (if all questions are answered) use following
  // 'Your score is 6. Wanna try again?'
  // of course 6 should be replaced by the correct number
  if (questionIndex >= questions.length) {
    htmlQuestion.textContent = 'Your score is ' + htmlTotal.textContent
      + '. Wanna try again?';
  } else {
    htmlQuestion.textContent = questions[questionIndex].question;
  }
}

function init() {
  // this function initializes the quiz
  // no need to edit this function
  //scrambledQuestions = scrambleQuestions();
  initResults();
  changeTotal(0);
  changeQuestionIndex(0);
  changeQuestion(0);
}

function answeredCorrectly(questionIndex) {
  // update the correct .result element use questionIndex
  // remove class is-dark
  // add class is-success
  // change total
  const currentResultElement = document.querySelector('.result:nth-child(' + (questionIndex + 1) + ')');
  currentResultElement.classList.remove('is-dark');
  currentResultElement.classList.add('is-success');
  changeTotal(parseInt(htmlTotal.textContent) + 1);
}

function answeredIncorrectly(questionIndex) {
  // update the correct .result element use questionIndex
  // remove class is-dark
  // add class is-danger
  const currentResultElement = document.querySelector('.result:nth-child(' + (questionIndex + 1) + ')');
  currentResultElement.classList.remove('is-dark');
  currentResultElement.classList.add('is-danger');
}

function answered(event) {
  // play the solution and make it work!!!
  if (event.target.matches('.answer')) {
    const questionIndex = parseInt(htmlQuestion.dataset.index);
    const givenAnswer = event.target.textContent;
    if (questionIndex >= questions.length) {
      if (givenAnswer === 'True') {
        question();
      }
    } else {
      const { correctAnswer } = questions[questionIndex];
      if (givenAnswer === correctAnswer) {
        answeredCorrectly(questionIndex);
      } else {
        answeredIncorrectly(questionIndex);
      }
      changeQuestionIndex(questionIndex + 1);
      changeQuestion(questionIndex + 1);
    }
  }
}

htmlAnswerContainer.addEventListener('click', answered);
question();
